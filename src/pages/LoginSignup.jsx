import React from "react";
import "./CSS/Loginsignup.css";

export const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" name="" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          {" "}
          Already have an account? <span>Log in here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
