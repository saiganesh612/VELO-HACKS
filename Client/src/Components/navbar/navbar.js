import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar, Button } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react"

const Navbarr = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    return (
        <Navbar className="shadow-lg" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="/"><b className="nav-title" >HACRACK</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/post-your-experience"><p className="navlink">Post your experience</p></Nav.Link>
                        <Nav.Link eventKey={2} href="/find-your-teammate"><p className="navlink">Find your partner</p></Nav.Link>
                        <Nav.Link eventKey={2} href="/team-feed"><p className="navlink">Requirements Feed</p></Nav.Link>
                        <Nav.Link eventKey={2} href="/projects"><p className="navlink">Projects</p></Nav.Link>
                        {isLoading
                            ? <div style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : isAuthenticated
                                ? <>
                                    <Nav.Link >
                                        <Avatar alt={user.name} src={user.picture}>{user.name.charAt(0)}</Avatar>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Button className="Loginbtn" variant="contained" onClick={() => logout({ returnTo: window.location.origin })}>
                                            Log Out
                                        </Button>
                                    </Nav.Link>
                                </>
                                : <Nav.Link href="/auth">
                                    <Button className="Loginbtn" variant="contained" onClick={() => loginWithRedirect()}>
                                        <ExitToAppIcon style={{ padding: "3px" }} />
                                        SIGN IN
                                    </Button>
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr;
