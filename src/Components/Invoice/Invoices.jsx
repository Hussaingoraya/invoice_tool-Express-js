import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheck,
  faTimes,
  faEye 
} from "@fortawesome/free-solid-svg-icons";

import "../Nav.css";

export default function Invoices() {
  const [invoiceData, setInvoiceData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:8000/invoices";
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/new");
  };
  const filteredData = invoiceData.filter((item) =>
    item.to.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id) => {
    console.log("Deleting item with id:", id);
    try {
      await axios.delete(`http://localhost:8000/invoices/${id}`);
      setInvoiceData((prevData) => prevData.filter((item) => item._id !== id));
      console.log(invoiceData, "deletddata");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  const handleUpdate = async (id, updatedData) => {
    console.log("Updating item with id:", id);
    try {
      const response = await axios.put(`http://localhost:8000/invoices/${id}`, updatedData);
      console.log('Update response:', response.data);

      // Update your local state with the updated invoice data
      setInvoiceData(prevData => prevData.map(item => item._id === id ? response.data : item));

    } catch (error) {
      console.error('Error updating data:', error.response ? error.response.data : error.message);
    }
  };
  const updateInvoice = (invoice) => {
    // Prepare updated data
    const updatedData = {
      ...invoice,
      // update fields if necessary
    };
    handleUpdate(invoice._id, updatedData);
  };
  
  const formatDate = (dateString) => moment(dateString).format("MMMM DD, YYYY");

  // useEffect(() => {
  //   // Retrieve data from localStorage
  //   const data = JSON.parse(localStorage.getItem("invoiceData")) || [];
  //   setStoredData(data);
  //   console.log(storedData)
  //   // if (data) {
  //   //   setStoredData([JSON.parse(data)]); // Convert the JSON string back to an object
  //   // }
  // }, []);
  useEffect(() => {
    // Fetch invoice data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log("API response:", response.data);

        setInvoiceData(response.data);
        console.log(invoiceData, "steinvoiceData");
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const previewData =(id) =>{
    navigate(`/preview/${id}`);

  }

  return (
    <>
      <Navbar />
      <div className="spacer"></div>

      <div className="container">
        <div className="row">
          <div className="col-5 navtab">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  All Invoices
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Outstanding
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Paid
                </button>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
          <div className="col-5 invoice-search">
            <form className=" form-search-bar" role="search">
              <input
                className="form-control me-2 search-bar"
                type="search"
                placeholder="Search by Client Name"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success invoice-btn "
                type="submit"
                onClick={handleNavigate}
              >
                New Invoice
              </button>
            </form>
          </div>
        </div>
        <div className="tab-content mt-2" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="invoice">
                    Invoice
                  </th>
                  <th scope="col">Client</th>
                  <th scope="col">Date</th>
                  <th scope="col"></th>
                  <th
                    scope="col"
                    className="balance"
                    style={{ textAlign: "center" }}
                  >
                    Balance Due
                  </th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData && filteredData.length > 0 ? (
                  filteredData.map((data, i) => (
                    <tr key={i}>
                      <td>{data.invoice.number}</td>
                      <td>{data.to.name}</td>
                      <td>{formatDate(data.invoice.date)}</td>
                      <td></td>

                      <td style={{ textAlign: "center" }}>{data.total}$</td>
                      <td style={{ display: "flex" }}>
                        <div className="edit-icon">
                          <FontAwesomeIcon icon={faEdit} onClick={() => updateInvoice(data)} />
                        </div>
                        <div className="trash-icon">
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => handleDelete(data._id)}
                          />
                        </div>
                        <div className="eye-icon">
                          <FontAwesomeIcon
                            icon={faEye}
                            onClick={() => previewData(data._id)}
                          />
                        </div>
                      </td>

                      {/* <td className="bill">Rs.{bill}</td> */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <th scope="row">
                      <span>
                        You have no invoice<span>,</span>{" "}
                        <Link to={"/client/new"}>
                          add your first client today
                        </Link>
                      </span>
                    </th>
                  </tr>
                )}
              </tbody>
            </table>{" "}
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="invoice">
                    Invoice
                  </th>
                  <th scope="col">Client</th>
                  <th scope="col">Date</th>
                  <th scope="col"></th>
                  <th scope="col" className="balance">
                    Balance Due
                  </th>
                  <th scope="col" className="empty-space"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span>
                      You have no invoice<span>,</span>{" "}
                      <a href="">add your first invoice today</a>
                    </span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex="0"
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="invoice">
                    Invoice
                  </th>
                  <th scope="col">Client</th>
                  <th scope="col">Date</th>
                  <th scope="col"></th>
                  <th scope="col" className="balance">
                    Total
                  </th>
                  <th scope="col" className="empty-space"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span>
                      You have no invoice<span>,</span>{" "}
                      <a href="">add your first invoice today</a>
                    </span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
