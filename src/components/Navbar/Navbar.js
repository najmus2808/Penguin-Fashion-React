import React from 'react'
import './Navbar.css'
import img from '../../images/logo.png'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
              <img src={img} alt=""/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active m-auto p-4" aria-current="page" href="index.html">Home</a>
              <a class="nav-link m-auto p-4" href="#product">Product</a>
              <a class="nav-link m-auto p-4" href="#about">About Us</a>
              <a class="nav-link m-auto py-4 ps-lg-4 px-4 pe-lg-0" href="#about">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
