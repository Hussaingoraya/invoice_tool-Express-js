import React from "react";
import "./Signuo.css";
import goodImage from "../assets/good.png";

export default function SignUp() {
  return (
    <>
      <div className="card-data">
        <img className="mb-2" src={goodImage} alt="" />
        <h1 className="sign-Up mb-2">Sign Up</h1>
        <p className="sign-para">
          You're a few seconds away from your Invoice Simple account!
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Jhon"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Doe"
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
              />
            </div>
            <div className="mb-2 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I want to receive emails from Invoice Simple and its Affiliates
                about their products, services, news, events, and promotions.
                Read our Privacy Policy.
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
    </>
  );
}
