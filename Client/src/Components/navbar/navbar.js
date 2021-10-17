import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar, Button } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react"

const Navbarr = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <Navbar className="shadow-lg" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="/"><b className="nav-title" >BIRTH-DAY</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/"><p className="navlink">Home</p></Nav.Link>
                        <Nav.Link href="/"><p className="navlink">Anniversaries</p></Nav.Link>
                        <Nav.Link href="/"><p className="navlink">Babies Birthdays</p></Nav.Link>
                        <Nav.Link href="/"><p className="navlink">Adults Birthdays</p></Nav.Link>

                        <Nav.Link eventKey={2} href="/"><p className="navlink"> Post events</p></Nav.Link>
                        {isAuthenticated
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
