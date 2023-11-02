import React from 'react'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/logo.svg'

import './navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-white ">
      <Container className=''>
        <div className="nav-brand">
          <Link to='/'>
          <img src={logo} alt="logo" className='logo-img'/>
          </Link>
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-0 py-2 text-secondary fw-bold gap-3">
            <Link to='/'>Home</Link>
            <Link to='/movies'>Trending Movies</Link>
            <Link to='/tv'>Trending Tv & Shows</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;