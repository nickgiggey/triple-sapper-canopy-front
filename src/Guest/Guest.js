import React from 'react';
import '../Utilities/reset.css';
import './Guest.css';
import { Link, Route, Routes } from 'react-router-dom';
import guestSeed from '../guestSeed.json';
import GuestRender from './GuestRender';

function Link3(props) {
	const guestList = guestSeed;

	return (
		<div className='home-container3'>
			<section className='home-section3'>Hello from Guest List</section>
			{guestList.map((item) => {
				return (
					<div className='guest-name' key={item.id}>
						<p>
							id: {item.id}
							name: {item.name}
							email: {item.email}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default Link3;
