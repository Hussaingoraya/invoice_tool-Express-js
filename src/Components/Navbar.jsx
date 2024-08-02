import React from "react";
import "./Nav.css";
import logo from "../assets/good.png";
import { NavLink, json, useNavigate } from "react-router-dom";

export default function Navbar() {
  const loggedinUser = JSON.parse(localStorage.getItem("items"));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logIn");
    navigate("/login");
  };

  const title = "Nexus-Solutions"
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <img className="logo" src={logo} alt="" />
          <NavLink className="navbar-brand" to={'/'}>
            {title}
          </NavLink>
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
                <NavLink className="nav-link" aria-current="page" to={"/"}>
                  Invoices
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/estimate"}>
                  Estimates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/expenss"}>
                  Expenses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/report"}>
                  Reports
                </NavLink>
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
                    <NavLink className="dropdown-item" to={"/client"}>
                      Clients
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Items
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex upgrade" role="search">
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-3 userLogged">
                  <li className="nav-item ">
                    <p className="nav-link ">Welcome : {loggedinUser.firstname} </p>
                  </li>
                </ul>
              </div>

              <button
                className="btn btn-outline-success upgrade-btn"
                type="submit"
                onClick={handleLogout}
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
