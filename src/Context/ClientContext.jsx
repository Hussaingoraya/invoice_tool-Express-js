import React, { createContext, useState } from "react";

export const AddingContext = createContext("");

export default function ClientContext({ children }) {
  const [clients, setClients] = useState([]);

  const addClient = (newClient) => {
    setClients([...clients, newClient]);
  };
  return (
    <AddingContext.Provider value={{ clients, addClient }}>
      {children}
    </AddingContext.Provider>
  );
}
