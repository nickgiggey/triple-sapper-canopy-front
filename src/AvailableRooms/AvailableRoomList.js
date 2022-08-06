import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AvailableRoomDisplay from './AvailableRoomDisplay';
//------  Imports for useReducer  ------//
import { initialState, GET_GUEST_INFO, GET_ROOMS_INFO, LOADING, ERROR }  from './useCases';
import availableReducer from './AvailableReducer';


function AvailableRoomList() {
	const [state, dispatch] = useReducer(availableReducer, initialState)
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [guestInfo, setGuestInfo] = useState({});
	const [errorInfo, setErrorInfo] = useState({});
	const { guestId } = useParams();

	// console.log("rooms state: " + !rooms)
	// console.log("loading state: " + loading)

	const guestTest = (guestID) =>{
		dispatch({
			type: GET_GUEST_INFO,
			payload: guestID
		})
	} 

	const roomTest = (roomsID) =>{
		dispatch({
			type: GET_ROOMS_INFO,
			payload: roomsID
		})
	} 

	const loadingTest = (loadingState) =>{
		dispatch({
			type: LOADING,
			payload: loadingState
		})
	} 

	const errorTest = (errorState) =>{
		dispatch({
			type: ERROR,
			payload: errorState
		})
	} 

	// -----  Goes to  CASE: GET_ROOMS useReducer  (2)-----//
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

	// -----  Goes to  CASE: GET_GUEST_INFO useReducer  (1)-----//
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
			// -----  Goes to  CASE: GET_GUEST_INFO useReducer  (1)-----//
		getGuestInfo(guestId);
	}, []);

	useEffect(() => {
			// -----  Goes to  CASE: GET_ROOMS useReducer  (2)-----//
		getRooms();
	}, [guestInfo]);

	useEffect(() => {
		//------  Goes to CASE: LOADING useReducer  (3)------//
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
					{/* Goes to Reducer Cases ---- */}
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
