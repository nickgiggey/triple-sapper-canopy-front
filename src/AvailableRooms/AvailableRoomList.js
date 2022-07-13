import { useState, useEffect } from 'react';
import axios from 'axios';
import AvailableRoomDisplay from './AvailableRoomDisplay';
import { useParams } from 'react-router-dom';

function AvailableRoomList(props) {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const { guestId } = useParams();

	async function getRooms() {
		try {
			const response = await axios.get(
				'https://secret-waters-54413.herokuapp.com/api/rooms'
			);
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

	return (
		<div className='home-container2'>
			<h1 className='header'>Room Availability</h1>
			<div className='grid-container'>
				{rooms.map((room, index) => {
					return (
						<AvailableRoomDisplay
							room={room}
							key={room._id}
							guestId={guestId}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default AvailableRoomList;
