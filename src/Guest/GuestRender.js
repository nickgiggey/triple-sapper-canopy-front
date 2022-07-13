import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Utilities/reset.css';
import './GuestRender.css';
import { useEffect } from 'react';

function GuestRender() {
	const [individual, setIndividual] = useState();
	let { id } = useParams();
	const isMounted = useRef(true);
	console.log(id);

	const getIndiviual = async () => {
		try {
			const response = await axios.get(
				`http://localhost:1337/api/guests/${id}`
			);
			const results = await response.data;
			console.log(results);
			setIndividual(results);
		} catch (error) {
			console.log(error);
		}
	};

	//handleCheckOut
	//handleChangeRoom

	useEffect(() => {
		getIndiviual();
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
				{individual._id}
				<br />
				<span className='individual-email'>
					Email: <br />
				</span>
				{individual.email}
				<br />
				<span className='individual-partySize'>
					Party Size: <br />
				</span>
				{individual.partySize}
				<br />
				<button className='checkOut-button'>CheckOut</button>
			</div>
		</div>
	);
}

export default GuestRender;
