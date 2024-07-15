import React from "react";
import "./Nav.css";
import Navbar from "./Navbar";

export default function Client() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="client-edit-header page-header">
          <h1>New Client</h1>
          <div className="loading-indicator"></div>
        </div>

        <div className="client-edit-body">
          <form>
            <div className="form-group row row-client-email">
              <label for="client-name" className="col-md-2 col-form-label ">
                Name
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="text"
                  id="client-name"
                  placeholder="Client Name"
                />
              </div>
            </div>
            <div className="form-group row row-client-email">
              <label for="client-email" className="col-md-2 col-form-label">
                Email
              </label>
              <div className="col-md-10 app-theme">
                <div className="text-with-icon w-100">
                  <input
                    type="email"
                    id="client-email"
                    name="client-email"
                    className="client-email"
                    autocomplete="email"
                    placeholder="name@client.com"
                  />
                </div>
              </div>
            </div>
            <div className="form-group row row-client-address">
              <label for="client-address1" className="col-md-2 col-form-label">
                Address
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="text"
                  id="client-address1"
                  placeholder="123 Happy Client Street"
                  className="mb-3"
                />
                <input
                  type="text"
                  id="client-address2"
                  placeholder="City"
                  className="mb-3"
                />
                <input
                  type="text"
                  id="client-address3"
                  placeholder="Country"
                  className="mb-2"
                />
              </div>
            </div>
            <div className="form-group row row-client-phone">
              <label for="client-phone" className="col-md-2 col-form-label">
                Phone
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="tel"
                  id="client-phone"
                  maxlength="200"
                  placeholder="Client Phone"
                />
              </div>
            </div>
            <div className="form-group row row-client-mobile">
              <label for="client-mobile" className="col-md-2 col-form-label">
                Mobile
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="tel"
                  id="client-mobile"
                  maxlength="200"
                  placeholder="Client Mobile"
                />
              </div>
            </div>
            <div className="form-group row row-client-fax">
              <label for="client-fax" className="col-md-2 col-form-label">
                Fax
              </label>
              <div className="col-md-10 app-theme">
                <input
                  type="tel"
                  id="client-fax"
                  maxlength="200"
                  placeholder="Client Fax"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
