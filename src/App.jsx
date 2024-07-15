import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Auth/Login"
import SignUp from "./Auth/SignUp"
import Invoices from "./Components/Invoices"
import Estimates from "./Components/Estimates"
import Report from "./Components/Report"
import Expenss from "./Components/Expenss"
import Client from "./Components/Client"
import ClientNew from "./Components/ClientNew"
import { useState } from "react"
// import './App.css'

function App() {
  const [clients, setClients] = useState([]);

  const addClient = (newClient) => {
    setClients([...clients, newClient]);
  };
  

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/client/new" element={<ClientNew addClientProp={addClient} />} />
        <Route path="/client" element={<Client clientProp={clients} />} />
    <Route path="expenss" element={<Expenss/>}></Route>
    <Route path="report" element={<Report/>}></Route>
    <Route path="estimate" element={<Estimates/>}></Route>
    <Route path="/" element={<Invoices/>}></Route>
    <Route path="signup" element={<SignUp/>}></Route>
    <Route path="login" element={<Login/>}></Route>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
