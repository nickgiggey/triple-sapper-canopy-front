import React from 'react';
import { useParams } from 'react-router-dom';
import './RoomInfo.css';
import GuestCheckoutButton from './GuestCheckoutButton';
import GuestInfoButton from './GuestInfoButton';
import RoomStatus from './RoomStatus';
import RoomGuestInfo from './RoomGuestInfo';

function RoomInfo(props) {
	const { id } = useParams();
    const availability = true;

	return (
		<div className='room-info-wrapper'>
			<div className='information-wrapper'>
				<p className='room-number'>Room: {id}</p>
				<section className='room-status-wrapper'>
					<p className='room-status-header'>Currently:</p>
					<RoomStatus availability={availability} />
				</section>
				<section className='room-guest-wrapper'>
					<RoomGuestInfo availability={availability} />
				</section>
				<div className='room-buttons-wrapper'>
					<GuestCheckoutButton availability={availability} />
					<GuestInfoButton availability={availability} />
				</div>
			</div>
		</div>
	);
}

export default RoomInfo;
