import React from 'react';

function RoomGuestInfo({ room }) {
	if (!room.availability) {
		return (
			<div className='room-guest-info-wrapper'>
				<p><span className="guest-info">Guest Info:</span></p>
				<br />
				<p><span>ID:</span> {room.guestinfo._id}</p>
				<p><span>Name:</span> {room.guestinfo.name}</p>
				<p><span>Email:</span> {room.guestinfo.email}</p>
				<p><span>Party Size:</span> {room.guestinfo.partySize}</p>
			</div>
		);
	}
}

export default RoomGuestInfo;
