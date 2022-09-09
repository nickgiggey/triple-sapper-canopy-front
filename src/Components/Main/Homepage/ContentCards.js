import React from 'react';
import { Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './ContentCards.css';
// import {
//     BsFillArrowUpSquareFill,
//     BsFillArrowDownSquareFill,
// } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ContentCards({ title, body, createdAt, id, votes, getPosts }) {
    const navigate = useNavigate();

    const [currentVote, setCurrentVote] = useState(votes);
    const [currentPost, setCurrentPost] = useState({
        title: title,
        body: body,
        votes: votes,
    });

    let incrementVote = () => {
        setCurrentVote(currentVote + 1);
        setCurrentPost({ ...currentPost, votes: currentVote });
    };
    let decrementVote = () => {
        setCurrentVote(currentVote - 1);
        setCurrentPost({ ...currentPost, votes: currentVote });
    };
    const handleChange = async (event) => {
        try {
            const response = await axios.put(
                `http://localhost:1337/api/emc2/${String(id)}`,
                currentPost
            );

            if (response.status === 200) {
                getPosts();
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        handleChange();
    }, [currentVote]);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:1337/api/emc2/${String(id)}`
            );
            if (response.status === 204) {
                getPosts();
                navigate('/');
            }
        } catch (error) { }
    };

    const handleCommentsClick = async () => {
        navigate(`/comments/${String(id)}`);
    };

    const handleEdit = async () => {
        navigate(`/editpost/${String(id)}`);
    };

    return (
        <div className='cards'>
            <Card className='form'>
                <Card.Header className='header'>
                    <div className='d-flex flex-row'>
                        {/* <button onClick={incrementVote}>
                            <BsFillArrowUpSquareFill className='arrow' />
                        </button>
                        <span className='m-3'>{votes}</span>
                        <button onClick={decrementVote}>
                            <BsFillArrowDownSquareFill className='arrow m-2' />
                        </button> */}
                    </div>
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                        <span>Posted at: {createdAt}</span>
                    </div>
                    <DropdownButton
                        className='drop-down'
                        id='dropdown-basic-button'
                        title=''>
                        <Dropdown.Item onClick={handleDelete} href='#/action-1'>
                            Delete post
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleEdit} value={id} href='#/action-2'>
                            Edit Post
                        </Dropdown.Item>
                    </DropdownButton>
                </Card.Header>
                <Card.Body className='cardBody'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <button
                        className='btn d-flex justify-content-start'
                        onClick={handleCommentsClick}>
                        comments
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ContentCards;