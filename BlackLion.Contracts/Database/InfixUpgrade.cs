using Newtonsoft.Json;

namespace BlackLion.Contracts
{
    public class InfixUpgrade : IContract
    {
        [JsonProperty("id", Required = Required.Always)]
        public int ItemStatId { get; set; }

        public int BuffId { get; set; }
    }
}
