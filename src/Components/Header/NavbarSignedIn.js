import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function NavbarSignedIn({ setInputQuery, setLoggedIn }) {
    let navigate = useNavigate();
    const initialFormState = {
        input: '',
    };
    const [formState, setFormState] = useState(initialFormState);

    // function for the logo button to redirect to the home
    // function logoButton(event) {
    //     event.preventDefault();
    //     navigate('/');
    // }
    // function myProfile(event) {
    //     event.preventDefault();
    //     navigate('/myprofile');
    // }

    // function that will work with the search
    function handleChange(event) {
        setFormState({ ...formState, input: event.target.value });
        setInputQuery(event.target.value);
    }
    function logInState(event) {
        event.preventDefault();
        setLoggedIn(false);
        navigate('/');
    }
    //function for new post
    function handleNewPost(event) {
        event.preventDefault();
        navigate('/newpost');
    }

    return (
        <div className='navbarSO'>
            <Navbar className='form'>
                <Container>
                    <Form>
                        <Form.Control
                            className='input search-bar'
                            type='text'
                            placeholder='Search Redo-it'
                            onChange={handleChange}
                            value={formState.input}
                        />
                    </Form>
                    <Nav className='me-auto'>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle className='btn'>User</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={logInState}>Sign out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                    </Nav>

                    <Nav.Link
                        className='d-flex align-items-center justify-content-center'
                        onClick={handleNewPost}>
                        <button className='btn' type='submit'>
                            Create a Post
                        </button>
                    </Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarSignedIn;