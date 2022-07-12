import React from 'react';

function AvailableRoomDisplay({ room }) {
	if (room.availability) {
		return <div className='grid-item available'>{room.roomnumber}</div>;
	} else {
		return <div className='grid-item occupied'>{room.roomnumber}</div>;
	}
}

export default AvailableRoomDisplay;
