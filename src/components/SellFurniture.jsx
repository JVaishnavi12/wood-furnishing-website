import React from 'react';
// import './SellFurniture.css'; // Optional for custom styles

function SellFurniture() {
  return (
    <section className="sell-furniture-section py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Image */}
          <div className=" imgg col-md-6 mb-4 mb-md-0">
            <img
              src="https://media.istockphoto.com/id/1217234861/photo/well-furnished-living-room-render.jpg?s=1024x1024&w=is&k=20&c=BPlcoU1GOCNMGUESi4ae0_IUiUTCgRY0mgSR_h53vws="
              alt="Sell your furniture"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Sell Your Premium Furniture</h2>
            <p className="text-muted mb-4">
              List your handcrafted, luxury, or custom-designed furniture and reach customers who appreciate artistry and quality.
              Join our community of curated sellers and gain exposure to a refined audience.
            </p>
            <ul className="list-unstyled  mb-4">
              <li>✔ Simple Listing Process   
                <p className='text-muted'>📍Easily upload product images and details in just a few steps to showcase your premium furniture online</p>
              </li>
              <li>✔ Secure Transitions
                <p className='text-muted'>📍All payments are processed securely to protect both buyers and sellers at every stage of the transaction</p>
              </li>
              <li>✔ Verified Buyers
                <p className='text-muted'>📍We connect you with a trusted network of verified buyers who value quality and authenticity.</p>
              </li>
            </ul>
            <button className="btn btn-dark">Start Selling</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SellFurniture;
