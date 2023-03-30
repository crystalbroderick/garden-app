import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
export function Navbar() {
  return (
    <NavbarBs
      collapseOnSelect
      expand="sm"
      sticky="top"
      bg="primary"
      className="shadow-sm mb-3"
    >
      <Container>
        <NavbarBs.Brand to="/home" as={NavLink}>
          Balcony Botany
        </NavbarBs.Brand>
        <NavbarBs.Toggle
          aria-controls="responsive-navbar-nav"
          data-bs-toggle="collapse"
          data-bs-target="#responsive-navbar-nav"
        />
        <NavbarBs.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/plants" as={NavLink}>
              Plants
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  )
}
