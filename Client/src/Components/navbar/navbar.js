import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Navbarr = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

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
                        {user?.result
                            ? <>
                                <Nav.Link >
                                    <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                </Nav.Link>
                                <Nav.Link><Button className="Loginbtn" variant="contained" onClick={logout} >Log out</Button></Nav.Link>
                            </>
                            : <Nav.Link href="/auth">
                                <Button className="Loginbtn" variant="contained"><ExitToAppIcon style={{ padding: "3px" }} />
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
