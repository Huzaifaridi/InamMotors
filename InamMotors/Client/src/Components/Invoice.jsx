import React, { useContext, useState } from 'react';
import axios from 'axios';
import Logo from '../images/logo.png'
import { Context } from '../Context/InvoiceContext';

function Invoice({ setOpenModal, invoice }) {
  const [response, setResponse] = useState('');
  const [items] = useContext(Context);
  const taxableAmount = items.slice(0,2).map((a)=>parseFloat(a.amount)).reduce((prev, curr) => prev + curr, 0);
  const tax = items.slice(0,2).map((a)=>parseFloat(a.taxAmount)).reduce((prev, curr) => prev + curr, 0);
  const data = items.filter((a)=> a.partName !== '');
  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString('en-IN', {
       style: 'currency',
       currency: 'INR'
    });
    return curr;
 };

 const Submit = () => {
    const method = 'post';
    // const res = axios({
    //   method,
    //   url: '/api/GenerateInvoice/SaveInvoice',
    //   data: JSON.stringify(invoice),
    //   headers: { 'Content-Type': 'application/json' },
    // });
     console.log('test');
    axios({
      method,
      url: `/api/GenerateInvoice/SaveInvoice`,
      data: JSON.stringify(invoice),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
        if(response.data === "success"){
            setResponse(true);
        }
        else if (response.data === "failure"){
          setResponse(false);
        }
    })
    .catch((e) => {
      if (e.name !== 'AbortError') {
          console.log('fail:', e.message)
      }
    });
} 

 /* eslint-disable */
 function convertNumberToWords(amount) {
  var words = new Array();
  words[0] = '';
  words[1] = 'One';
  words[2] = 'Two';
  words[3] = 'Three';
  words[4] = 'Four';
  words[5] = 'Five';
  words[6] = 'Six';
  words[7] = 'Seven';
  words[8] = 'Eight';
  words[9] = 'Nine';
  words[10] = 'Ten';
  words[11] = 'Eleven';
  words[12] = 'Twelve';
  words[13] = 'Thirteen';
  words[14] = 'Fourteen';
  words[15] = 'Fifteen';
  words[16] = 'Sixteen';
  words[17] = 'Seventeen';
  words[18] = 'Eighteen';
  words[19] = 'Nineteen';
  words[20] = 'Twenty';
  words[30] = 'Thirty';
  words[40] = 'Forty';
  words[50] = 'Fifty';
  words[60] = 'Sixty';
  words[70] = 'Seventy';
  words[80] = 'Eighty';
  words[90] = 'Ninety';
  amount = amount.toString();
  var atemp = amount.split(".");
  var number = atemp[0].split(",").join("");
  var n_length = number.length;
  var words_string = "";
  if (n_length <= 9) {
      // eslint-disable-next-line no-array-constructor
      var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var received_n_array = new Array();
      for (var i = 0; i < n_length; i++) {
          received_n_array[i] = number.substr(i, 1);
      }
      for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
          n_array[i] = received_n_array[j];
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
          if (i === 0 || i === 2 || i === 4 || i === 7) {
              if (n_array[i] === 1) {
                  n_array[j] = 10 + parseInt(n_array[j]);
                  n_array[i] = 0;
              }
          }
      }
      let value = "";
      for (var i = 0; i < 9; i++) {
          if (i === 0 || i === 2 || i === 4 || i === 7) {
              value = n_array[i] * 10;
          } else {
              value = n_array[i];
          }
          if (value !== 0) {
              words_string += words[value] + " ";
          }
          if ((i === 1 && value !== 0) || (i === 0 && value !== 0 && n_array[i + 1] === 0)) {
              words_string += "Crores ";
          }
          if ((i === 3 && value !== 0) || (i === 2 && value !== 0 && n_array[i + 1] === 0)) {
              words_string += "Lakhs ";
          }
          if ((i === 5 && value !== 0) || (i === 4 && value !== 0 && n_array[i + 1] === 0)) {
              words_string += "Thousand ";
          }
          if (i === 6 && value !== 0 && (n_array[i + 1] !== 0 && n_array[i + 2] !== 0)) {
              words_string += "Hundred and ";
          } else if (i === 6 && value !== 0) {
              words_string += "Hundred ";
          }
      }
      words_string = words_string.split("  ").join(" ");
  }
  return words_string;
}
/* eslint-enable */
  return (
      <div className="modalBackground">
      <div className="modalContainer">
      <div className="titleCloseBtn">
          <button onClick={() => {
              setOpenModal(false);
            }}>
            X
          </button>
        </div>
      <div className="invoice-box">
      <form>
			<table cellpadding="0" cellspacing="0">
				<tr className="top">
					<td  colspan="9">
						<table>
							<tr>
								<td className="title">
                  <div  id="brandingInvoice">
                    <img src={Logo} alt="Company Logo" className="logo" />
                    <h1 className="site-title">INAM MOTARS</h1>
                  </div>
                  <div className="invoice-subheading">
                    Yadav Market, Near Edelco Apartments, Puraniya, Lucknow(UP)<br />
                    Mobile No.:9807441678, 9307010124<br />
                    E-Mail: inamglassmotors@gmail.com/inammotars@gmail.com
                </div>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr className="information">
					<td colspan="9">
						<table>
							<tr>
								<td>
                  <strong>Party Details :</strong>  {invoice.vehicleNumber}<br />
									{invoice.insuredCompanyName}<br />
									{invoice.insuredCompanyAddress.split(',')[0] + ', ' + invoice.insuredCompanyAddress.split(',')[1]}<br />
									{invoice.insuredCompanyAddress.split(',')[2] + ', ' + invoice.insuredCompanyAddress.split(',')[3]}<br />
                  <br />
                  GSTIN/UIN : {invoice.gstinUin}<br />
                  A/C : 0<br />
                  GSTIN/UIN : {invoice.gstinUin}<br />
								</td>

								<td>
								Invoice No. :  103<br />
                Dated :  29-Oct-21<br />
                Reverse Charge :  <br />
                RO NO :  <br />
                RO Date : <br />
                KM Reading :  {invoice.kmReading}<br />
                Make/ Model : {invoice.makeModel}<br />
                CLAIM No : {invoice.claimNo}<br />
                </td>
							</tr>
						</table>
					</td>
				</tr>
				<tr className="heading">
					<td>S.No.</td>
					<td>Description of Goods</td>
					<td>Part No.</td>
					<td>HSN/SAC</td>
					<td>Tax%</td>
					<td>Unit</td>
          <td>Rate</td>
          <td>Tax ₹</td>
          <td>Amount (₹)</td>
				</tr>
        {
         data.map((item, idx) => (
          <tr className="item">
              <td>{idx+1}</td>
              <td>{item.partName}</td>
              <td>{item.partId}</td>
              <td>{item.hsnSac}</td>
              <td>{item.tax}</td>
              <td>{item.unit}</td>
              <td>{toIndianCurrency(item.rate)}</td>
              <td>₹ {toIndianCurrency(item.taxAmount)}</td>
              <td>₹ {toIndianCurrency(item.amount)}</td>
				  </tr>
          ))            
        }
				<tr className="total">
					<td colspan="9">Taxable Amount: {toIndianCurrency(taxableAmount)}</td>
				</tr>
        <tr className="total">
          <td colSpan="9">CGST: {toIndianCurrency(tax/2)}</td>
				</tr>
        <tr className="total">
          <td colSpan="9"> SGST: {toIndianCurrency(tax/2)}</td>
				</tr>
        <tr className="total">
          <td colSpan="9">Total Amount: {toIndianCurrency(taxableAmount + tax)}</td>
				</tr>
        <tr className="total">
            <td colSpan="9">{convertNumberToWords((taxableAmount + tax))} Only.</td>
				</tr>
        <tr className="total">
          <td colSpan="9">OUR BANK: ICICI Bank A/C : 125805500583 IFSC : ICIC0001258</td>
				</tr>
        <tr className="">
        <td colspan="9">
						<table>
							<tr>
								<td>
                  <strong>Terms & Conditions:</strong><br />
                  E. & O.E. <br />
                  <ul>
                    <li>Goods once sold will not be taken back.</li>
                    <li>Interst @ 18% p.a. will be charged if the payment <br />
                        is not made with in stipulated time.</li>
                    <li>Subject to "Lucknow" Jurisdiction only.</li>
                  </ul>
								</td>
								<td>
                For <strong>INAM MOTARS</strong> 
                <br />
                <br />
                <br />
                <br />
                Authorised Signatory
                </td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
      </form>
		</div>
    <div className="footer">
          <button onClick={() => {
              setOpenModal(false);
            }}>
            Cancel
          </button>
          <button type="submit" onClick={Submit}>Save</button>
          {/* <button onclick="window.print();">Print</button> */}
        </div>
      </div>
    </div>
    );
}

export default Invoice;
