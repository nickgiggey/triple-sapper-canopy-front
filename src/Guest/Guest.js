import '../Utilities/reset.css';
import './Guest.css';
import { useNavigate } from 'react-router-dom';
import guestSeed from '../guestSeed.json';
function Guest(props) {
	const guestList = guestSeed;
	const navigate = useNavigate();

	return (
		<div className='home-container3'>
			<section className='home-section3'>Guest List</section>
			<ul className='guest-list-container'>
				{guestList.map((item) => {
					return (
						<li className='guest-list' key={item.id}>
							<p className='guest-id'>guest-id: {item.id}</p>
							<p>{item.name}</p>
							<p>{item.email}</p>
							<button
								className='guest-button'
								onClick={() => {
									navigate(`/guestlist/${item.id}`);
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
