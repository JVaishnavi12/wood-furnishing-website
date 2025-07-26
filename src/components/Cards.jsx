import React from 'react';

function Cards() {
  return (
    <section className="container mb-5">
      <div className="row g-4" data-aos="fade-up" data-aos-duration="1000">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src="https://media.istockphoto.com/id/1317785244/photo/modern-living-interior.jpg?s=1024x1024&w=is&k=20&c=glzdNylEUoqUFWb8jpkAwaeIVlHf-0ea-7GXGM6o3vY=" className="card-img-top" alt="Wood Design 1" />
            <div className="card-body">
              <small className="text-muted">🗓️ May 5, 2025 &nbsp; ✍️ Ananya Desai</small>
              <h5 className="card-title mt-2">2025 Hotel Design Trends</h5>
              <p className="card-text">Discover the latest trends in hotel interior design...</p>
              <a href="#" className="btn btn-link p-0">Read More</a>
            </div>
          </div>
        </div>

        
        <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
          <div className="card h-100 shadow-sm">
            <img src="https://media.istockphoto.com/id/1368763404/photo/modern-living-interior.jpg?s=1024x1024&w=is&k=20&c=QecVYvJriNS40_rjI1cvGc2PVVgTpqMXCJQyfuO3rbM=" className="card-img-top" alt="Wood Design 2" />
            <div className="card-body">
              <small className="text-muted">🗓️ April 28, 2025 &nbsp; ✍️ Rohan Kapoor</small>
              <h5 className="card-title mt-2">Guide to Exotic Wood Furniture</h5>
              <p className="card-text">Learn how to maintain and preserve exotic wood...</p>
              <a href="#" className="btn btn-link p-0">Read More</a>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
          <div className="card h-100 shadow-sm">
            <img src="https://media.istockphoto.com/id/1284941025/photo/digitally-rendered-view-of-a-beautiful-living-room.jpg?s=1024x1024&w=is&k=20&c=ESkh0cnxEskwV7YlrqABIja_bblcosJNrNt_KxsMTFc=" className="card-img-top" alt="Wood Design 3" />
            <div className="card-body">
              <small className="text-muted">🗓️ April 15, 2025 &nbsp; ✍️ Nisha Patel</small>
              <h5 className="card-title mt-2">Perfect Cafe Ambiance Guide</h5>
              <p className="card-text">Explore tips for selecting pieces that enhance ambiance...</p>
              <a href="#" className="btn btn-link p-0">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-dark">View All Articles</button>
      </div>
    </section>
  );
}

export default Cards;
