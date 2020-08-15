import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const nav = () => {
  return (
    <div className="navbar">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/"><img className="logo" src="/image/covid19logo.png" width="80px" height="80px" /></Navbar.Brand>
        <h2 className="title"><span>Rolling updates on coronavirus disease (COVID-19)</span></h2>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown className="menu" title="Menu" id="basic-nav-dropdown">
              <Link href="/news" passHref><Nav.Link>News</Nav.Link></Link>
              <Link href="/contact" passHref><Nav.Link>Contact</Nav.Link></Link>
              <Link href="/donate" passHref><Nav.Link>Donate</Nav.Link></Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Tracking Guide</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>   
      <style jsx>{`
        .navbar {
          display: flex;
          background-color: #f8f7ed;
          font-size: 30px;
        }
        .logo {
          width: 80px;
          height: 80px;
          backround: none;
        }
        .title {
          margin:  auto 400px;
          color: blue;
        }
        .menu {
          text-align: center;
          right: 0px;
          color: blue;
        }
        
      `}</style>
    </div>
  );
};

export default nav;
