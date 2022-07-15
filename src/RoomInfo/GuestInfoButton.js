import React from 'react';
import { useNavigate } from 'react-router-dom';

function GuestInfoButton({ room }) {

	const navigate = useNavigate();

	function handleClick() {
		navigate(`/guestlist/${room.guestinfo._id}`);
	}
	if (!room.availability) {
		return <button className="guestinfo-b" onClick={handleClick}>Guest Information</button>;
	}
}

export default GuestInfoButton;