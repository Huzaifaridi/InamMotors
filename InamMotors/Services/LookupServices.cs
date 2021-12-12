using InamMotors.Model;
using System.Collections.Generic;

namespace InamMotors.Services
{
    public class LookupServices
    {
        public List<InsuredCompany> GetInsuredCompanies()
        {
            List<InsuredCompany> list = new List<InsuredCompany>()
            {
                new InsuredCompany(){ Id="1", Name="Bajaj Allianz General Insurance Company Limited", GstTinNumber="09AABCB5730G1ZV", Address="4th floor, HABIBULAH ESTATE ,HALWASIA COMMERCE BUILDING HAZARTGANJ" },
                new InsuredCompany(){ Id="2", Name="Allianz General Insurance Company Limited", GstTinNumber="09AABCB5730G1ZV", Address="HABIBULAH ESTATE ,HALWASIA COMMERCE BUILDING HAZARTGANJ" },
                new InsuredCompany(){ Id="3", Name="General Insurance Company Limited", GstTinNumber="07AABCB5730G1ZV", Address="ESTATE ,HALWASIA COMMERCE BUILDING HAZARTGANJ" },
                new InsuredCompany(){ Id="4", Name="Insurance Company Limited", GstTinNumber="06AABCB5730G1ZV", Address="HALWASIA COMMERCE BUILDING HAZARTGANJ" },
                new InsuredCompany(){ Id="5", Name="Company Limited", GstTinNumber="03AABCB5730G1ZV", Address="5th floor, HABIBULAH ESTATE ,HALWASIA COMMERCE BUILDING HAZARTGANJ" },
            };
            return list;
        }
    }
}
