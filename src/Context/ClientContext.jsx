// import React, { createContext, useEffect, useState } from "react";

// export const AddingContext = createContext("");

// export default function ClientContext({ children }) {
//   const [clients, setClients] = useState([]);

//   // useEffect(() => {
//   //   const savedClients = JSON.parse(localStorage.getItem("clients"));
//   //   console.log("Loaded clients from local storage:", savedClients);
//   //   if (savedClients && Array.isArray(savedClients)) {
//   //     setClients(savedClients);
//   //   }
//   // }, []);

//   useEffect(() => {
//     try {
//       const savedClients = sessionStorage.getItem('clients');
//       if (savedClients) {
//         const parsedClients = JSON.parse(savedClients);
//         // Ensure parsed data is an array
//         if (Array.isArray(parsedClients)) {
//           console.log("Loaded clients from session storage:", parsedClients);
//           setClients(parsedClients);
//         } else {
//           console.warn("Saved clients data is not an array:", parsedClients);
//         }
//       }
//     } catch (error) {
//       console.error("Failed to parse clients from session storage:", error);
//     }
//   }, []);
  

//   // useEffect(() => {
//   //   console.log("Saving clients to local storage:", clients);
//   //   localStorage.setItem("clients", JSON.stringify(clients));
//   // }, [clients]);

//   useEffect(() => {
//     try {
//       // Check if `clients` is an array before saving
//       if (Array.isArray(clients)) {
//         sessionStorage.setItem('clients', JSON.stringify(clients));
//         console.log("Saving clients to session storage:", clients);
//       } else {
//         console.warn("Data to be saved is not an array:", clients);
//       }
//     } catch (error) {
//       console.error("Failed to save clients to session storage:", error);
//     }
//   }, [clients]);
  

//   const addClient = (newClient) => {
//     setClients([...clients, newClient]);
//   };
//   return (
//     <AddingContext.Provider value={{ clients, addClient }}>
//       {children}
//     </AddingContext.Provider>
//   );
// }

import React, { createContext, useEffect, useState } from "react";

export const AddingContext = createContext("");

export default function ClientContext({ children }) {
  const [clients, setClients] = useState([]);

  // Load clients from session storage on component mount
  useEffect(() => {
    const savedClients = sessionStorage.getItem('clients');
    if (savedClients) {
      try {
        const parsedClients = JSON.parse(savedClients);
        if (Array.isArray(parsedClients)) {
          setClients(parsedClients);
        } else {
          console.warn("Saved clients data is not an array:", parsedClients);
        }
      } catch (error) {
        console.error("Failed to parse clients from session storage:", error);
      }
    }
  }, []);

  // Save clients to session storage whenever clients state changes
  useEffect(() => {
    try {
      sessionStorage.setItem('clients', JSON.stringify(clients));
      console.log("Saving clients to session storage:", clients);
    } catch (error) {
      console.error("Failed to save clients to session storage:", error);
    }
  }, [clients]);

  const addClient = (newClient) => {
    setClients((prevClients) => [...prevClients, newClient]);
  };

  return (
    <AddingContext.Provider value={{ clients, addClient }}>
      {children}
    </AddingContext.Provider>
  );
}
