import React from "react";
import "./Nav.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Client({clientProp}) {
  return (
    <>
      <Navbar />
      <div className="spacer"></div>

      <div className="container">
        <div className="row">
          <div className="col-5 navtab">
            <div className="client-edit-header page-header">
              <h1>Client</h1>
              <div className="loading-indicator"></div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5 invoice-search">
            <form className=" form-search-bar" role="search">
              <input
                className="form-control me-2 search-bar"
                type="search"
                placeholder="Search by Client Name"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success invoice-btn "
                type="submit"
              >
                New Client
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
                    Name
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col" className="empty-space"></th>
                  <th scope="col" className="balance">
                    Total Billed
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                    clientProp && clientProp.length  > 0 ? (
                        clientProp.map((client ,i )=>(

                            <tr key={i}>
                           
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.address1}</td>
                            <td>{client.phone}</td>
                            <td></td>
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


                    )
                }
              
              </tbody>
            </table>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
