import React, { createContext, useState, useEffect } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("walletBalance");
    return savedBalance ? JSON.parse(savedBalance) : 5000;
  });

  useEffect(() => {
    localStorage.setItem("walletBalance", balance);
  }, [balance]);

  return (
    <WalletContext.Provider value={{ balance, setBalance }}>
      {children}
    </WalletContext.Provider>
  );
};
