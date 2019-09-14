using Newtonsoft.Json;

namespace BlackLion.Contracts.Database
{
    public class ArmorDetail : IContract
    {
        [JsonProperty(Required = Required.Always)]
        public string Type { get; set; }

        [JsonProperty("weight_class", Required = Required.Always)]
        public string WeightClass { get; set; }

        public int? Defense { get; set; }

        [DataTableIgnoreProperty]
        public object[] InfusionSlots { get; set; }

        [DataTableIgnoreProperty]
        public InfixUpgrade InfixUpgrade { get; set; }

        public int? InfixUpgradeId { get; set; }

        [JsonProperty("suffix_item_id")]
        public int? SuffixItemId { get; set; }

        [JsonProperty("secondary_suffix_item_id")]
        public string SecondarySuffixItemId { get; set; }

        [Csv]
        [JsonProperty("stat_choices")]
        public int[] StatChoices { get; set; }
    }
}
