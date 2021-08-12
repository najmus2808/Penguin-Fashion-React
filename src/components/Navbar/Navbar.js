import React from 'react'
import './Navbar.css'
import img from '../../images/logo.png'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

function NavbarHeader() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <a className="navbar-brand" href="#home">
              <img src={img} alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active m-auto p-4" aria-current="page" href="#home">Home</a>
              <a className="nav-link m-auto p-4" href="#product">Product</a>
              <a className="nav-link m-auto p-4" href="#about">About Us</a>
              <a className="nav-link m-auto py-4 ps-lg-4 px-4 pe-lg-0" href="#contact">Contact</a>
            </div>
          </div> */}


          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        </div>
        </Navbar>
    )
}

export default NavbarHeader
