import React, { useState } from "react";
import "./Signup.css";
import goodImage from "../assets/good.png";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };

  const handleInvalid = (e) => {
    e.target.setCustomValidity("This field is required");
  };

  const handleInput = (e) => {
    e.target.setCustomValidity("");
  };
  return (
    <>
      <div className="signup-container">
        <div className="card-data">
          <img className="mb-2" src={goodImage} alt="" />
          <h1 className="sign-Up mb-2">Sign Up</h1>
          <p className="sign-para">
            You're a few seconds away from your Invoice Simple account!
          </p>
        </div>

        <div className="card container">
          <div className="card-body">
            <form onSubmit={handleSignup}>
              <div className="mb-2">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Jhon"
                  name="fname"
                  value={input.fname}
                  onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                  }}
                  onInvalid={handleInvalid}
                  onInput={handleInput}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  aria-describedby="emailHelp"
                  placeholder="Doe"
                  name="lname"
                  value={input.lname}
                  onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                  }}
                  onInvalid={handleInvalid}
                  onInput={handleInput}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@exmple.com"
                  name="email"
                  value={input.email}
                  onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                  }}
                  onInvalid={handleInvalid}
                  onInput={handleInput}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="******"
                  name="password"
                  value={input.password}
                  onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                  }}
                  onInvalid={handleInvalid}
                  onInput={handleInput}
                  required
                />
              </div>
              <div className="mb-2 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I want to receive emails from Invoice Simple and its
                  Affiliates
                  {showMore && (
                    <span>
                      about their products, services, news, events, and
                      promotions.
                      {/* <Link to="/privacy-policy"> Read our Privacy Policy.</Link> */}
                    </span>
                  )}
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={handleShowMore}
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                </label>
              </div>
              <button type="submit" className="btn submit-button mb-2">
                Sign Up
              </button>
              <button type="submit" className="btn cancel-button">
                Cancel
              </button>
              <p className="terms">
                By signing up, you agree to the terms of use & privacy policy.
              </p>
            </form>
          </div>
        </div>

        <div className="login-btn mt-3">
          Already have an account?{" "}
          <button
            type="submit"
            className="btn login-button"
            onClick={handlelogin}
          >
            Login
          </button>
        </div>
        <p className="Build-by mt-2">Build by Hussain Aslam</p>
      </div>
    </>
  );
}
