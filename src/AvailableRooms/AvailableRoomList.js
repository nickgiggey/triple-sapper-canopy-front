import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AvailableRoomDisplay from './AvailableRoomDisplay';
//------  Imports for useReducer  ------//
import { initialState, GET_GUEST_INFO, GET_ROOMS_INFO, LOADING, ERROR, VERDICT }  from './useAvailability';
import availableReducer from './AvailableReducer';


function AvailableRoomList() {
	const [state, dispatch] = useReducer(availableReducer, initialState)
	const { guestId } = useParams();

	const {
		guestInfo, 
		rooms, 
		roomsInfoSuccess, 
		loading, 
		verdict, 
		error, } = state


	const guestDispatch = (guest_info) =>{
		dispatch({
			type: GET_GUEST_INFO,
			payload: guest_info
		})
	} 
	const roomsDispatch = (rooms_list) =>{
		dispatch({
			type: GET_ROOMS_INFO,
			payload: rooms_list
		})
	} 
	const loadingDispatch = (loading_state) =>{
		dispatch({
			type: LOADING,
			payload: loading_state
		})
	} 
	const validationDispatch = (verification) => {
		dispatch({
			type: VERDICT,
			payload: verification
		})
	}
	const errorDispatch = (error_state) =>{
		dispatch({
			type: ERROR,
			payload: error_state
		})
	} 


	async function getGuestInfo(id) {
		try {
			const guest = await axios.get(
				`https://secret-waters-54413.herokuapp.com/api/guests/${id}`
			);
			guestDispatch(await guest.data)
		} catch (error) {
			errorDispatch(error)
		}
	}

	async function getRooms() {
		try {
			loadingDispatch(true)
			const response = await axios.get(
				'https://secret-waters-54413.herokuapp.com/api/rooms'
			);
			const results = response.data.filter((room) => {
				return room.availability && room.roomsize >= guestInfo.partySize;
			});			
			roomsDispatch(await results)
			{await results != 0 ? validationDispatch(true) : validationDispatch(false)}
		} catch (error) {
			errorDispatch(error)
		}
	}


	useEffect(() => {
		getGuestInfo(guestId);
	}, []);

	useEffect(() => {
		getRooms();
	}, [guestInfo]);

	//==========  [Actual Fix] ==========//
	useEffect(() => {
		//------[ rooms != 0 & timeout to rooms == 0 is important! ]-----//
			{rooms != 0 && loadingDispatch(false)}
			if(rooms == 0){
				setTimeout(()=>{
					loadingDispatch(false)
				},[1000])
			}
	}, [rooms]);
	//=====================================//


	while (loading == true) {
		return (
			<div className='home-container2' >
				<h1 className='header'>Room Availability</h1>
				<p className="no_rooms_message">Searching...</p>
			</div>				
		);
	}

	if (error) {
		return (
			<div className='home-container2' >
				<h1 className='header'>Room Availability</h1>
				<p className="no_rooms_message">Something has gone wrong!!</p>
			</div>
		);
	}

	if(roomsInfoSuccess == true && loading == false){
		return(
			<div className='home-container2'>
				<h1 className='header'>Room Availability</h1>
				<div className='grid-container' track="available-grid">
					{rooms.map((room) => {
							return (
								<AvailableRoomDisplay
									room={room}
									key={room._id}
									guestId={guestId}
								/>
							);
						})} 
					<div>		
				</div>
			</div>
		</div>
		)
	}
	{/*=====  [First Validation] roomsInfoSuccess & loading is FALSE  =====*/}
	if (roomsInfoSuccess == false && loading == false){
		return (
			<div className='home-container2' >
				<h1 className='header'>Room Availability</h1>
					{/*=====  [Final Validation] verdict & loading is FALSE  =====*/}
					{verdict == false && loading == false ?
					<p className="no_rooms_message">There don't appear to be any rooms available at the moment for this party. Sorry for the inconvenience.</p>: <div></div> } 
			</div>
		);	
	}
	
}

export default AvailableRoomList;
