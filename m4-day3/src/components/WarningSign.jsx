import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const WarningSign = (props) => {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand>NavBar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">
            <Nav.Link className="text-light" href="home">
              Home
            </Nav.Link>
          </Link>
          <Link to="/register">
            <Nav.Link className="text-light" href="register">
              Register
            </Nav.Link>
          </Link>

          <Nav.Link className="text-light" href="#pricing">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar>
      {/* <Alert variant="danger">{props.text}</Alert> */}
    </>
  );
};

export default WarningSign;
