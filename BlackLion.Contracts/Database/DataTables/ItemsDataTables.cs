using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using BlackLion.Contracts;

namespace BlackLion.Contracts.Database.DataTables
{
    public class ItemsDataTables : ISchemaDataTables
    {
        [DataTableForContract(nameof(Item))]
        public static DataTable ItemDataTable() {
            var item = new DataTable();
            item.Columns.Add("ItemId");
            item.Columns.Add("ChatLink");
            item.Columns.Add("Name");
            item.Columns.Add("Icon");
            item.Columns.Add("Description");
            item.Columns.Add("Type");
            item.Columns.Add("Rarity");
            item.Columns.Add("Level");
            item.Columns.Add("VendorValue");
            item.Columns.Add("DefaultSkin");
            item.Columns.Add("Flags");
            item.Columns.Add("GameTypes");
            item.Columns.Add("Restrictions");
            item.Columns.Add("DetailsId");
            return item;
        }

        [DataTableForContract(nameof(BagDetail))]
        public static DataTable BagDetailDataTable()
        {
            var bagDetail = new DataTable();
            bagDetail.Columns.Add("Size");
            bagDetail.Columns.Add("NoSellOrSort");
            return bagDetail;
        }

        [DataTableForContract(nameof(ConsumableDetail))]
        public static DataTable ConsumableDetailDataTable()
        {
            var consumableDetail = new DataTable();
            consumableDetail.Columns.Add("Type");
            consumableDetail.Columns.Add("Description");
            consumableDetail.Columns.Add("DurationMs");
            consumableDetail.Columns.Add("UnlockType");
            consumableDetail.Columns.Add("ColorId");
            consumableDetail.Columns.Add("RecipeId");
            consumableDetail.Columns.Add("ExtraRecipeIds");
            consumableDetail.Columns.Add("GuildUpgradeId");
            consumableDetail.Columns.Add("ApplyCount");
            consumableDetail.Columns.Add("Name");
            consumableDetail.Columns.Add("Icon");
            consumableDetail.Columns.Add("SkinIds");
            return consumableDetail;
        }

        [DataTableForContract(nameof(ArmorDetail))]
        public static DataTable ArmorDetailDataTable()
        {
            var armorDetail = new DataTable();
            armorDetail.Columns.Add("Type");
            armorDetail.Columns.Add("WeightClass");
            armorDetail.Columns.Add("Defense");
            armorDetail.Columns.Add("InfixUpgradeId");
            armorDetail.Columns.Add("SuffixItemId");
            armorDetail.Columns.Add("SecondarySuffixItemId");
            armorDetail.Columns.Add("StatChoices");
            return armorDetail;
        }

        [DataTableForContract(nameof(InfixUpgrade))]
        public static DataTable InfixUpgradeDataTable()
        {
            var infixUpgrade = new DataTable();
            infixUpgrade.Columns.Add("ItemStatId");
            infixUpgrade.Columns.Add("BuffId");
            return infixUpgrade;
        }
    }
}
