import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function HeaderBootstrap() {
    const { token, setToken, authUser } = useAuth();

    const logout = () => {
        setToken('');
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    EpiZafferano
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {token && (
                            <>
                                <Nav.Link as={NavLink} to="/me">
                                    {authUser?.firstName} {authUser?.lastName}
                                </Nav.Link>
                                <Nav.Link as={NavLink} onClick={logout}>
                                    Logout
                                </Nav.Link>
                            </>
                        )}
                        {!token && (
                            <>
                                <Nav.Link as={NavLink} to="/register">
                                    Register
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/login">
                                    Login
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderBootstrap;
