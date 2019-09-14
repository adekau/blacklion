using System;
using System.Net.Http;
using System.Threading.Tasks;
using BlackLion.Contracts.Database;
using BlackLion.Core.Database;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema.Generation;

namespace BlackLion
{
    class Program
    {
        static HttpClient client = new HttpClient();
        static void Main(string[] args)
        {
            GetItem().Wait();
        }

        public static async Task GetItem()
        {
            /*var serializer = new DataContractJsonSerializer(typeof(Item));
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            var stream = client.GetStreamAsync("https://api.guildwars2.com/v2/items/78358");
            var text = await client.GetStringAsync("https://api.guildwars2.com/v2/items/78358");
            var item = serializer.ReadObject(await stream) as Item;
            Console.WriteLine(item.Details);*/
            //Console.WriteLine(text);

            //var loadExpression = new LoadExpression<Item>()
            //    .ForChild(m => m.BagDetails);

            /*var dbLoader = await new DatabaseContractLoader<Item>("https://api.guildwars2.com/v2/items/78358")
                .ForProperty(t => t.BagDetails, "details", "DetailsId", true)
                .Finalize();*/
            //.ForProperty(t => t.BagDetails, d => d.ForProperty(c => c.DoesNotExist, "doesnotexist", "doesnotexistid"));


            var dbLoader = await new DatabaseContractLoader<Item>("https://api.guildwars2.com/v2/items/82436")
                .ForProperty(t => t.BagDetails, "details", "DetailsId", true)
                .ForProperty(t => t.ConsumableDetails, "details", "DetailsId", true)
//                .ForProperty(t => t.ArmorDetails, "details", "DetailsId", true)
                .ForProperty(
                    t => t.ArmorDetails,
                    l => l.ForProperty(c => c.InfixUpgrade, "infix_upgrade", "InfixUpgradeId", true))
                .Finalize();

            /*var dbLoader2 = new DatabaseContractLoader<Item>("https://api.guildwars2.com/v2/items/78000")
                .ForProperty(t => t.BagDetails, "details", "DetailsId", true)
                .ForProperty(t => t.ConsumableDetails, "details", "DetailsId", true);*/

        }
    }
}
