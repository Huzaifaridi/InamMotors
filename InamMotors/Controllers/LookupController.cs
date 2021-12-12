using InamMotors.Model;
using InamMotors.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InamMotors.Controllers
{
    [Route("api/[controller]")]
    public class LookupController : Controller
    {
        LookupServices _lookupServices;

        public LookupController()
        {
            _lookupServices = new LookupServices();
        }

        [HttpGet("[action]")]
        public List<InsuredCompany> GetInsuranceCompanies()
        {
            return _lookupServices.GetInsuredCompanies();
        }
    }
}
