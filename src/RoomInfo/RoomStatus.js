import React from 'react';

function RoomStatus({ room }) {
	if (!room.availability) {
		return <p className='room-status'>Occupied</p>;
	} else {
        return <p className='room-status'>Unoccupied</p>;
    }
}

export default RoomStatus;
