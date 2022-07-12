import { useState, useEffect } from 'react';
import axios from 'axios';
import AvailableRoomDisplay from './AvailableRoomDisplay';


function AvailableRoomList(props) {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	async function getRooms() {
		try {
			const response = await axios.get('http://localhost:1337/api/rooms');
			const results = await response.data.filter(
				(result) => result.availability
			);
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

		// Write your GET fetch() or axios() request here
		getRooms();

		return () => clearTimeout(handleLoadingTimeOut);
	}, []);

	if (loading && !rooms.length) {
		return <h2>Loading...</h2>;
	}

	// if (!loading && !rooms.length) {
	// 	return <h2>Oops, something went wrong. Please try again later! </h2>;
	// }
	// const results = rooms.filter(room => room.availability === true);
	return (
		<div className='home-container2'>
			<div className='grid-container'>
				{rooms.map((room, index) => {
					return <AvailableRoomDisplay room={room} key={index} />;
				})}
			</div>
		</div>
	);
}

export default AvailableRoomList;
