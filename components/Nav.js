import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

const nav = () => {
  return (
    <div className="navbar">
      <Navbar.Brand href="/"><img className="logo" src="/image/covid19logo.png" width="80px" height="80px" />
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar expand="lg"> */}
        {/* </Navbar>    */}
      </Navbar.Brand>
      <NavDropdown className="menu" title="Menu" id="basic-nav-dropdown">
        <Link href="/news" passHref><Nav.Link>News</Nav.Link></Link>
        <Link href="/contact" passHref><Nav.Link>Contact</Nav.Link></Link>
        <Link href="/donate" passHref><Nav.Link>Donate</Nav.Link></Link>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/tracking">Tracking</NavDropdown.Item>
      </NavDropdown>
      <style jsx>{`
        .navbar {
          display: flex;
          // background-color: #f888;
          font-size: 30px;
        }
        .logo {
          width: 80px;
          height: 80px;
          backround: none;
          
        }
        .menu {
          float: right;
          // text-align: center;
          font-size: 50px;
          color: blue;
          margin-right: 50px; 
        }
        
      `}</style>
    </div>
  );
};

export default nav;
