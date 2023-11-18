import { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavLink,
  
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
// import { UserContext } from "../../context/UserContext";
export default function Navigationbar() {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isLoggedIn());
  // const navigate = useNavigate();
  // const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoggedIn(AuthService.isLoggedIn());
  }, []);
  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic (e.g., clear token, reset state)
    setIsLoggedIn(false);
    AuthService.logout();
    // navigate("/login");
  };
  return (
    <div>
      {/* Top Navbar */}
      <Navbar bg="primary" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light ">
            CARBARN-BOGS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="top-navbar-nav" />
          <Nav>
            {isLoggedIn ? ( // If user is logged in, show username and logout link
              <>
                <Nav.Link  to="/user-info" className="text-light">
                  [{username}]
                </Nav.Link>

                <Nav.Link
                  href="/login"
                  onClick={handleLogout}
                  className="text-light"
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              // If user is not logged in, show login link
              <Nav.Link href="/login" className="text-light">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Bottom Navbar */}
      <Navbar
        bg="light"
        style={{ marginTop: "50px" }}
        variant="light"
        className="shadow "
      >
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="/" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="/public-blogs" className="text-dark">
              Blogs
            </Nav.Link>
            <Nav.Link href="#" className="text-dark">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* Add more links or components here */}
          </Nav>
          {/* Search Form */}
        </Container>
      </Navbar>
    </div>
  );
}
