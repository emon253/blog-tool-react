import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <div>
      {/* Top Navbar */}
      <Navbar bg="primary" variant="dark" >
        <Container>
          <Navbar.Brand   href="#home" className="text-light ">
            CARBARN-BOGS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="top-navbar-nav" />
          <Nav>
            <Nav.Link href="/login" className="text-light">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Bottom Navbar */}
      <Navbar bg="light" variant="light" className="shadow">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="/public-blogs" className="text-dark">
              Blogs
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-dark">
              Services
            </Nav.Link>
            <Nav.Link href="#about" className="text-dark">
              About
            </Nav.Link>
            {/* Add more links or components here */}
          </Nav>
          {/* Search Form */}
         
         
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
