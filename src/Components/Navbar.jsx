import React from "react";
import "./Nav.css";
import logo from "../assets/good.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <img className="logo" src={logo} alt="" />
          <a className="navbar-brand" href="#">
            Invoice Simple
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Invoices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Estimates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Expenses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reports
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Clients
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Items
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex" role="search">
                <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SignUp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              </ul>
                </div>
             
              <button className="btn btn-outline-success upgrade-btn" type="submit">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
