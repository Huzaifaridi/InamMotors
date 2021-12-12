import React, { useState } from 'react';

export const Context = React.createContext();
const defaultItems = () => {
  return {
      partId: 0,
      partName: '',
      hsnSac: '',
      tax: '',
      unit: 0,
      rate: 0,
      taxAmount: 0,
      amount: 0
  }
}
export const InvoiceContext = ({ children }) => {
  const [itemCount, setItemCount] = useState(1);
  const [items, setItems] = useState([defaultItems()]);

  return (
    <Context.Provider value={[items, setItems]}>
      {children}
    </Context.Provider>
  );
};
