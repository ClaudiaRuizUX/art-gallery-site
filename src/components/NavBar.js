import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import React, { Component, useState }  from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from 'react-bootstrap/Form';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

  const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
      user,
      isAuthenticated,
      loginWithRedirect,
      logout,
    } = useAuth0();
    const toggle = () => setIsOpen(!isOpen);
  
    const logoutWithRedirect = () =>
      logout({
        returnTo: window.location.origin,
      });
  
    return (
      <div className="nav-container">
        <Navbar bg="light" expand="lg" >
          <Container>
            <NavbarBrand className="logo" />
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag={RouterNavLink} to="/" exact activeClassName="router-link-exact-active">
                    <a class="navbar-brand" href="/"><span>Art</span>Gallery</a>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto justify-content-end" style={{ width: "100%" }} navbar>
              <Form className="d-flex col-md-8">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              <Button variant="outline-success">Search</Button>
              </Form>
              </Nav>
          <Nav className="ml-auto justify-content-end" style={{ width: "100%" }} navbar>
          {!isAuthenticated && (
            <NavItem>
              <Button id="qsLoginBtn" color="primary" className="btn-margin"
                onClick={() => loginWithRedirect()}>
                Log in
              </Button>
            </NavItem>
          )}
          {isAuthenticated && (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="profileDropDown">
                <img src={user.picture} alt="Profile" className="nav-user-profile rounded-circle" width="50"/>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>{user.name}</DropdownItem>
                <DropdownItem tag={RouterNavLink} to="/profile" className="dropdown-profile" activeClassName="router-link-exact-active">
                  <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                </DropdownItem>
                <DropdownItem id="qsLogoutBtn" onClick={() => logoutWithRedirect()} >
                  <FontAwesomeIcon icon="power-off" className="mr-3" /> Log out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
          </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  };
  
  export default NavBar;