using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InamMotors.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        [HttpGet("[action]")]
        public string GetData(string userName, string password)
        {
            if (userName == "test" && password == "test")
                return "success";
            else
                return "failure";

        }
    }
}
