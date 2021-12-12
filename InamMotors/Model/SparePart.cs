using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InamMotors.Model
{
    public class SparePart
    {
        public string PartId { get; set; }
        public string PartName { get; set; }
        public string HsnSac { get; set; }
        public int Tax { get; set; }
        public int Unit { get; set; }
        public decimal Rate { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal Amount { get; set; }
    }
}
