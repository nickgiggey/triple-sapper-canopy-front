import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setLoggedIn }) {
    let navigate = useNavigate();
    const initialFormState = {
        email: '',
        password: '',
    };

    const [formState, setFormState] = useState(initialFormState);

    function handleChange(event) {
        setFormState({ ...formState, [event.target.id]: event.target.value });
    }

    function handleSignUp(event) {
        event.preventDefault();
        navigate('/signup');
    }

    let response;
    const handleLogIn = async (event) => {
        try {
            response = await axios.post(
                'http://localhost:1337/api/emc2/login',
                formState
            );
            if (response.status === 200) {
                setLoggedIn(true);
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className='login-form-container'>
            <Form
                onSubmit={handleLogIn}
                id='sign-in-form'
                className='text-center form mt-5 login-form'
                style={{
                    padding: '1em 3em',
                }}>
                <h1 className='mb-5 fs-3 fw-normal'>Please Log In</h1>

                <Form.Group controlId='email'>
                    <Form.Control
                        type='email'
                        size='lg'
                        placeholder='Email address'
                        className='position-relative mb-1 input'
                        value={formState.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Control
                        type='password'
                        size='lg'
                        placeholder='Password'
                        autoComplete='current-password'
                        className='position-relative mb-4 input'
                        value={formState.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div className='button-box'>
                    <div className='d-grid mb-5 signup button'>
                        <button className='btn' type='button' onClick={() => handleSignUp()}>
                            <p className='signup-text'>Don't have an account?</p>
                            <p>
                                Sign up!
                            </p>
                        </button>
                    </div>
                </div>
            </Form>
        </Container>
    );
}

export default LoginPage;