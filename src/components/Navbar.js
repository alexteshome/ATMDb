import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const Navbar = () => (
  <Menu inverted size="massive" fixed="top">
    <Container>
      <Menu.Item header>ATMDb</Menu.Item>
      <Menu.Item as={Link} to="/">
        Home
      </Menu.Item>
    </Container>
  </Menu>
);

export default Navbar;
