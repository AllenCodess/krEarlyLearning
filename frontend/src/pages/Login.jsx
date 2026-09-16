import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../slices/userSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // these are the keys from the initalState object

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data.name);
      if (!res.ok) throw new Error(data.message || "Login failed");
      dispatch(loginSuccess({ name: data.name }));
    } catch (error) {
      console.error(error.message);
    }
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
