import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Logo from "../../assets/nexusberry.png";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function InvoicePreview() {
  const { id } = useParams(); // Get the ID from URL parameters
  const [invoiceData, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      console.log(id ,"Preview")
      try {
        const response = await axios.get(
          `http://localhost:8000/invoices/${id}`
        );
        setInvoice(response.data);
        console.log(response.data,"KON SA DATA")
        console.log(invoiceData,"invoiceDATA")
        setLoading(false);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
        setLoading(false);
      }
    };

    fetchInvoice();
  }, [id]);

 
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container invoice-container">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container invoice-container">
          <p>Error: {error}</p>
        </div>
      </>
    );
  }

  if (!invoiceData) {
    return null;
  }


  return (
    <>
      <Navbar />
      <div className="container invoice-container">
        <div className="invoice-logo">
          <img src={Logo} alt="Company Logo" width="150" />
        </div>

        <div className="invoice-header">
          <div className="row">
            <div className="col-md-6">
              <h4>From:</h4>
              <p>
                <strong>Name:</strong> {invoiceData.from.name}
                <br />
                <strong>Email:</strong> {invoiceData.from.email}
                <br />
                <strong>Address:</strong> {invoiceData.from.address.street},{" "}
                {invoiceData.from.address.city},{" "}
                {invoiceData.from.address.state}
                <br />
                <strong>Phone:</strong> {invoiceData.from.phone}
                <br />
                <strong>Business:</strong> {invoiceData.from.business}
                <br />
                <strong>Website:</strong> {invoiceData.from.website}
                <br />
                <strong>Owner:</strong> {invoiceData.from.owner}
              </p>
            </div>
            <div className="col-md-6 text-right">
              <h4>To:</h4>
              <p>
                <strong>Name:</strong> {invoiceData.to.name}
                <br />
                <strong>Email:</strong> {invoiceData.to.email}
                <br />
                <strong>Address:</strong> {invoiceData.to.address.street}
                <br />
                <strong>Phone:</strong> {invoiceData.to.phone}
                <br />
                <strong>Fax:</strong> {invoiceData.to.fax}
              </p>
              <h4>Invoice #{invoiceData.invoice.number}</h4>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(invoiceData.invoice.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <table className="table table-bordered invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Additional</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Tax (%)</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.rows.map((row, index) => (
              <tr key={index}>
                <td>{row.description}</td>
                <td>{row.additinal}</td>
                <td>{row.quantity}</td>
                <td>${row.rate.toFixed(2)}</td>
                <td>{row.tax}</td>
                <td>${row.totalAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Subtotal:</strong> ${invoiceData.subtotal.toFixed(2)}
            </p>
            <p>
              <strong>Total:</strong> ${invoiceData.total.toFixed(2)}
            </p>
          </div>
        </div>
      </div> 
    </>
  );
}
