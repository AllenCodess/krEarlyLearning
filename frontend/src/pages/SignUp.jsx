import { useState } from "react";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, passwordConfirm);
  };

  return (
    <>
      <div className="login-container container">
        <div className="login-box">
          <h1 className="login-header">Create your account</h1>
          <p className="login-text">Welcome! Please enter your details to continue.</p>
          <form onSubmit={handleSubmit} className="login-form">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="login-input"
              type="text"
              placeholder="Enter Name"
            />
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
            <label>Confirm Password</label>
            <input
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="login-input"
              type="text"
              placeholder="Renter Password"
            />
            <button className="login-btn"> Create Account</button>
            <p className="login-redirect">Already have an account? Login </p>
          </form>
        </div>
      </div>
    </>
  );
};
