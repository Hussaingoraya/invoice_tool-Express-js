import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navbar from "../Navbar";

const initialValues = {
  from: {
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
    },
    phone: "",
    business: "",
    website: "",
    owner: "",
  },
  to: {
    name: "",
    email: "",
    address: {
      street: "",
    },
    phone: "",
    fax: "",
  },
  invoice: {
    number: "",
    date: "",
  },
  rows: [
    {
      description: "",
      additional: "",
      quantity: "",
      tax: "",
      totalAmount: "",
      rate: "",
    },
  ],
  subtotal: "",
  total: "",
};

export default function AddInovice() {
  const [details, setDetails] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const { values, handleBlur, handleChange, handleSubmit, setValues } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values) => {
        try {
          let updateData = await axios.post(
            `http://localhost:8000/invoices`,
            values
          );
          console.log(updateData);
        } catch (error) {
          console.log(error);
        }
      },
    });

  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        let getData = await axios.get(`http://localhost:8000/clients`);
        console.log(getData.data);
        setClientData(getData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchingData();
  }, []);

  const addRow = () => {
    setValues((prevValues) => ({
      ...prevValues,
      rows: [
        ...prevValues.rows,
        {
          description: "",
          additional: "",
          rate: 0,
          quantity: 0,
          tax: 0,
          totalAmount: 0,
        },
      ],
    }));
  };

  const removeRow = (index) => {
    setValues((prevValues) => {
      const newRows = [...prevValues.rows];
      newRows.splice(index, 1);
      return {
        ...prevValues,
        rows: newRows,
      };
    });
  };
  const hideDetails = (e) => {
    e.preventDefault();
    setDetails(!details);
  };
  const calculateTotal = () => {
    let subtotal = 0;
    values.rows.forEach((row) => {
      const totalAmount = row.rate * row.quantity + row.tax;
      subtotal += totalAmount;
    });
    setValues((prevValues) => ({
      ...prevValues,
      subtotal,
      total: subtotal, // Update this line to include any other calculations if necessary
    }));
  };

  useEffect(() => {
    calculateTotal();
  }, [values.rows]);
  useEffect(() => {
    if (selectedClient) {
      setValues((prevValues) => ({
        ...prevValues,
        to: {
          ...selectedClient,
          address: {
            ...selectedClient.address,
          },
        },
      }));
    }
  }, [selectedClient, setValues]);
  const handleClientSelection = (client) => {
    setSelectedClient(client);
  };

  return (
    <>
      <Navbar />
      {/* Bootstrap Success Alert */}
      {/* {showAlert && (
        <div
          className="alert alert-success d-flex align-items-center"
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            role="img"
            aria-label="Success:"
          >
            <use xlinkHref="#check-circle-fill" />
          </svg>
          <div>Form Submitted</div>
        </div>
      )} */}
      <div className="container main-invoice">
        <div className="bg-grey-100">
          <div className="row">
            <div className="col-8 bg-white invoiceForm">
              {/* dropdown */}{" "}
              <div className="row">
                <div className="dropdown mb-4">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Clients
                  </button>
                  <ul className="dropdown-menu">
                    {clientData && clientData.length > 0 ? (
                      clientData.map((client, i) => (
                        <li key={i}>
                          <a
                            className="dropdown-item"
                            onClick={() => handleClientSelection(client)}
                            href="#"
                          >
                            {client.name}
                          </a>
                        </li>
                      ))
                    ) : (
                      <li>
                        <a className="dropdown-item" href="#">
                          No clients found
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="col-6">
                  <div>
                    <h5>From</h5>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-2">
                        <label
                          htmlFor="fromName"
                          className="col-form-label inputText"
                        >
                          Name
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="fromName"
                          className="form-control my-2"
                          name="from.name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.name}
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="fromEmail"
                          className="col-form-label inputText"
                        >
                          Email
                        </label>
                      </div>
                      <div className="col-md-10 ">
                        <input
                          type="email"
                          id="fromEmail"
                          className="form-control"
                          name="from.email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.email}
                        />
                      </div>
                    </div>
                    <div className="row g-3 ">
                      <div className="col-md-2">
                        <label
                          htmlFor="fromaddress1"
                          className="col-form-label inputText"
                        >
                          Address
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="fromaddress1"
                          className="form-control my-2 "
                          placeholder="Street"
                          name="from.address.street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.address.street}
                        />
                        <input
                          type="text"
                          id="fromAddress2"
                          className="form-control my-2"
                          placeholder="City"
                          name="from.address.city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.address.city}
                        />
                        <input
                          type="text"
                          id="userAddress3"
                          className="form-control my-2"
                          placeholder="State"
                          name="from.address.state"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.address.state}
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="fromPhone"
                          className="col-form-label inputText"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="tel"
                          id="fromPhone"
                          className="form-control"
                          name="from.phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.phone}
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="fromBusiness"
                          className="col-form-label inputText"
                        >
                          Business <br />
                          Number
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="number"
                          id="fromBusiness"
                          className="form-control"
                          name="from.business"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.business}
                        />
                      </div>
                    </div>
                    <a
                      href=""
                      style={{ textAlign: "center", display: "block" }}
                      onClick={hideDetails}
                      className="inputText"
                    >
                      {details
                        ? "Hide additional business details"
                        : "Show additional business details"}
                    </a>
                    {details && (
                      <div>
                        <div className="row g-3 align-items-center ">
                          <div className="col-md-2">
                            <label
                              htmlFor="website"
                              className="col-form-label inputText"
                            >
                              Website
                            </label>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="tel"
                              id="website"
                              className="form-control"
                              name="from.website"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.from.website}
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center ">
                          <div className="col-md-2">
                            <label
                              htmlFor="owner"
                              className="col-form-label inputText my-3"
                            >
                              Owner
                            </label>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="tel"
                              id="owner"
                              className="form-control"
                              name="from.owner"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.from.owner}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="invoice-number"
                          className="col-form-label inputText "
                        >
                          Number
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="tel"
                          id="invoice-number"
                          className="form-control"
                          name="from.number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.number}
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="invoice-date"
                          className="col-form-label inputText my-3"
                        >
                          Date
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="date"
                          id="invoice-date"
                          className="form-control"
                          name="from.date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from.date}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/* <hr /> */}
                <div className="col-6">
                  <div>
                    <h5>Bill To</h5>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-2">
                        <label
                          htmlFor="userNameTo"
                          className="col-form-label inputText"
                        >
                          Name
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="userNameTo"
                          className="form-control my-2"
                          name="to.name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.to.name}
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userEmailTo"
                          className="col-form-label inputText"
                        >
                          Email
                        </label>
                      </div>
                      <div className="col-md-10 ">
                        <input
                          type="email"
                          id="userEmailTo"
                          className="form-control"
                          name="to.email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.to.email}
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center  ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userAddress1To"
                          className="col-form-label inputText"
                        >
                          Address
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="userAddress1To"
                          className="form-control my-2 "
                          placeholder="Street"
                          name="to.address.street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.to.address.street}
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userPhoneto"
                          className="col-form-label inputText"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="tel"
                          id="userPhoneto"
                          className="form-control"
                          name="to.phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.to.phone}
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-2">
                        <label
                          htmlFor="userFaxto"
                          className="col-form-label inputText my-3"
                        >
                          Fax
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="userFaxto"
                          className="form-control"
                          name="to.fax"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.to.fax}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/*Table Started from here*/}
              <table className="table invoiceTable">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col" style={{ width: "45%" }}>
                      Description
                    </th>
                    <th scope="col">Rate</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Tax</th>
                  </tr>
                </thead>
                <tbody>
                  {values.rows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeRow(index)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </td>
                      <td>
                        <div className="col-md-10">
                          <input
                            type="text"
                            name={`rows[${index}].description`}
                            className="form-control"
                            placeholder="Item Description"
                            value={row.description}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <textarea
                            name={`rows[${index}].additional`}
                            cols="30"
                            rows="3"
                            placeholder="Additional Details"
                            className="mt-3 form-control"
                            value={row.additionalDetails}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </td>
                      <td>
                        <div className="price">
                          <input
                            type="number"
                            name={`rows[${index}].rate`}
                            className="form-control"
                            placeholder="Rate"
                            value={row.rate}
                            onChange={handleChange}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="qty">
                          <input
                            type="number"
                            name={`rows[${index}].quantity`}
                            className="form-control"
                            placeholder="Quantity"
                            value={row.quantity}
                            onChange={handleChange}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="tax">
                          <input
                            type="number"
                            name={`rows[${index}].tax`}
                            className="form-control"
                            placeholder="Tax"
                            value={row.tax}
                            onChange={handleChange}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="6">
                      <button className="addRemove" onClick={addRow}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                  <div>Subtotal: {values.subtotal}</div>
                  <div>Total: {values.total}</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="emailPreview">
                <p>PREVIEW VIA EMAIL</p>
                <hr />
                <div className="col-md-10 email-send">
                  <input
                    type="email"
                    name="emailSend"
                    className="form-control"
                    placeholder="jhon@gmail.com"
                  />
                </div>
                <button className="send-button">Send</button>
              </div>
            </div>
          </div>
        </div>
        <div className="saveButton col-8">
          <div>
            {" "}
            <button
              className="saveInvoice"
              type="submit"
              onClick={handleSubmit}
            >
              Save Invoice
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
