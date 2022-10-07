import "./NavBar.css";
import { useContext } from 'react';
import { AuthContext } from "../../context/auth.context";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

    const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);

    return (


        <div className="navbarCont">

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="homeLink">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/paraguay">About Paraguay</Nav.Link>
                            {!isLoading && isLoggedIn ? (
                                <>
                                    <Nav.Link href="/posts">Posts</Nav.Link>
                                    <Nav.Link href="/dict_list">Words list</Nav.Link>
                                    <Nav.Link href="/create_word">Create word</Nav.Link>
                                    <Nav.Link href="/create_post">Create post</Nav.Link>



                                </>
                            ) : <><Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/sign_up">Sign Up</Nav.Link> </>}


                        </Nav>
                        {!isLoading && isLoggedIn && (
                            <>
                                <Nav>
                                    <Nav.Link href="/login" onClick={logOut}>Logout</Nav.Link>
                                    <Nav.Link as='span' className="userLogo">{user.username}</Nav.Link>

                                </Nav>
                            </>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>

    )
}

export default NavBar;