import React from 'react';

function RoomGuestInfo({ availability }) {
	if (availability) {
		return (
			<div className='room-guest-info-wrapper'>
				<p>Guest Info:</p>
				<p>ID: asdfasdfasdfa</p>
				<p>Name: adsfasdfasdf</p>
			</div>
		);
	}
}

export default RoomGuestInfo;
