using System;
using System.Data;
using System.Linq;
using System.Data.SqlClient;
using System.Threading.Tasks;
using BlackLion.Contracts;
using System.Reflection;

namespace BlackLion.Core.Database
{
    public class DatabaseClient
    {
        private SqlConnection Client { get; set; }
        private string ConnectionString { get; set; }

        public DatabaseClient()
        {
            ConnectionString = Environment.GetEnvironmentVariable("ConnectionStrings:BlackLion", EnvironmentVariableTarget.Machine);
            Client = new SqlConnection(ConnectionString);
        }

        public async Task<int> Update(Type schema, Type table, DataTable data)
        {
            /*foreach (var property in table.GetProperties().Where(p => p.GetCustomAttributes().OfType<CsvAttribute>().Count() > 0))
            {
                var dr = data.Rows[0];
                dr[property.Name] = string.Join(",", dr[property.Name]);
            }*/

            Client.Open();
            var command = new SqlCommand($"[{schema.Name}s].[Update{table.Name}]", Client);
            command.CommandType = System.Data.CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@Table", data);
            command.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;
            await command.ExecuteNonQueryAsync().ConfigureAwait(false);
            var id = int.Parse(command.Parameters["@Id"].Value.ToString());
            Client.Close();
            return id;
        }

        /*public async Task<bool> SaveAsync<TContract>(LoadExpression<TContract> loadExpression) where TContract : IContract
        {
            return await Task.Run(() => true);
        }*/
    }
}
