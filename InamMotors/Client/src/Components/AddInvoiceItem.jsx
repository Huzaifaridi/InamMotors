import React, { useState, useContext } from 'react';
import { Context } from '../Context/InvoiceContext';

function AddInvoiceItem(props) {
    const item = props.item;
    const idx = props.idx;
    const defaultItems = () => {
        return {
            partId: '',
            partName: '',
            hsnSac: '',
            tax: 0,
            unit: 0,
            rate: 0,
            taxAmount: 0,
            amount: 0
        }
    }
    const [items, setItems] = useContext(Context);
    const calculateAmount = (e, idx) => {
        if( item.unit > 0 && item.rate !== '' && item.tax > 0) {
           
            const taxAmount = (((item.unit * item.rate)/100) * parseInt(item.tax)).toFixed(2);
            const old = items[idx];
            const updated = { 
                ...old, 
                rate: parseFloat(item.rate),
                unit: parseInt(item.unit),
                amount: parseFloat((item.unit * item.rate).toFixed(2)), 
                taxAmount: parseFloat(taxAmount)
            }
            const clone = [...items];
            clone[idx] = updated;
            if(e.target.name === 'rate'){            
                setItems(clone.concat(defaultItems()));
            }
            else{
                setItems(clone);
            }
        }
    }
    const onTaxChange = (e, idx) => {
        const taxAmount = (((item.unit * item.rate)/100) * parseInt(e.target.value)).toFixed(2);
        const old = items[idx];
        const updated = { ...old, tax: parseInt(e.target.value), taxAmount: parseFloat(taxAmount), }
        const clone = [...items];
        clone[idx] = updated;
        setItems(clone);
    }
    const handleChange = (e, idx) => {
        const { target } = e;
        const {
            name, type, value, checked,
        } = target; 
        const old = items[idx];
        const updated = { ...old, [name]: value }
        const clone = [...items];
        clone[idx] = updated;
        setItems(clone);
    }
    return (
        <tr className="p-10px item" key={idx}>
            <td><span>{idx+1}</span></td>
            <td>
                <input
                    name="partName"
                    className="form-control" 
                    value={item.partName}
                    placeholder="Enter Part Name"
                    onChange={(e) => handleChange(e, idx)}
                />
            </td>
            <td>
                <input
                    maxLength={255}
                    name="partId"
                    className="form-control" 
                    value={item.partId}
                    placeholder="Enter Part No"
                    onChange={(e) => handleChange(e, idx)}
                />
            </td>
            <td>
                <input
                    maxLength={255}
                    name="hsnSac"
                    className="form-control" 
                    value={item.hsnSac}
                    placeholder="Enter HSN/SAC"
                    onChange={(e) => handleChange(e, idx)}
                />
            </td>
            <td>
                <select className="form-control" onChange={(e) => onTaxChange(e, idx)}>
                    <option value="0">Select GST</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                </select>
            </td>
            <td>
                <input 
                    type="number" 
                    name="unit" 
                    className="form-control" 
                    value={item.unit} 
                    onBlur={(e) => calculateAmount(e, idx)} 
                    onChange={(e) => handleChange(e, idx)}
                />
            </td>
            <td>
                <input 
                    type='number' 
                    name="rate" 
                    className="form-control" 
                    onBlur={(e) => calculateAmount(e, idx)} 
                    value={item.rate} onChange={(e) => handleChange(e, idx)}
                />
            </td>
            <td><span>{item.taxAmount}</span></td>
            <td><span>{item.amount}</span></td>
        </tr>
    );
}

export default AddInvoiceItem;
