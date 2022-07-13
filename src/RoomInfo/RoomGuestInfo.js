import React from 'react';

function RoomGuestInfo({ room }) {
	if (!room.availability) {
		return (
			<div className='room-guest-info-wrapper'>
				<p>Guest Info:</p>
				<p>ID: {room.guestinfo._id}</p>
				<p>Name: {room.guestinfo.name}</p>
				<p>Email: {room.guestinfo.email}</p>
				<p>Party Size: {room.guestinfo.partySize}</p>
			</div>
		);
	}
}

export default RoomGuestInfo;
