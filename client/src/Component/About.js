import React from "react";
import img1 from "../img/g1.webp";
import img2 from "../img/g3.webp";
import img3 from "../img/g4.webp";
const About = () => {
  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          marginTop: "30px",
          marginBottom: "40px",
          justifyContent: "space-around",
        }}
      >
        <div className="col">
          <div className="card h-100">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Compassion</h5>
              <p className="card-text">
                We are driven by a deep commitment to caring for others and
                making a positive impact in our communities.
              </p>
              <button type="button" className="btn btn-primary">
                Readmore..
              </button>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Safety</h5>
              <p className="card-text">
                We adhere to the highest standards in blood collection and
                testing to ensure the safety of both donors and recipients.
              </p>
              <button type="button" className="btn btn-primary">
                Readmore..
              </button>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Community</h5>
              <p className="card-text">
                We believe in the power of collective action and work to inspire
                a culture of generosity and solidarity
              </p>
              <button type="button" className="btn btn-primary">
                Readmore..
              </button>
            </div>
            {/* <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
