import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Navi() {
  return (
    <div>
         <Navbar className="nvbr">
      <Container>
        <Navbar.Brand href="/" style={{backgroundColor:'black',color:'whitesmoke'}}>Employee Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Link to={"/Login"}>
        <Button variant="success">Add</Button>
        </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    
    </div>
  )
}

export default Navi