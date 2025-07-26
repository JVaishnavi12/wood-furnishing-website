import React from 'react';


const testimonials = [
  {
    name: "Rajesh Sharma",
    title: "Delhi",
    text: "The craftsmanship of the dining table we purchased is exceptional. Even small details were given attention. It has become the centerpiece of our home and draws compliments from all our guests.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Priya Mehra",
    title: "Home Interior Planner",
    text: "We furnished our entire boutique hotel with pieces from this collection. The quality is outstanding, and the customer service was exceptional throughout the process. Our guests frequently ask about the furniture.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400.jpg"
  },
  {
    name: "Vikram Mehta",
    title: "Bangalore",
    text: "Creating an entire coffee table through their marketplace was truly impressive! My firm executed the project well. The website’s process gave me confidence, and I received a perfect fit for my space.",
    image: "https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=400.jpg"
  }
];

function Testimonials() {
  return (
    <div className="py-5 bg-light text-center">
      <h3 className="fw-bold">What Our Clients Say</h3>
      <p className="text-muted mb-5">
        Hear from our satisfied customers who have transformed their spaces with our furniture.
      </p>
      <div className="container">
        <div className="row">
          {testimonials.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-start">
                  <div className="text-warning mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="card-text text-muted">{item.text}</p>
                </div>
                <div className="card-footer bg-white border-0 d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle me-3"
                    width="40"
                    height="40"
                  />
                  <div>
                    <div className="fw-semibold">{item.name}</div>
                    <small className="text-muted">{item.title}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
