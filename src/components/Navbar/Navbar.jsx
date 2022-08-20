import React from 'react';
import logo from '../../assets/logo.png';
import NavLink from '../../navlink/NavLink';
import './Navbar.css';
export default function Navbar() {
  return (
    <>
   <nav class="navbar navbar-expand-lg navbar-dark  ">
    <div class="container">
    <a class="navbar-brand" href="#">
      <img className='logo_image' src={logo} alt="logo-image" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/home">HOME</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/projects">PROJECTS</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/contact">CONTACT</NavLink>
        </li>
       
       
       
      </ul>
     
    </div>
  </div>
</nav>
      
    </>
  )
}
