import { useState } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginSuccess } from "../slices/userSlice";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
      });

      const data = await res.json();
      console.log(data.data.user);
      if (!res.ok) throw new Error(data.message || "Login failed");
      dispatch(loginSuccess({ name: data.data.user.name, role: data.data.user.role }));
      navigate("/parentportal");
    } catch (error) {
      console.error(error.message);
    }
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
            <p className="login-redirect">
              Already have an account?{" "}
              <Link className="signup-link" to={"/login"}>
                Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
