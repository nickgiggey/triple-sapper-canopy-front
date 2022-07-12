import React from 'react';
import './roomlist.css';

function RoomDisplay({ room }) {
	if (room.availability) {
		return <div className='grid-item available'>{room.roomNumber}</div>;
	} else {
		return <div className='grid-item occupied'>{room.roomNumber}</div>;
	}
}

export default RoomDisplay;
