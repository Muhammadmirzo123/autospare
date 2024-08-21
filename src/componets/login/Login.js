import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Log in</h1>
        <form>
          <label>Username or email address</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <div>
          <input type="checkbox" className="check-input" /> <label>Remember me</label>
          </div>
        </form>

        <div className="login-left-btn">
          <button>Log in</button> <span>Lost Your Password?</span>
        </div>
      </div>
      
      <div className="login-right">
      <h1>Register</h1>
        <form>
          <label>Email address</label>
          <input type="email" />
        </form>
        <p>A link to set a new password will be sent to your email <br/> address.</p>
        <p>Your personal data will be used to support your <br/> experience throughout this website, to manage access <br/> to your account, and for other purposes described in our <br/> <b>privacy policy</b>.</p>
          <button>Log in</button> 
      </div>
    </div>
  );
};

export default Login;
