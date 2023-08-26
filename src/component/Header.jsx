import React from 'react'
import Container from "react-bootstrap/Container";
import { Image } from 'react-bootstrap';
import logo from "../assets/icon-volleyball-8.jpg"

const Header = () => {
  return (
    <Container className="text-center mt-5">
      <Image className="rounded" src={logo} width="200px" />
      <h1 className="my-2 text-danger">File'nin SULTANLARI</h1>
    </Container>
  );
}

export default Header
