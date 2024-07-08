import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function LoginComponent({ setLogedInUser }) {
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { email, password } = formJson;
    axios
      .post("http://localhost:8001/register/login", {
        email,
        password,
      })
      .then((res) => {
        if (res?.data?.sucess) {
          setMessage(res?.data?.msg);
          console.log("res", res);
          navigate("/");
          setLogedInUser(true);
        } else {
          setMessage(res?.data?.msg);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center mb-4">LoginForm</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="donorName" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <NavLink to={"/signup"}>
            <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
              Sign Up!
            </button>
          </NavLink>
        </form>
        <p>{message && message}</p>
      </div>
    </div>
  );
}

export default LoginComponent;
