import React, { useContext, useState } from "react";
import "./Nav.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { AddingContext } from "../Context/ClientContext";

export default function ClientNew() {
  const {addClient} = useContext(AddingContext)
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
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setClientData((prevData) => ({ ...prevData, [id]: value }));
//     console.log(setClientData);
//   };
const handleChange = (e) => {
    const { id, value } = e.target;
    const field = id.replace('client-', ''); // Adjust field names if necessary
    setClientData((prevData) => ({ ...prevData, [field]: value }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    addClient(clientData);
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
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/client");
  };
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="client-edit-header page-header">
          <h1>New Client</h1>
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
                  id="client-name"
                  placeholder="Client Name"
                  onChange={handleChange}
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
                    name="client-email"
                    className="client-email"
                    autoComplete="email"
                    placeholder="name@client.com"
                    onChange={handleChange}
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
                  id="client-address1"
                  placeholder="123 Happy Client Street"
                  className="mb-3"
                  onChange={handleChange}
                  value={clientData.address1}
                />
                <input
                  type="text"
                  id="client-address2"
                  placeholder="City"
                  className="mb-3"
                  onChange={handleChange}
                  value={clientData.address2}
                />
                <input
                  type="text"
                  id="client-address3"
                  placeholder="Country"
                  className="mb-2"
                  onChange={handleChange}
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
                  id="client-phone"
                  maxLength="200"
                  placeholder="Client Phone"
                  onChange={handleChange}
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
                  id="client-mobile"
                  maxLength="200"
                  placeholder="Client Mobile"
                  onChange={handleChange}
                  value={clientData.mobile}
                />
              </div>
            </div>
            <div className="form-group row row-client-fax">
              <label htmlFor="client-fax" className="col-md-2 col-form-label">
                Fax
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="tel"
                  id="client-fax"
                  maxLength="200"
                  placeholder="Client Fax"
                  onChange={handleChange}
                  value={clientData.fax}
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
