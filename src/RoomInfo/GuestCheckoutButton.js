import React from 'react';

function GuestCheckoutButton({ room }) {
	if (!room.availability) {
        return <button>Guest Checkout</button>;
    }
}

export default GuestCheckoutButton;