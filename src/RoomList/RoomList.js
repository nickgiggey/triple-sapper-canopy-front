import React from 'react';
import { useState } from 'react';
import '../Utilities/reset.css';
import './roomlist.css';
import RoomDisplay from './RoomDisplay';
import { Link } from 'react-router-dom';

function RoomList(props) {
	const roomArray = [];
	for (let i = 1; i < 31; i++) {
		roomArray.push({ roomNumber: i, availability: false });
	}
	const [rooms, setRooms] = useState(roomArray);
	return (
		<div className='home-container2'>
			<h1 className="header">Room Availability</h1>
			<div className='grid-container'>
				{rooms.map((room, index) => {
					return (
						<Link to={`/roomlist/${room.roomNumber}`} key={index}>
							<RoomDisplay room={room} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default RoomList;
