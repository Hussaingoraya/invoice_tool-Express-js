import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Invoices from "./Components/Invoice/Invoices";
import Estimates from "./Components/Estimates";
import Report from "./Components/Report";
import Expenss from "./Components/Expenss";
import Client from "./Components/Client/Client";
import ClientNew from "./Components/Client/ClientNew";
import ProtectedRoute from "./Services/ProtectedRoute";
import AddInovice from "./Components/Invoice/AddInovice";
import InvoicePreview from "./Components/Invoice/InvoicePreview";
import EditInvoice from "./Components/Invoice/EditInvoice";
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/client/new" element={<ClientNew />} />
            <Route path="/client" element={<Client />} />
            <Route path="expenss" element={<Expenss />}></Route>
            <Route path="report" element={<Report />}></Route>
            <Route path="estimate" element={<Estimates />}></Route>
            <Route path="/" element={<Invoices />} />
            <Route path="edit/:id" element={<EditInvoice />} />
            <Route path="/new" element={<AddInovice />}></Route>
            <Route path="/preview/:id" element={<InvoicePreview />}></Route>
          </Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
