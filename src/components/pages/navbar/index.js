import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarToggler,
  NavItem,
  Container
} from "reactstrap";


import logo from "./logo.svg";
import "./style.css";




class AppNavbar extends Component {



 



 


  render() {







    

    return (
      <div>
        <Navbar className="navbar-css" dark expand="sm">
          <Container>
            <img src={logo} className="App-logo" alt="logo" />
            <NavbarBrand href="/">GreenPoint</NavbarBrand>

            <NavbarToggler onClick={this.toggle} />

          </Container>
        </Navbar>
      </div>
    );
  }
}


export default AppNavbar;
