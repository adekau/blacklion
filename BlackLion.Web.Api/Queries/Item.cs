﻿namespace BlackLion.Web.Api.Queries
{
    public class Item
    {
        public int ItemId { get; set; }

        public string ChatLink { get; set; }

        public string Name { get; set; }

        public string Icon { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public string Rarity { get; set; }

        public int? Level { get; set; }

        public int? VendorValue { get; set; }

        public int? DefaultSkin { get; set; }

        public string[] Flags { get; set; }

        public string[] GameTypes { get; set; }

        public string[] Restrictions { get; set; }

        public int DetailsId { get; set; }
    }
}
