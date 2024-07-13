import React from 'react'
import "./Signup.css";
import goodImage from "../assets/good.png";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()
     const handleSignup = () =>{
        navigate("/")
     }
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
          <form>
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
      Don't have an account? <button type="submit" className="btn login-button" onClick={handleSignup}>SignUp</button>
      </div>
      <p className="Build-by mt-2">Build by Hussain Aslam</p>
      </div>
    </>
  )
}
