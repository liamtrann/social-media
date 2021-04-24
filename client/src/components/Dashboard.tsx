import React, { Fragment, useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const [name, setName] = useState("");
  useEffect(() => {
    let username: any = localStorage.getItem("user");
    setName(username);
  }, []);
  return (
    <Navbar color="dark" dark expand="sm" className="mb-5">
      <Container>
        <NavbarBrand>Chat Room</NavbarBrand>
        <NavbarToggler onClick={handleToggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ml-auto" navbar>
            <Fragment>
              <NavItem>
                <span className="navbar-text mr-3">
                  <strong>{name ? `Welcome ${name}` : ""}</strong>
                </span>
              </NavItem>
              <NavItem>
                <NavLink href="#">Profile</NavLink>
              </NavItem>
              <NavItem>
                <Fragment>
                  <NavLink href="#">Logout</NavLink>
                </Fragment>
              </NavItem>
            </Fragment>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Dashboard;
