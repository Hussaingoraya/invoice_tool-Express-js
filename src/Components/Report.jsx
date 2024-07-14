import React from "react";
import Navbar from "./Navbar";
import "./Nav.css";

export default function Report() {
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
               Paid
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
                Clients
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
                Items
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
            />
            <button
              className="btn btn-outline-success invoice-btn "
              type="submit"
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
                <th scope="col"className="invoice">Invoice</th>
                <th scope="col">Client</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
                <th scope="col" className="balance">Balance Due</th>
                <th scope="col" className="empty-space"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span>You have no report<span>,</span> <a href="">add your first invoice today</a></span>
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
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
           <table className="table">
            <thead>
              <tr>
                <th scope="col"className="invoice">Invoice</th>
                <th scope="col">Client</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
                <th scope="col" className="balance">Balance Due</th>
                <th scope="col" className="empty-space"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span>You have no invoice<span>,</span> <a href="">add your first invoice today</a></span>
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
                <th scope="col"className="invoice">Invoice</th>
                <th scope="col">Client</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
                <th scope="col" className="balance">Total</th>
                <th scope="col" className="empty-space"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span>You have no invoice<span>,</span> <a href="">add your first invoice today</a></span>
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
