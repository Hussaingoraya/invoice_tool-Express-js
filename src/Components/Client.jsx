import React, { useContext } from "react";
import "./Nav.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AddingContext } from "../Context/ClientContext";

export default function Client() {
  const {clients} = useContext(AddingContext)
  const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate('/client/new')

  }
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
                onClick={handleNavigate}
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
                    clients && clients.length  > 0 ? (
                      clients.map((client ,i )=>(

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
