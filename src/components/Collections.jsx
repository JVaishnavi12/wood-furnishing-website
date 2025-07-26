import React from 'react';


const collections = [
  {
    title: 'Living Room',
    description: 'Elegant comfort for your modern space',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Dining',
    description: 'Sophisticated dining experiences',
    image: 'https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Hotel & Hospitality',
    description: 'Luxurious & welcoming interior',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Coffee & Restaurant',
    description: 'Stylish ambience and seating',
    image: 'https://media.istockphoto.com/id/2162080709/photo/the-interior-of-a-cozy-modern-restaurant-with-chairs-a-table-flowers-coffee-nest-light.jpg?s=1024x1024&w=is&k=20&c=t13sUyFySzhXt__y0eiw8oRgToUZkSg33GMcp3bEVLw=',
  },
];

function Collections() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 fw-bold">Curated Collections</h2>
        <p className="text-muted mb-5">
          Each piece in our collection is thoughtfully selected to reflect the perfect balance of form and function, creating spaces that inspire.
        </p>
        <div className="row">
          {collections.map((item, index) => (
            <div className="col-md-3 mb-4 " key={index}>
              <div className="card border-0 shadow-sm h-100 gap-1">
                <div className="position-relative">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-50 text-white p-2 w-100">
                    <h5 className="mb-0">{item.title}</h5>
                    <small>{item.description}</small>
                  </div>
                </div>
                <div className="card-body text-center">
                  <button className="btn btn-outline-dark w-100">Explore Collection</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
