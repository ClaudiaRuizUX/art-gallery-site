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
        
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand className="logo" />
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink
                    tag={RouterNavLink} to="/" exact activeClassName="router-link-exact-active">
                    <a class="navbar-brand" href="/"><img src="../assets/logo-header.png" alt="ArtGallery"/></a>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </NavItem>
                {isAuthenticated && (
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/external-api" exact activeClassName="router-link-exact-active">
                      Projects Admin
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
              <Nav className="d-none d-md-block" navbar>
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