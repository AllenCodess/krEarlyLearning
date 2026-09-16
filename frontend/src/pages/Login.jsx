import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <div className="login-container container">
        <div className="login-box">
          <h1 className="login-header">Log into your account</h1>
          <p className="login-text">Welcome back! Please enter your details to continue.</p>
          <form onSubmit={handleSubmit} className="login-form">
            <label>Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              type="text"
              placeholder="Enter Email"
            />
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              type="text"
              placeholder="Enter Password"
            />
            <button className="login-btn"> Login</button>
            <p className="login-redirect">Dont have an account? Create One</p>
          </form>
        </div>
      </div>
    </>
  );
};
