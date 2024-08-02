import React, { useState } from "react";
import "./Signup.css";
import goodImage from "../assets/good.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    receiveEmails: false, // Checkbox state
  });

  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data, "register response");
      localStorage.setItem('items', JSON.stringify(data.user));

      // Clear the form fields after successful registration
      setInput({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        receiveEmails: false, // Reset checkbox state
      });

      // Navigate to login page
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
                  placeholder="John"
                  name="firstname"
                  value={input.firstname}
                  onChange={handleInputChange}
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
                  name="lastname"
                  value={input.lastname}
                  onChange={handleInputChange}
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
                  placeholder="name@example.com"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  name="receiveEmails"
                  checked={input.receiveEmails}
                  onChange={handleInputChange}
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
              <button
                type="button"
                className="btn cancel-button"
                onClick={handlelogin}
              >
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
            type="button"
            className="btn login-button"
            onClick={handlelogin}
          >
            Login
          </button>
        </div>
        <p className="Build-by mt-2">Built by Hussain Aslam</p>
      </div>
    </>
  );
}
