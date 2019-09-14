using BlackLion.Contracts;
using System;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using System.Net.Http;
using System.Data.SqlClient;
using Newtonsoft.Json.Schema.Generation;
using Newtonsoft.Json.Serialization;
using System.Threading.Tasks;

namespace BlackLion.Core.Database
{
    public class DatabaseContractLoader<TContract> where TContract : IContract
    {
        internal static HttpClient client = new HttpClient();
        public TContract Contract { get; internal set; }
        internal string ResponseText { get; set; }
        internal JObject ContractRaw { get; set; }
        private DatabaseClient Client { get; set; }

        public DatabaseContractLoader(string url)
        {
            var responseText = client.GetStringAsync(url).Result;
            ContractRaw = JObject.Parse(responseText);
            Contract = ContractRaw.ToObject<TContract>();
            ResponseText = responseText;
            Client = new DatabaseClient();
        }

        public DatabaseContractLoader<TContract> ForProperty<TProperty>(Expression<Func<TContract, TProperty>> property, string jsonKey, string associatedIdPropertyName, bool validateSchema = false)
            where TProperty : IContract
        {
            var token = ContractRaw.TryGetValue(jsonKey, out JToken member);
            if (token)
            {
                if (validateSchema)
                {
                    var schema = GetPropertySchema(property); 
                    var valid = member.ToObject<JObject>().IsValid(schema);
                    if (!valid)
                        return this;
                }
                var propertyContract = member.ToObject<TProperty>();
                var id = SaveProperty(property, propertyContract).Result;
                typeof(TContract).GetProperty(associatedIdPropertyName).SetValue(Contract, id);
            } else
            {
                throw new Exception($"Unable to map JSON response to ${typeof(TProperty).Name}");
            }
            return this;
        }

        public DatabaseContractLoader<TContract> ForProperty<TProperty>(Expression<Func<TContract, TProperty>> property, Func<DatabaseContractLoader<TProperty>, DatabaseContractLoader<TProperty>> contractLoader)
            where TProperty : IContract
        {
            var loader = contractLoader.Method.Invoke(null, null) as DatabaseContractLoader<TProperty>;
            // TODO get the id and put it on here somehow
            return this;
        }

        private JSchema GetPropertySchema<TProperty>(Expression<Func<TContract, TProperty>> property)
        {
            var generator = new JSchemaGenerator();
            generator.DefaultRequired = Newtonsoft.Json.Required.Default;
            generator.ContractResolver = new DefaultContractResolver
            {
                NamingStrategy = new SnakeCaseNamingStrategy()
            };
            return generator.Generate(typeof(TProperty));
        }

        public MemberInfo FindProperty(LambdaExpression lambdaExpression)
        {
            Expression expressionToCheck = lambdaExpression;

            var done = false;

            while (!done)
            {
                switch (expressionToCheck.NodeType)
                {
                    case ExpressionType.Convert:
                        expressionToCheck = ((UnaryExpression)expressionToCheck).Operand;
                        break;
                    case ExpressionType.Lambda:
                        expressionToCheck = ((LambdaExpression)expressionToCheck).Body;
                        break;
                    case ExpressionType.MemberAccess:
                        var memberExpression = ((MemberExpression)expressionToCheck);

                        if (memberExpression.Expression.NodeType != ExpressionType.Parameter &&
                            memberExpression.Expression.NodeType != ExpressionType.Convert)
                        {
                            throw new ArgumentException(
                                $"Expression '{lambdaExpression}' must resolve to top-level member and not any child object's properties. You can use ForPath, a custom resolver on the child type or the AfterMap option instead.",
                                nameof(lambdaExpression));
                        }

                        var member = memberExpression.Member;

                        return member;
                    default:
                        done = true;
                        break;
                }
            }

            throw new Exception("Unable to locate member of database contract.");
        }

        public DataTable getPropertyDataTable<TProperty>(Expression<Func<TContract, TProperty>> member)
            where TProperty : IContract
        {
            Type type = typeof(ISchemaDataTables);
            var contractName = typeof(TProperty).Name;

            var method = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(t => t.GetTypes())
                .Where(p => type.IsAssignableFrom(p))
                .SelectMany(t => t.GetMethods())
                .FirstOrDefault(m => m.GetCustomAttributes()
                    .OfType<DataTableForContract>()
                    .Select(s => s.Contract)
                    .Where(w => w.Equals(contractName))
                    .Count() > 0);

            if (method != null)
                return (DataTable)method.Invoke(null, null);
            else
                throw new ApplicationException($"Unable to find DataTable link to {contractName}");
        }

        private async Task<int> SaveProperty<TProperty>(Expression<Func<TContract, TProperty>> property, TProperty contract)
            where TProperty : IContract
        {
            var propObjArray = typeof(TProperty).GetProperties()
                    .Where(p => p.GetCustomAttributes().OfType<DataTableIgnorePropertyAttribute>().Count() == 0)
                    .Select(p => p.GetValue(contract))
                    .ToArray();
            var dataTable = getPropertyDataTable(property);
            dataTable.Rows.Add(propObjArray);
            var id = await Client.Update(typeof(TContract), typeof(TProperty), dataTable);
            return id;
        }

        public async Task<int> Finalize()
        {
            return await SaveProperty(d => d, Contract);
        }
    }
}
