import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Doner = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const { bloodGroup, donationDate, donorName, gender, location, email } =
      formJson;
    axios
      .put("http://localhost:8001/createData", {
        bloodGroup,
        donationDate,
        donorName,
        gender,
        location,
        email,
      })
      .then((res) => {
        setMessage(res?.data?.msg);
        if (res?.data?.sucess) {
          navigate("/DonerList");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center mb-4">Blood Donor Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Donor Name */}
          <div className="mb-3">
            <label htmlFor="donorName" className="form-label">
              Donor Name
            </label>
            <input
              type="text"
              className="form-control"
              id="donorName"
              name="donorName"
              placeholder="Enter donor name"
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

          {/* Blood Group */}
          <div className="mb-3">
            <label htmlFor="bloodGroup" className="form-label">
              Blood Group
            </label>
            <select
              className="form-select"
              id="bloodGroup"
              name="bloodGroup"
              required
            >
              <option value="">Select blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Date */}
          <div className="mb-3">
            <label htmlFor="donationDate" className="form-label">
              Donation Date
            </label>
            <input
              type="date"
              className="form-control"
              id="donationDate"
              name="donationDate"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              placeholder="Enter location"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  required
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  required
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  required
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <p> {message && message}</p>
    </div>
  );
};

export default Doner;
