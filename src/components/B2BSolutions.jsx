import React from 'react';
import { FaHotel, FaUtensils, FaBuilding } from 'react-icons/fa';


function B2BSolutions() {
  return (
    <section className="b2b-solutions-section py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">B2B Solutions</h2>
        <p className="text-muted mb-4">
          Tailored furniture solutions for hotels, restaurants, cafes, and commercial spaces. Elevate your business with our premium collections.
        </p>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaHotel className="mb-3 fs-2 text-dark" />
                <h5 className="card-title fw-semibold">Hotel & Resort Furnishing</h5>
                <p className="card-text text-muted">
                  Complete furniture solutions for lobbies, rooms, restaurants, and common areas that create memorable guest experiences.
                </p>
                <a href="#" className="text-decoration-none fw-semibold">Learn More</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaUtensils className="mb-3 fs-2 text-dark" />
                <h5 className="card-title fw-semibold">Restaurant & Cafe Furniture</h5>
                <p className="card-text text-muted">
                  Stylish and durable seating, tables, and accent pieces that enhance the dining experience and reflect your brand.
                </p>
                <a href="#" className="text-decoration-none fw-semibold">Learn More</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaBuilding className="mb-3 fs-2 text-dark" />
                <h5 className="card-title fw-semibold">Corporate Office Spaces</h5>
                <p className="card-text text-muted">
                  Elegant and functional furniture for reception areas, meeting rooms, executive offices, and collaboration spaces.
                </p>
                <a href="#" className="text-decoration-none fw-semibold">Learn More</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default B2BSolutions;
