import React from 'react';

function GuestInfoButton({ availability }) {
	if (availability) {
		return <button>Guest Information</button>;
	}
}

export default GuestInfoButton;