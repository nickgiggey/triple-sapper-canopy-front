import React from 'react';

function RoomStatus({ availability }) {
	if (availability) {
		return <p className='room-status'>Occupied</p>;
	} else {
        return <p className='room-status'>Unoccupied</p>;
    }
}

export default RoomStatus;
