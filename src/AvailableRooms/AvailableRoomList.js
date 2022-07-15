import { useState, useEffect } from 'react';
import axios from 'axios';
import AvailableRoomDisplay from './AvailableRoomDisplay';
import { useParams } from 'react-router-dom';

function AvailableRoomList(props) {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [guestInfo, setGuestInfo] = useState({});
	const [errorInfo, setErrorInfo] = useState({});
	const { guestId } = useParams();

	async function getRooms() {
		try {
			const response = await axios.get(
				'https://secret-waters-54413.herokuapp.com/api/rooms'
			);
			const results = await response.data.filter((room) => {
				return room.availability && room.roomsize >= guestInfo.partySize;
			});
			setRooms(results);
			
		} catch (error) {
			setErrorInfo(error);
		}
	}

	async function getGuestInfo(id) {
		try {
			const guest = await axios.get(
				`https://secret-waters-54413.herokuapp.com/api/guests/${id}`
			);
			setGuestInfo(guest.data);
		} catch (error) {
			setErrorInfo(error);
		}
	}

	useEffect(() => {
		// Write your GET fetch() or axios() request here
		getGuestInfo(guestId);
	}, []);

	useEffect(() => {
		// Write your GET fetch() or axios() request here
		getRooms();
	}, [guestInfo]);

	useEffect(() => {
		// Write your GET fetch() or axios() request here
			setLoading(false);
	}, [rooms]);

	if (errorInfo.message) {
		return (
			<div className='extra-info'>
				<h2>Something has gone wrong!!</h2>
			</div>
		);
	}

	if (loading) {
		return (
			<div className='extra-info'>
				<h2>Loading...</h2>
			</div>
		);
	}

	if (!loading) {
		return (
			<div className='home-container2'>
				<h1 className='header'>Room Availability</h1>
				<div className='grid-container'>
					{rooms.length ? (
						rooms.map((room) => {
							return (
								<AvailableRoomDisplay
									room={room}
									key={room._id}
									guestId={guestId}
								/>
							);
						})
					) : (
						<p className="no-rooms">There don't appear to be any rooms available at the moment for this party. Sorry for the inconvenience.</p>
					)}
				</div>
			</div>
		);
	}
}

export default AvailableRoomList;
