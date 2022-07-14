import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Utilities/reset.css';
import './GuestRender.css';
import { useEffect } from 'react';

function GuestRender() {
	const [individual, setIndividual] = useState();
	const navigate = useNavigate();
	let { id } = useParams();
	const isMounted = useRef(true);

	const getIndividual = async () => {
		try {
			const response = await axios.get(
				`https://secret-waters-54413.herokuapp.com/api/guests/${id}`
			);
			const results = await response.data;
			setIndividual(results);
		} catch (error) {
			console.log(error);
		}
	};

	// =========== Check OUT Function ============= //
	const handleCheckOut = async (event) => {
		try {
			const response = await axios.patch(
				`https://secret-waters-54413.herokuapp.com/api/rooms/${individual.roominfo._id}`,
				{ guestinfo: null, availability: true }
			);
		} catch (error) {
			console.log('oh no an error has occured', error);
		}
		try {
			const response = await axios.patch(
				`https://secret-waters-54413.herokuapp.com/api/guests/${individual._id}`,
				{ roominfo: null }
			);
			if (response.status === 200) {
				navigate('/roomlist');
			}
		} catch (error) {
			console.log('error on nullifying roominfo', error);
		}
	};

	// =========== Check IN Function ============= //
	const handleCheckIn = async (event) => {
		navigate(`/guestforms/${id}/availablerooms`);
	};

	// =========== Upgrade Room Function ============= //
	const handleUpgrade = async (event) => {
		try {
			const response = await axios.patch(
				`https://secret-waters-54413.herokuapp.com/api/rooms/${individual.roominfo._id}`,
				{ guestinfo: null, availability: true }
			);
		} catch (error) {
			console.log('oh no an error has occured', error);
		}
		try {
			const response = await axios.patch(
				`https://secret-waters-54413.herokuapp.com/api/guests/${individual._id}`,
				{ roominfo: null }
			);
			if (response.status === 200) {
				navigate(`/guestforms/${id}/availablerooms`);
			}
		} catch (error) {
			console.log('error on nullifying roominfo', error);
		}
	};

	// =========== UnSubscribe Function ============= //
	const handleUnSubscribe = async (event) => {
		try {
			const response = await axios.patch(
				`https://secret-waters-54413.herokuapp.com/api/rooms/${individual.roominfo._id}`,
				{ guestinfo: null, availability: true }
			);
		} catch (error) {
			console.log('oh no an error has occured', error);
		}
		try {
			const result = await axios.delete(
				`https://secret-waters-54413.herokuapp.com/api/guests/${individual._id}`
			);
		} catch (error) {
			console.log(error);
		}
		navigate('/guestlist/');
	};

	useEffect(() => {
		getIndividual();
	}, []);

	if (isMounted && !individual) {
		return <h2>loading...</h2>;
	}

	if (!isMounted && !individual) {
		return <h2>somethings wrong...</h2>;
	}

	return (
		<div className='home-container4'>
			<section className='home-section4'>{individual.name}</section>
			<div className='individual-innerText'>
				<span className='individual-id'>Guest-ID: </span>
				<span className='individual-results-text'>{individual._id}</span>
				<span className='individual-email'>Email:</span>
				<span className='individual-results-text'>{individual.email}</span>
				<span className='individual-partySize'>Party Size: </span>
				<span className='individual-size-text'> {individual.partySize}</span>
				<br />
				<span className='individual-checkIn'>Checked In: </span>
				{/* ------- Checked In ? YES OR NO ------- */}
				{!individual.roominfo ? (
					<span className='individual-checkIn-text'>No</span>
				) : (
					<span className='individual-checkIn-text'>
						Yes <br />
					</span>
				)}
				{/* ------- YES ? ------- */}
				{!individual.roominfo ? (
					<span className='individual-results-text'>{null}</span>
				) : (
					<span className='individual-email'>Room #: </span>
				)}
				{!individual.roominfo ? (
					<span className='individual-results-text'>{null}</span>
				) : (
					<span className='individual-roomNumber-text'>
						{individual.roominfo.roomnumber} <br />
					</span>
				)}
				{!individual.roominfo ? (
					<span>{null}</span>
				) : (
					<button className='checkOut-button' onClick={handleCheckOut}>
						Check Out
					</button>
				)}
				{!individual.roominfo ? (
					<span>{null}</span>
				) : (
					<button className='upgrade-button' onClick={handleUpgrade}>
						upgrade
					</button>
				)}
				{/* ------- NO ? ------- */}
				{!individual.roominfo ? (
					<button className='checkIn-button' onClick={handleCheckIn}>
						Check In
					</button>
				) : (
					<span>{null}</span>
				)}
				<button className='unSub-button' onClick={handleUnSubscribe}>
					Un-Subscribe
				</button>
				<br />
			</div>
		</div>
	);
}

export default GuestRender;
