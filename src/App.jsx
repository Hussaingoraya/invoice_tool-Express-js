import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Auth/Login"
import SignUp from "./Auth/SignUp"
import Invoices from "./Components/Invoices"
import Estimates from "./Components/Estimates"
import Report from "./Components/Report"
import Expenss from "./Components/Expenss"
// import './App.css'

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
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
