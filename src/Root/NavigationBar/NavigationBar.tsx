// NavigationBar.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/component1">
              Component 1
            </Nav.Link>
            <Nav.Link as={Link} to="/component2">
              Component 2
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
