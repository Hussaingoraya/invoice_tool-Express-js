import React, { useState, useEffect } from "react";

export default function AddInovice() {
  const [details, setDetails] = useState(false);
  const [tableData, setTableData] = useState(false);
  const [description, setDescription] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tax, setTax] = useState("");
  const [withouttax, setwithoutTax] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const hidetableData = (e) => {
    e.preventDefault();
    setTableData(!tableData);
  };
  const hideDetails = (e) => {
    e.preventDefault();
    setDetails(!details);
  };
  const calculateTotalAmount = () => {
    const rateValue = parseFloat(rate) || 0;
    const quantityValue = parseInt(quantity) || 0;
    const taxValue = parseFloat(tax) || 0;
    const amount = rateValue * quantityValue;
    const total = amount + (amount * taxValue) / 100;
    setwithoutTax(amount)
    setTotalAmount(total);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [rate, quantity, tax]);
  return (
    <>
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
                  </form>
                </div>
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
                    <div className="row g-3  ">
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
                  <tr>
                    <td>
                      <button className="addRemove" onClick={hidetableData}>
                        {tableData ? "+" : "-"}
                      </button>
                    </td>
                    {tableData && (
                      <>
                        <td>
                          <div className="col-md-10">
                            <input
                              type="text"
                              id="itemDescription"
                              className="form-control"
                              placeholder="Item Description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                          <div>
                            <textarea
                              id="additionalDetails"
                              cols="30"
                              rows="3"
                              placeholder="Additional Details"
                              className="mt-3 form-control"
                              value={additionalDetails}
                              onChange={(e) =>
                                setAdditionalDetails(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </td>
                        <td>
                          <div className="price">
                            <input
                              type="number"
                              id="rate"
                              className="form-control"
                              placeholder="Rate"
                              value={rate}
                              onChange={(e) => setRate(e.target.value)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="qty">
                            <input
                              type="number"
                              id="quantity"
                              className="form-control"
                              placeholder="Quantity"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="tax">
                            <input
                              type="number"
                              id="tax"
                              className="form-control"
                              placeholder="Tax"
                              value={tax}
                              onChange={(e) => setTax(e.target.value)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="amount">{totalAmount.toFixed(2)}</div>
                        </td>
                        <hr />
                      </>
                    )}
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                  <div>Excluding Tax : {withouttax}</div>
                  <div>Total : {totalAmount.toFixed(2)}</div>
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
