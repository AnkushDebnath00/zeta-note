import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="dark"
      style={{ borderRadius: "0px" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <span
            style={{ fontWeight: "bold", fontSize: "25px", color: "#1db954" }}
          >
            ZETA{" "}
          </span>
          Note
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Find your notes..."
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    />
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/mynotes">My Notes</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
