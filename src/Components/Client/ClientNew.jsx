import React, { useContext, useEffect, useState } from "react";
import "../Nav.css";
import Navbar from "../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ClientNew() {
  // this is use to get clientdata
  const { state } = useLocation();
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    address3: "",
    phone: "",
    business: "",
    website: "",
    owner: "",
  });

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state && state.client) {
      const { client } = state;
      setClientData({
        name: client?.name || "",
        email: client?.email || "",
        address1: client?.address1 || "",
        address2: client?.address2 || "",
        address3: client?.address3 || "",
        phone: client?.phone || "",
        business: client?.business || "",
        website: client?.website || "",
        owner: client?.owner || "",
      });
    }
  }, [state]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      // const clientResponse = await axios.post(
      //   "http://localhost:8000/clients",
      //   clientData
      // );
      const url =
        state && state.client
          ? `http://localhost:8000/clients/${state.client._id}`
          : "http://localhost:8000/clients";
      const method = state && state.client ? "patch" : "post";

      const clientResponse = await axios({
        method,
        url,
        data: clientData,
      });

      setClientData(clientResponse.data);

      console.log(clientData, "response");

      setAlert({
        show: true,
        message: "Client data saved successfully!",
        variant: "success",
      });
      setTimeout(
        () => setAlert({ show: false, message: "", variant: "" }),
        3000
      );
      console.log(clientData, "clientData");
      setClientData({
        name: "",
        email: "",
        address1: "",
        address2: "",
        address3: "",
        phone: "",
        business: "",
        website: "",
        owner: "",
      });
    } catch (error) {
      console.log(error);
    }
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
          <h1>{state && state.client ? "Edit Client" : "New Client"}</h1>
          <div className="loading-indicator"></div>
        </div>
        {alert.show && (
          <div
            className={`alert alert-${alert.variant} alert-dismissible fade show`}
            role="alert"
          >
            {alert.message}
            <button
              type="button"
              className="btn-close"
              onClick={() =>
                setAlert({ show: false, message: "", variant: "" })
              }
            ></button>
          </div>
        )}

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
                  onChange={handleChange}
                  value={clientData.name}
                  required
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
                    onChange={handleChange}
                    value={clientData.email}
                    required
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
                  onChange={handleChange}
                  value={clientData.address1}
                />
                <input
                  type="text"
                  name="address2"
                  id="client-address2"
                  placeholder="City"
                  className="mb-3"
                  onChange={handleChange}
                  value={clientData.address2}
                />
                <input
                  type="text"
                  name="address3"
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
                  name="phone"
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
                Business
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="text"
                  name="business"
                  id="business"
                  maxLength="200"
                  placeholder="Business number"
                  onChange={handleChange}
                  value={clientData.business}
                />
              </div>
            </div>
            <div className="form-group row row-client-fax">
              <label htmlFor="client-fax" className="col-md-2 col-form-label">
                Website
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="text"
                  id="website"
                  name="website"
                  maxLength="200"
                  placeholder="website.com"
                  onChange={handleChange}
                  value={clientData.website}
                />
              </div>
            </div>
            <div className="form-group row row-client-fax">
              <label htmlFor="client-owner" className="col-md-2 col-form-label">
                Owner
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="text"
                  id="client-owner"
                  maxLength="200"
                  name="owner"
                  placeholder="Client Fax"
                  onChange={handleChange}
                  value={clientData.owner}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
            {state && state.client ? "Update" : "Submit"}
            </button>
          </form>
          {alert.show && (
            <div
              className={`alert alert-${alert.variant} alert-dismissible fade show`}
              role="alert"
            >
              {alert.message}
              <button
                type="button"
                className="btn-close"
                onClick={() =>
                  setAlert({ show: false, message: "", variant: "" })
                }
              ></button>
            </div>
          )}
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Close
        </button>
      </div>
    </>
  );
}
