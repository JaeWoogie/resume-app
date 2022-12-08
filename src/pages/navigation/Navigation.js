import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';


const Navigation = () => {
    return (    
    <>
    <Navbar>
        <Container fluid>
        <Navbar.Brand href="/welcome">Jae Lee</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className={classes["nav-color"]} to="/welcome" activeClassName={classes.active}>Home</NavLink>
                <NavLink to="/resume" className={classes["nav-color"]} activeClassName={classes.active}>Resume</NavLink>
            </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
    </Navbar>
    </>
    );
}

export default Navigation;