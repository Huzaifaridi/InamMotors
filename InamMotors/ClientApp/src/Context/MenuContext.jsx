import React, { useState } from 'react';

export const Context = React.createContext();

export const MenuContext = ({ children }) => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  return (
    <Context.Provider value={[isAdminLogin, setIsAdminLogin]}>
      {children}
    </Context.Provider>
  );
};
