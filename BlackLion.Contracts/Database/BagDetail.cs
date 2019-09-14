using Newtonsoft.Json;

namespace BlackLion.Contracts.Database
{
    public class BagDetail : IContract
    {

        [JsonProperty(Required = Required.Always)]
        public int Size { get; set; }

        [JsonProperty("no_sell_or_sort", Required = Required.Always)]
        public bool NoSellOrSort { get; set; }
    }
}
