import React from "react";
import "./Nav.css";
import logo from "../assets/good.png";
import { Link } from "react-router-dom";

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
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Invoices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/estimate'}>
                  Estimates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/expenss'}>
                  Expenses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/report'}>
                  Reports
                </Link>
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
                <Link className="nav-link" to={'/signup'}>
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/login'}>
                  Login
                </Link>
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