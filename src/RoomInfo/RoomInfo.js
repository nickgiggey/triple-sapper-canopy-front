import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RoomInfo.css';
import GuestCheckoutButton from './GuestCheckoutButton';
import GuestInfoButton from './GuestInfoButton';
import RoomStatus from './RoomStatus';
import RoomGuestInfo from './RoomGuestInfo';

function RoomInfo(props) {
	const { id } = useParams();
	const [roomId, setRoomId] = useState(id)
	const [room, setRoom] = useState({});
	const [loading, setLoading] = useState(true);

	async function getRoom() {
		try {
			const response = await axios.get(
				`https://secret-waters-54413.herokuapp.com/api/rooms/${roomId}`
			);
			const results = await response.data;
			setRoom(results);
		} catch (error) {
			setLoading(false);
		}
	}

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (!roomId) {
				setLoading(false);
			}
		}, 5000);

		getRoom();

		return () => clearTimeout(handleLoadingTimeOut);
	}, [roomId]);

	if (loading && !room.roomnumber) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className='room-info-wrapper'>
			<div className='information-wrapper'>
				<p className='room-number'>Room: {room.roomnumber}</p>
				<section className='room-status-wrapper'>
					<p className='room-status-header'>Currently:</p>
					<RoomStatus room={room} />
				</section>
				<section className='room-guest-wrapper'>
					<RoomGuestInfo room={room} />
				</section>
				<section className='room-buttons-wrapper'>
					<GuestCheckoutButton room={room} />
					<GuestInfoButton room={room} />
				</section>
			</div>
		</div>
	);
}

export default RoomInfo;
