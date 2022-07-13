import { useState } from 'react';
import '../RoomList/roomlist.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AvailableRoomDisplay({ room, guestId }) {
	const navigate = useNavigate();
	const handleClick = async (event) => {
		try {
			const response = await axios.patch(
				`http://localhost:1337/api/guests/${guestId}`,
				{ roominfo: room._id }
			);
		} catch (error) {
			console.log(error);
		}
		try {
			const result = await axios.patch(
				`http://localhost:1337/api/rooms/${room._id}`,
				{ guestinfo: guestId, availability: false }
			);

			if (result.status === 200) {
				navigate('/roomlist');
			}
		} catch (err) {
			console.log('oh no an error has occured', err);
		}
	};

	return (
		<div className='grid-item available' onClick={handleClick}>
			{room.roomnumber}
		</div>
	);
}

export default AvailableRoomDisplay;
