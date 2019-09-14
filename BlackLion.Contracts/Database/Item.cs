using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace BlackLion.Contracts.Database
{
    public class Item : IContract
    {
        [JsonProperty("id", Required = Required.Always)]
        public int ItemId { get; set; }

        [JsonProperty("chat_link")]
        public string ChatLink { get; set; }

        public string Name { get; set; }

        public string Icon { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public string Rarity { get; set; }

        public int? Level { get; set; }

        [JsonProperty("vendor_value")]
        public int? VendorValue { get; set; }

        [JsonProperty("default_skin")]
        public int? DefaultSkin { get; set; }

        [Csv]
        public string[] Flags { get; set; }

        [Csv]
        [JsonProperty("game_types")]
        public string[] GameTypes { get; set; }

        [Csv]
        public string[] Restrictions { get; set; }

        [DataTableIgnoreProperty]
        public BagDetail BagDetails { get; set; }

        [DataTableIgnoreProperty]
        public ConsumableDetail ConsumableDetails { get; set; }

        [DataTableIgnoreProperty]
        public ArmorDetail ArmorDetails { get; set; }

        public int DetailsId { get; set; }
        //public object Details => BagDetails; // or blah or blah or blah depending on if null
    }
}
