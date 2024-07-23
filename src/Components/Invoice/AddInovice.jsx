import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function AddInovice() {
  const [details, setDetails] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const hideDetails = (e) => {
    e.preventDefault();
    setDetails(!details);
  };

  const [rows, setRows] = useState([
    {
      description: "",
      additionalDetails: "",
      rate: 0,
      quantity: 0,
      tax: 0,
      totalAmount: 0,
    },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    const rateValue = parseFloat(newRows[index].rate) || 0;
    const quantityValue = parseInt(newRows[index].quantity) || 0;
    const taxValue = parseFloat(newRows[index].tax) || 0;
    const amount = rateValue * quantityValue;
    const total = amount + (amount * taxValue) / 100;

    newRows[index].totalAmount = total;

    setRows(newRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        description: "",
        additionalDetails: "",
        rate: 0,
        quantity: 0,
        tax: 0,
        totalAmount: 0,
      },
    ]);
  };

  const removeRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  useEffect(() => {
    const subtotalAmount = rows.reduce(
      (acc, row) =>
        acc + (parseFloat(row.rate) || 0) * (parseInt(row.quantity) || 0),
      0
    );
    const totalAmount = rows.reduce((acc, row) => acc + row.totalAmount, 0);

    setSubtotal(subtotalAmount);
    setTotal(totalAmount);
  }, [rows]);

  return (
    <>
      <Navbar />
      <div className="container main-invoice">
        <div className="bg-grey-100">
          <div className="row">
            <div className="col-8 bg-white invoiceForm">
              {" "}
              <div className="row">
                <div className="col-6">
                  <div>
                    <h5>From</h5>
                  </div>
                  <form>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-2">
                        <label
                          htmlFor="userName"
                          className="col-form-label inputText"
                        >
                          Name
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="userName"
                          className="form-control my-2"
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userEmail"
                          className="col-form-label inputText"
                        >
                          Email
                        </label>
                      </div>
                      <div className="col-md-10 ">
                        <input
                          type="email"
                          id="userEmail"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row g-3 ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userAddress1"
                          className="col-form-label inputText"
                        >
                          Address
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="userAddress1"
                          className="form-control my-2 "
                          placeholder="Street"
                        />
                        <input
                          type="text"
                          id="userAddress2"
                          className="form-control my-2"
                          placeholder="City"
                        />
                        <input
                          type="text"
                          id="userAddress3"
                          className="form-control my-2"
                          placeholder="State"
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userPhone"
                          className="col-form-label inputText"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="tel"
                          id="userPhone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userFax"
                          className="col-form-label inputText"
                        >
                          Business <br />
                          Number
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="number"
                          id="userFax"
                          className="form-control"
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
                  <form>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-2">
                        <label
                          htmlFor="userName"
                          className="col-form-label inputText"
                        >
                          Name
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="userName"
                          className="form-control my-2"
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userEmail"
                          className="col-form-label inputText"
                        >
                          Email
                        </label>
                      </div>
                      <div className="col-md-10 ">
                        <input
                          type="email"
                          id="userEmail"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center  ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userAddress1"
                          className="col-form-label inputText"
                        >
                          Address
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="userAddress1"
                          className="form-control my-2 "
                          placeholder="Street"
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center ">
                      <div className="col-md-2">
                        <label
                          htmlFor="userPhone"
                          className="col-form-label inputText"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="tel"
                          id="userPhone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-2">
                        <label
                          htmlFor="userFax"
                          className="col-form-label inputText my-3"
                        >
                          Fax
                        </label>
                      </div>
                      <div className="col-md-10">
                        <input
                          type="text"
                          id="userFax"
                          className="form-control"
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
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <button
                          className="addRemove"
                          onClick={() => removeRow(index)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </td>
                      <td>
                        <div className="col-md-10">
                          <input
                            type="text"
                            id={`itemDescription-${index}`}
                            name="description"
                            className="form-control"
                            placeholder="Item Description"
                            value={row.description}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </div>
                        <div>
                          <textarea
                            id={`additionalDetails-${index}`}
                            name="additionalDetails"
                            cols="30"
                            rows="3"
                            placeholder="Additional Details"
                            className="mt-3 form-control"
                            value={row.additionalDetails}
                            onChange={(e) => handleInputChange(index, e)}
                          ></textarea>
                        </div>
                      </td>
                      <td>
                        <div className="price">
                          <input
                            type="number"
                            id={`rate-${index}`}
                            name="rate"
                            className="form-control"
                            placeholder="Rate"
                            value={row.rate}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="qty">
                          <input
                            type="number"
                            id={`quantity-${index}`}
                            name="quantity"
                            className="form-control"
                            placeholder="Quantity"
                            value={row.quantity}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="tax">
                          <input
                            type="number"
                            id={`tax-${index}`}
                            name="tax"
                            className="form-control"
                            placeholder="Tax"
                            value={row.tax}
                            onChange={(e) => handleInputChange(index, e)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="amount">
                          {row.totalAmount.toFixed(2)}
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
                  <div>Subtotal: {subtotal.toFixed(2)}</div>
                  <div>Total: {total.toFixed(2)}</div>
                </div>
              </div>
            </div>
            <div className="col-4">col-4</div>
          </div>
        </div>
      </div>
    </>
  );
}
