using InamMotors.Model;
using InamMotors.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InamMotors.Controllers
{
    [Route("api/[controller]")]
    public class GenerateInvoiceController : Controller
    {
        public class Data
        {
            public string Value { get; set; }
        }
        GenerateInvoiceService generateInvoiceService;
        public GenerateInvoiceController()
        {
            generateInvoiceService = new GenerateInvoiceService();
        }

        [HttpPost("[action]")]
        public string SaveInvoice([FromBody] Invoice invoice)
        {
            return generateInvoiceService.SaveInvoice(invoice);
        }
    }
}
