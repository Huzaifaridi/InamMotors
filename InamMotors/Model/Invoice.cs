using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace InamMotors.Model
{
    public class Invoice
    {
        public string VehicleNumber { get; set; }
        public string InsuredCompanyId { get; set; }
        public string GstinUin { get; set; }
        public string KMReading { get; set; }
        public string MakeModel { get; set; }
        public string ClaimNo { get; set; }
        public List<SparePart> Items { get; set; }

    }
}
