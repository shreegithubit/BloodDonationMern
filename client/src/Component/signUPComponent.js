/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpComponent() {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { email, password, username } = formJson;
    axios
      .put("http://localhost:8001/register/signup", {
        email,
        password,
        username,
      })
      .then((res) => {
        if (res?.data?.sucess) {
          setMessage(res?.data?.msg);
          navigate("/login");
        } else {
          setMessage(res?.data?.msg);
        }
      })
      .catch((err) => console.log(err));

    console.log("Form submitted!", formJson);
  };
  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="donorName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter UserName"
              required
            />
          </div>
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
            Submit
          </button>
        </form>
      </div>
      <p>{message && message}</p>
    </div>
  );
}

export default SignUpComponent;
