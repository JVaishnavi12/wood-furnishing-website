import React from 'react';


function Main() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-between flex-wrap ">
      
      <div className="left-content px-5 py-4">
        <h1 className="display-4  hero-heading ">Redefining <br /> Luxury Living</h1>
        <p className="text-muted fs-5 mt-3 mb-4">
          Curated collection of exceptional furniture pieces that blend contemparay design with timeless craftmanship..... 
        </p>
        <div className="d-flex gap-3">
          <button className="btn btn-dark btn-lg shadow-sm">Explore Collection</button>
          <button className="btn btn-outline-dark btn-lg shadow-sm">Design Service</button>
        </div>
      </div>

      
      <div className="right-image position-relative ms-5 mb-5 ">
        <img src="https://images.pexels.com/photos/9565973/pexels-photo-9565973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Luxury Living"
          className="img-fluid rounded-4 shadow-lg"
          style={{ width: '500px',height:'600px' }}
        />
        <div className="abc mt-5 rounded shadow-sm">
          <small className="text-muted">New Collection</small><br />
          <strong>Spring 2025</strong>
        </div>
      </div>
    </section>
  );
}

export default Main;






