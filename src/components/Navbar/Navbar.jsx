import React from 'react';
import NavLink from '../../navlink/NavLink';
import './Navbar.css';
import logo from '../../assets/logo.png'
export default function Navbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg  sticky-top  navbar-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} className="img-fluid logo_image" alt="portfolio_logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navmenu">
          <ul className="navbar-nav ms-auto text-md-center">
          <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/home">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/projects">PROJECTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/contact">CONTACT</NavLink>
        </li>
          </ul>
        </div>
      </div>
    </nav>
   {/* <nav className="navbar navbar-expand-lg navbar-dark  ">
    <div className="container">
    <a className="navbar-brand" href="#">
      <img className='logo_image' src={logo} alt="logo-image" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/home">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/projects">PROJECTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/contact">CONTACT</NavLink>
        </li>
       
       
       
      </ul>
     
    </div>
  </div>
</nav>
       */}
    </>
  )
}
