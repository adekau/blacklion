using Newtonsoft.Json;

namespace BlackLion.Contracts.Database
{
    public class ConsumableDetail : IContract
    {
        [JsonProperty(Required = Required.Always)]
        public string Type { get; set; }

        public string Description { get; set; }

        [JsonProperty("duration_ms", Required = Required.Always)]
        public int DurationMs { get; set; }

        public string UnlockType { get; set; }

        public int? ColorId { get; set; }

        public int? RecipeId { get; set; }

        public string ExtraRecipeIds { get; set; }

        public int GuildUpgradeId { get; set; }

        [JsonProperty("apply_count", Required = Required.AllowNull)]
        public int ApplyCount { get; set; }

        [JsonProperty(Required = Required.AllowNull)]
        public string Name { get; set; }

        public string Icon { get; set; }

        public string SkinIds { get; set; }
    }
}
