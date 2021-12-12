import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AddInvoiceItem from './AddInvoiceItem'
import Invoice from './Invoice'
import { Context } from '../Context/InvoiceContext';

function GenerateBill(props) {
    const defaultItems = () => {
        return {
            partId: '',
            partName: '',
            hsnSac: '',
            tax: '',
            unit: 0,
            rate: 0,
            taxAmount: 0,
            amount: 0
        }
    }
    const defaultInvoice = () => {
        const { user } = props;
        const { firstName, lastName, employeeId } = user || {};
    
        return {
          vehicleNumber: '',
          insuredCompanyId: '',
          insuredCompanyName: '',
          insuredCompanyaddress: '',
          gstinUin: '',
          kmReading: 0,
          makeModel: '',
          claimNo: '',
          items: items,
        };
      };

    const [items, setItems] = useContext(Context);
    const [modalOpen, setModalOpen] = useState(false);
    const [invoice, setInvoice] = useState(defaultInvoice());
    const [insuredCompanies, setInsuredCompanies] = useState([]);
    const getInsuredCompanies = () => {
        axios
        .get('/api/Lookup/GetInsuranceCompanies')
        .then((response) => {
            setInsuredCompanies(response.data);
        })
        .catch((e) => {
        if (e.name !== 'AbortError') {
            console.log('fail:', e.message)
        }
        });
    } 
    useEffect(() => {
        getInsuredCompanies();
      }, []);
    const insuredCompanyHandleChange = (item) => {
       const company =  insuredCompanies.filter((a) => a.id === item.target.value)[0];
        setInvoice({ ...invoice, 
            insuredCompanyId: company.id,
            insuredCompanyName: company.name,
            insuredCompanyAddress: company.address,
            gstinUin: company.gstTinNumber
         });
    }  
    const handleChange = (e) => {
        const { target } = e;
        const {
            name, value,
        } = target; 
        setInvoice((ps) => {
            return {
                ...ps,
                [name]: value,
            };
        })
    }
    
    return (
        <>
         {modalOpen && <Invoice setOpenModal={setModalOpen} invoice={invoice} />}
        <div className="fullwidth-block form-group">
        <div className="container">
            <h2 className="section-title">Generate Invoice</h2>
            <div className="row p-10px">
                <div className="col-md-4">Enter Vehicle Number </div>
                <div className="col-md-8">
                 <input 
                    name="vehicleNumber"
                    className="form-control" 
                    type="text" 
                    placeholder="Default input"
                    value={invoice.vehicleNumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4">Select Insured Company </div>
                <div className="col-md-8">
                    <select className="form-control" onChange={(e) => insuredCompanyHandleChange(e)}>
                        <option>Select Insured Company</option>
                        {
                            insuredCompanies.map((index) => ( 
                                <option value={index.id}>{index.name}</option>
                                ) 
                            )
                        }
                    </select>
                </div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4">Company Address</div>
                <div className="col-md-8">
                    <span>{invoice.insuredCompanyAddress}</span>
                    <br/>
                </div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4">GSTIN/UIN</div>
                <div className="col-md-8">
                    <span>{invoice.gstinUin}</span>
                </div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4">KM Reading</div>
                <div className="col-md-8">
                <input 
                    name="kmReading"
                    className="form-control" 
                    type="text"
                    placeholder="Default input" 
                    value={invoice.kmReading}
                    onChange={(e) => handleChange(e)}
                 />
                </div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4">Make/ Model</div>
                <div className="col-md-8">
                    <input
                        name="makeModel" 
                        type="text" 
                        className="form-control" 
                        value={invoice.makeModel}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4">CLAIM No</div>
                <div className="col-md-8">
                    <input 
                        name="claimNo"
                        type="text" 
                        className="form-control" 
                        value={invoice.claimNo} 
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="row p-10px item-list">
                    <table>
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
                        { items.map((item, idx) => (
                                <AddInvoiceItem item={item} idx={idx}/>
                            ))
                        }
                    </table>
                
            </div>
            <div className="row p-10px">
                <div className="col-md-6">
                    <button type="button" className="form-control" onClick={() => setItems(items.concat(defaultItems()))}>Add Item</button>
                </div>
                <div className="col-md-6">
                    <button 
                    type="button" 
                    className="form-control" 
                    onClick={() => { setModalOpen(true); setInvoice({...invoice, items: items}); }}>Invoice Preview</button>
                </div>
            </div>
        </div> 
    </div> 
    </>
    );
}

export default GenerateBill;
