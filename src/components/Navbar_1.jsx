import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm px-4 py-2 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">
          <img src="va.jpg" alt="Logo" height="60" />
        </a>



          {/* <img src="va.jpg" alt="Logo" height="60" /> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 d-flex flex-row gap-3 ">
            {['Living', 'Dining', 'Bedroom', 'Outdoor', 'Commercial', 'Collections'].map((item,index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link text-dark fw-semibold" href="#">{item}</a>
              </li>
            ))}
          </ul>

          <form className="d-flex me-3" role="search">
          <div className="input-group">
            <input className="form-control" type="search" placeholder="Search" />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </form>


          <div className="d-flex gap-3 fs-5">
            <i className="bi bi-person"></i>
            <i className="bi bi-heart"></i>
            <i className="bi bi-cart"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
