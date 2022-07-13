import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GuestCheckoutButton({ room }) {

    const navigate = useNavigate();

	const handleClick = async (event) => {
		try {
			const result = await axios.delete(
				`https://secret-waters-54413.herokuapp.com/api/guests/${room.guestinfo._id}`
			);
		} catch (error) {
			console.log(error);
		}
		try {
			const response = await axios.patch(
				`https://secret-waters-54413.herokuapp.com/api/rooms/${room._id}`,
				{ guestinfo: null, availability: true }
			);

			if (response.status === 200) {
				navigate('/roomlist');
			}
		} catch (err) {
			console.log('oh no an error has occured', err);
		}
	};

	if (!room.availability) {
		return <button onClick={handleClick}>Guest Checkout</button>;
	}
}

export default GuestCheckoutButton;
