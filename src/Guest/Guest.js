import React from 'react';
import '../Utilities/reset.css';
import './Guest.css';
import guestSeed from '../guestSeed.json';
import AvailableRoomList from '../AvailableRooms/AvailableRoomList';
function Guest(props) {
	const guestList = guestSeed;

	return (
		<div className='home-container3'>
			<AvailableRoomList />
			<section className='home-section3'>Guest List</section>
			<ul className='guest-list-container'>
				{guestList.map((item) => {
					return (
						<li className='guest-list' key={item.id}>
							<p className='guest-id'>guest-id: {item.id}</p>
							<p>{item.name}</p>
							<p>{item.email}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Guest;
