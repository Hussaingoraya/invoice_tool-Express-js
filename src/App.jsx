import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Invoices from "./Components/Invoices";
import Estimates from "./Components/Estimates";
import Report from "./Components/Report";
import Expenss from "./Components/Expenss";
import Client from "./Components/Client";
import ClientNew from "./Components/ClientNew";
import ClientContext from "./Context/ClientContext";
import ProtectedRoute from "./Services/ProtectedRoute";
// import './App.css'

function App() {
  return (
    <>
              <ClientContext>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute/>}> 
            <Route path="/client/new" element={<ClientNew />} />
            <Route path="/client" element={<Client />} />
          <Route path="expenss" element={<Expenss />}></Route>
          <Route path="report" element={<Report />}></Route>
          <Route path="estimate" element={<Estimates />}></Route>
          <Route path="/" element={<Invoices />}></Route>
          </Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      </ClientContext>

    </>
  );
}

export default App;
