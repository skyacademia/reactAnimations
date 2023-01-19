import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom'
function Navigation() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to="/">Animations</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/search">Serch</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </>
    );
}


export default Navigation;