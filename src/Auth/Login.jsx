import React, { useState } from "react";
import "./Signup.css";
import goodImage from "../assets/good.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const LoggedIn = JSON.parse(localStorage.getItem("user"));
  //   if (
  //     input.email === LoggedIn.email &&
  //     input.password === LoggedIn.password
  //   ) {
  //     localStorage.setItem("logIn" , true)
  //     navigate("/");
  //   } else {
  //     alert("You are not registered please signUp");
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      const data = await response.json();
      console.log(data, "login response");

      if (data && data.user) {
        localStorage.setItem("logIn", true);

        navigate("/");
      } else {
        alert("Invalid credentials. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="signup-container">
        <div className="card-data">
          <img className="mb-2" src={goodImage} alt="" />
          <h1 className="sign-Up mb-2">Login to your Account</h1>
          <p className="sign-para">
            Welcome Back, we hope you're having a great day.
          </p>
        </div>

        <div className="card container">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
                />
              </div>

              <button type="submit" className="btn submit-button mb-2">
                Login
              </button>
              <button type="submit" className="btn cancel-button">
                Cancel
              </button>
            </form>
          </div>
        </div>

        <div className="login-btn mt-3">
          Don't have an account?{" "}
          <button
            type="submit"
            className="btn login-button"
            onClick={handleSignup}
          >
            SignUp
          </button>
        </div>
        <p className="Build-by mt-2">Build by Hussain Aslam</p>
      </div>
    </>
  );
}
