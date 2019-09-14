using System;
using System.Collections.Generic;
using System.Text;

namespace BlackLion.Contracts
{
    [System.AttributeUsage(AttributeTargets.All, Inherited = false, AllowMultiple = false)]
    public class CsvAttribute : Attribute
    {
        public CsvAttribute() { }
    }
}
