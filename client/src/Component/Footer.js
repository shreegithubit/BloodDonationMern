import React from 'react';
import './styles.css'; // Make sure to import your stylesheet

const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    // Implement form submission logic
    alert('Thank you for subscribing!');
  };

  return (
    
    <div className="text-center footer-fixed-height" style={{backgroundColor:"#33383c", color:"whitesmoke"}}>
      {/* Grid container */}
      <div className="container p-4 pb-0 " >
        {/* Section: Form */}
        <section>
          <form onSubmit={handleSubscribe}>
            {/* Grid row */}
            <div className="row d-flex justify-content-center">
              {/* Grid column */}
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-5 col-12">
                {/* Email input */}
                <div className="form-outline ">
                  <input type="email" id="form5Example26" className="form-control" required />
                  <label className="form-label" htmlFor="form5Example26">Email address</label>
                </div>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-auto">
                {/* Submit button */}
                <button type="submit" className="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </form>
        </section>
        {/* Section: Form */}

        {/* Section: Blood Donation */}
        <section className="my-5">
          <h5 className="text-uppercase fw-bold">Blood Donation</h5>
          <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#ff5c5c', height: '2px' }} />
          <h1>
            Donate blood and save lives! Your contribution can make a significant impact on someone's life. 
          </h1>
        </section>
        {/* End Section: Blood Donation */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      
      {/* Copyright */}
    </div>
  );
};

export default Footer;
