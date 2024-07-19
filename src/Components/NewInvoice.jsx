import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function NewInvoice() {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    address3: "",
    phone: "",
    mobile: "",
    fax: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();

    // Store the individual client data in localStorage (if needed)
    localStorage.setItem("clientData", JSON.stringify(clientData));

    // Get the existing data from localStorage, or initialize an empty array if it doesn't exist
    const existingData =
      JSON.parse(localStorage.getItem("clientDataArray")) || [];

    // Append the new data to the array
    const newData = [...existingData, clientData];

    // Store the updated array back in localStorage
    localStorage.setItem("clientDataArray", JSON.stringify(newData));

    // Log the submitted form data to the console
    console.log("Form is working", clientData);

    // Optionally reset the form data if needed
    setClientData({
      name: "",
      email: "",
      address1: "",
      address2: "",
      address3: "",
      phone: "",
      mobile: "",
      fax: "",
    });
  };

  //   const onSubmitForm = (e) => {
  //     e.preventDefault();
  //     localStorage.setItem("clientData", JSON.stringify(clientData));
  //     const existingData = JSON.parse(localStorage.getItem("clientDataArray"));
  //     const newData = [...existingData, clientData];
  //     localStorage.setItem("clientDataArray", JSON.stringify(newData));

  //     console.log("Form is working", clientData);
  //     setClientData({
  //       name: "",
  //       email: "",
  //       address1: "",
  //       address2: "",
  //       address3: "",
  //       phone: "",
  //       mobile: "",
  //       fax: "",
  //     });
  //   };

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="client-edit-header page-header">
          <h1>New Invoice</h1>
          <div className="loading-indicator"></div>
        </div>

        <div className="client-edit-body">
          <form onSubmit={onSubmitForm}>
            <div className="form-group row row-client-email">
              <label htmlFor="client-name" className="col-md-2 col-form-label ">
                Name
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="text"
                  name="name"
                  id="client-name"
                  placeholder="Client Name"
                  onChange={(e) => {
                    setClientData({
                      ...clientData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  value={clientData.name}
                />
              </div>
            </div>
            <div className="form-group row row-client-email">
              <label htmlFor="client-email" className="col-md-2 col-form-label">
                Email
              </label>
              <div className="col-md-10 app-theme">
                <div className="text-with-icon w-100">
                  <input
                    type="email"
                    id="client-email"
                    name="email"
                    className="client-email"
                    autoComplete="email"
                    placeholder="name@client.com"
                    onChange={(e) => {
                      setClientData({
                        ...clientData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    value={clientData.email}
                  />
                </div>
              </div>
            </div>
            <div className="form-group row row-client-address">
              <label
                htmlFor="client-address1"
                className="col-md-2 col-form-label"
              >
                Address
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="text"
                  name="address1"
                  id="client-address1"
                  placeholder="123 Happy Client Street"
                  className="mb-3"
                  onChange={(e) => {
                    setClientData({
                      ...clientData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  value={clientData.address1}
                />
                <input
                  type="text"
                  name="address2"
                  id="client-address2"
                  placeholder="City"
                  className="mb-3"
                  onChange={(e) => {
                    setClientData({
                      ...clientData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  value={clientData.address2}
                />
                <input
                  type="text"
                  name="address3"
                  id="client-address3"
                  placeholder="Country"
                  className="mb-2"
                  onChange={(e) => {
                    setClientData({
                      ...clientData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  value={clientData.address3}
                />
              </div>
            </div>
            <div className="form-group row row-client-phone">
              <label htmlFor="client-phone" className="col-md-2 col-form-label">
                Phone
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="tel"
                  name="tele"
                  id="client-phone"
                  maxLength="200"
                  placeholder="Client Phone"
                  onChange={(e) => {
                    setClientData({
                      ...clientData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  value={clientData.phone}
                />
              </div>
            </div>
            <div className="form-group row row-client-mobile">
              <label
                htmlFor="client-mobile"
                className="col-md-2 col-form-label"
              >
                Mobile
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="tel"
                  name="mobile"
                  id="client-mobile"
                  maxLength="200"
                  placeholder="Client Mobile"
                  onChange={(e) => {
                    setClientData({
                      ...clientData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  value={clientData.mobile}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Close
        </button>
      </div>
    </>
  );
}
