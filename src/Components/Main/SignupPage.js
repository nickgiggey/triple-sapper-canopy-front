import './SignupPage.css';
import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
    // const navigate = useNavigate();
    const initialFormState = {
        code: "",
    };

    const [formState, setFormState] = useState(initialFormState);

    function handleChange(event) {
        setFormState({ ...formState, [event.target.id]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post(
            'http://localhost:1337/api/signup',
            formState
        );
        console.log('initialFormState', initialFormState);
    }

    return (
        <Container
            id='main-container'
            className='signup-form-container'>
            <Form
                onSubmit={handleSubmit}
                id='sign-in-form'
                className='text-center w-100 form mt-5'
                style={{
                    padding: '1em 3em',
                }}>
                <Form.Group controlId='code'>
                    <Form.Control
                        type='password'
                        size='lg'
                        placeholder='Password'
                        autoComplete='current-password'
                        className='position-relative mb-4 input input-hover'
                        value={formState.code}
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className='button-box'>
                    <div className='d-grid mb-5 signup button '>
                    </div>
                    <div className='d-grid mb-5 signin button'>
                        <button className='btn' type='submit'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </Form>
        </Container>
    );
}

export default SignupPage;