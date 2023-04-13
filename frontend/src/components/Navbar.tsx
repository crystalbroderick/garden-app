import { useContext } from "react"
import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"
export function Navbar() {
  const { user, setUser } = useContext(UserContext)

  return (
    <NavbarBs
      collapseOnSelect
      expand="sm"
      sticky="top"
      bg="teagreen"
      className="shadow-sm mb-3"
    >
      <Container>
        <NavbarBs.Brand to="/" as={NavLink}>
          <h3>
            <b>Balcony Botany</b>
          </h3>
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
            {user ? (
              <Nav.Link to="/" as={NavLink} onClick={() => setUser(null)}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link to="/login" as={NavLink}>
                Login
              </Nav.Link>
            )}
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  )
}
