import React from 'react';

function GuestInfoButton({ room }) {



	if (!room.availability) {
		return <button>Guest Information</button>;
	}
}

export default GuestInfoButton;