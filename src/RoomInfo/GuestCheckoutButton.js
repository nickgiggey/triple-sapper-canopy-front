import React from 'react';

function GuestCheckoutButton({ availability }) {
	if (availability) {
        return <button>Guest Checkout</button>;
    }
    
}

export default GuestCheckoutButton;