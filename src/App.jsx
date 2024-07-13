import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Auth/Login"
import SignUp from "./Auth/SignUp"
import Invoices from "./Components/Invoices"
// import './App.css'

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="signup" element={<Invoices/>}></Route>
    <Route path="/" element={<SignUp/>}></Route>
    <Route path="login" element={<Login/>}></Route>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
