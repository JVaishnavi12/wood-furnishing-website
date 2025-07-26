function Footer({ darkMode, toggleTheme }) {
  return (
    <footer className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} mt-5 pt-5`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="va.jpg" alt="logo" height={60} />
            <p>Exquisite handcrafted furniture that transforms spaces into masterpieces...</p>
            <div className="d-flex gap-4 social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Shop</li>
              <li>Collections</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-3" >
            <h6>Customer Service</h6>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>Custom Orders</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6>Contact Us</h6>
            <p>123 Luxury Lane, Mumbai, Maharashtra 400001, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@artisanhabitat.com</p>
          </div>
        </div>


        <div className="row mt-4 border-top pt-3 align-items-center">
          <div className="col-md-6 pb-2  text-start">
            <small>&copy; 2025 Artisan Habitat. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-end">
            <button className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={toggleTheme}>
              {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
                                                       