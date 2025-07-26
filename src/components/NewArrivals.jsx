import React from 'react';


const products = [
  {
    name: 'Artisan Wooden Armchair',
    category: 'Living Room',
    price: '₹24,000',
    image: 'https://images.pexels.com/photos/28529915/pexels-photo-28529915/free-photo-of-elegant-wooden-chair-in-sunlit-room-corner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
  },
  {
    name: 'Mahogany Dining Table',
    category: 'Dining',
    price: '₹85,000',
    image: 'https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
  },
  {
    name: 'Royal Bed Frame',
    category: 'Bedroom',
    price: '₹72,000',
    image: 'https://images.pexels.com/photos/18285944/pexels-photo-18285944/free-photo-of-luxurious-bedroom-with-wide-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
  },
  {
    name: 'Designer Bar Stool',
    category: 'Commercial',
    price: '₹18,000',
    image: 'https://images.pexels.com/photos/16657747/pexels-photo-16657747/free-photo-of-modern-interior-design-of-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
  },
];

function NewArrivals() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 fw-bold">New Arrivals</h2>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3 mb-4 " key={index}>
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">{product.category}</span>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted">{product.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-dark btn-sm">Add to Cart</button>
                    <span className="text-warning">
                      {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-outline-dark">View All Products</button>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
