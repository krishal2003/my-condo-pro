import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import Link from "next/link";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar fixed="top" bg="light" expand="lg" expanded={expanded}>
      <Container>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            <img src="favicon.png" alt="Logo" width="50" height="50" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navitems">
            <NavDropdown title="Condos for Sale" id="basic-nav-dropdown">
              <Dropdown>
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-basic"
                  className="navitems"
                >
                  By City
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Link
                    href={`/location/Ajax`}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Ajax
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Brampton`}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Brampton
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Burlington`}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Burlington
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Caligary`}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Caligary
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Edomnton`}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Edomnton
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Etobicoke`}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Etobicoke
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Hamilton`}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Hamilton
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Milton`}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Milton
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Oshawa `}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Oshawa
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Pickering `}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Pickering
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Tornoto `}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Tornoto
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Vancover `}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Vancover
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Waterloo `}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Waterloo
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Vaughan `}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      Vaughan
                    </Dropdown.Item>
                  </Link>
                  <Link
                    href={`/location/Vaughan `}
                    style={{ textDecoration: "none" }}
                  >
                    <Dropdown.Item href="#action/3.1" className="navitems">
                      New Market
                    </Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>{" "}
              <NavDropdown.Item href="#action/3.2" className="navitems">
                By Occupancy{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navitems">
                By Selling Status{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navitems">
                By Developer{" "}
              </NavDropdown.Item>
            </NavDropdown>

            <Link href={`/map`} style={{ textDecoration: "none" }}>
              {" "}
              <Nav.Link className="navitems">Map</Nav.Link>
            </Link>
            <Nav.Link className="navitems">Videos</Nav.Link>
            <Link href="/about-us" style={{ textDecoration: "none" }}>
              <Nav.Link className="navitems">About Us</Nav.Link>
            </Link>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <Nav.Link className="navitems">Blog</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link href={`/platinum`}>
              <Button
                color="error"
                variant="contained"
                sx={{ borderRadius: "30px" }}
              >
                PlatInum Access
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
