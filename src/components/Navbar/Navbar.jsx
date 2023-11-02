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
        <Navbar.Brand className='nav-brand'>
          <Link to='/'>
          <img src={logo} alt="logo" className='logo-img'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-0 text-secondary fw-bold">
            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/movies'>Movies</Link></Nav.Link>
            <Nav.Link ><Link to='/tv'>Tv & Shows</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;