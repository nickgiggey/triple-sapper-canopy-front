import '../Utilities/reset.css';
import './Guest.css';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Guest() {
	const [guests, setGuests] = useState();
	const navigate = useNavigate();
	let isMounted = useRef(true);

	const getGuests = async () => {
		try {
			const response = await axios.get(
				'https://secret-waters-54413.herokuapp.com/api/guests'
			);
			const results = await response.data;
			setGuests(results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isMounted) {
			getGuests();
		}
		isMounted = false;
	}, [guests]);

	if (isMounted && !guests) {
		return <h2>loading...</h2>;
	}

	if (!isMounted && !guests) {
		return <h2>somethings wrong...</h2>;
	}

	return (
		<div className='home-container3'>
			<section className='home-section3'>
				<span className="title">Guest List</span>
				<ul className='guest-list-container'>
					{guests.map((item) => {
						return (
							<li className='guest-list' key={item._id}>
								<ul className='guest-id'>
									<span>ID:</span>
									{item._id}
								</ul>
								<ul className='guest-innerText'>
									<br />
									<span>Name: </span>
									{item.name}
									<br />
									<span className='guest-email'>Email: </span>
									{item.email}
									<br />
									<span>Party-Size#: </span> {item.partySize}
								</ul>
								<button
									className='guest-button'
									onClick={() => {
										navigate(`/guestlist/${item._id}`);
									}}>
									<span className='expand'>Expand</span>
								</button>
							</li>
						);
					})}
				</ul>
			</section>
		</div>
	);
}

export default Guest;
