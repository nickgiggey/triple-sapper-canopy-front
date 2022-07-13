import React from 'react';
import '../RoomList/roomlist.css';

function AvailableRoomDisplay({ room }) {


	
	return <div className='grid-item available'>{room.roomnumber}</div>;
}

export default AvailableRoomDisplay;
