import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavbarSignedOut() {
    let navigate = useNavigate();

    // function for the logo button to redirect to the home
    // function logoButton(event) {
    //     event.preventDefault();
    //     navigate('/');
    // }

    // function for the login
    function handleLogIn(event) {
        event.preventDefault();
        navigate('/login');
    }

    // function for signUp
    function handleSignUp(event) {
        event.preventDefault();
        navigate('/signup');
    }

    return (
        <Navbar className='form fluid-container navbar'>
            <Container className='fluid-container'>
                <Nav className='d-flex align-items-center justify-content-center'>
                    <Nav.Link
                        className='d-flex align-items-center justify-content-center'
                        onClick={handleLogIn}>
                        <button className='btn' type='submit'>
                            Log In
                        </button>
                    </Nav.Link>

                    <Nav.Link
                        className='d-flex align-items-center justify-content-center'
                        onClick={handleSignUp}>
                        <button className='btn' type='submit'>
                            Sign Up
                        </button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarSignedOut;