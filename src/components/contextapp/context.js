import React, { createContext, useState } from 'react';

export const LoginContext = createContext("");

const Context = ({ children }) => { // Corrected prop name to 'children'
  const [logindata, setLoginData] = useState("");

  return (
    <>
      <LoginContext.Provider value={{ logindata, setLoginData }}>
        {children}
      </LoginContext.Provider>
    </>
  );
}

export default Context;
