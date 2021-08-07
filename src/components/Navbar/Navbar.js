import React from 'react'
import './Navbar.css'
import img from '../../images/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
              <img src={img} alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active m-auto p-4" aria-current="page" href="index.html">Home</a>
              <a className="nav-link m-auto p-4" href="#product">Product</a>
              <a className="nav-link m-auto p-4" href="#about">About Us</a>
              <a className="nav-link m-auto py-4 ps-lg-4 px-4 pe-lg-0" href="#about">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
