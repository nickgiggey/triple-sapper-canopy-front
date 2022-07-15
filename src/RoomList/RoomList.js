import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Utilities/reset.css';
import './roomlist.css';
import RoomDisplay from './RoomDisplay';
import { Link } from 'react-router-dom';

function RoomList(props) {

	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	async function getRooms() {
		try {
			const response = await axios.get(
				'https://secret-waters-54413.herokuapp.com/api/rooms'
			);
			const results = await response.data
			setRooms(results);
		} catch (error) {
			setLoading(false);
		}
	}

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (!rooms.length) {
				setLoading(false);
			}
		}, 5000);

		getRooms();

		return () => clearTimeout(handleLoadingTimeOut);
	}, []);

	if (loading && !rooms.length) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className='home-container2'>
			<h1 className="header">Room Availability</h1>
			<div className='grid-container'>
				{rooms.map((room, index) => {
					return (
						<Link to={`/roomlist/${room._id}`} key={index}>
							<RoomDisplay room={room} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default RoomList;
