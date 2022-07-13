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
			const response = await axios.get('http://localhost:1337/api/guests');
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
			<section className='home-section3'>Guest List</section>
			<ul className='guest-list-container'>
				{guests.map((item) => {
					return (
						<li className='guest-list' key={item._id}>
							<span className='guest-id'>{item._id}</span>
							<span className='guest-innerText'>
								<br />
								{item.name}
								<br />
								{item.email}
								<br />
								Party-Size#: {item.partySize}
							</span>

							<button
								className='guest-button'
								onClick={() => {
									navigate(`/guestlist/${item._id}`);
								}}>
								Expand
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Guest;
