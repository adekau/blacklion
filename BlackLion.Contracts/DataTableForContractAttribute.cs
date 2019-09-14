using BlackLion.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace BlackLion.Contracts
{
    [System.AttributeUsage(AttributeTargets.All, Inherited = false, AllowMultiple = true)]
    public class DataTableForContract : Attribute
    {
        readonly string _contract;

        public DataTableForContract(string contract)
        {
            this._contract = contract;
        }

        public string Contract
        {
            get { return this._contract; }
        }
    }
}