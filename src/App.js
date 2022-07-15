import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/HomeContainer';
import Body from './Home/Body';
import CreateGuestForm from './Create Guest Form/CreateGuestForm';
import RoomList from './RoomList/RoomList';
import RoomInfo from './RoomInfo/RoomInfo';
import NotFound from './Utilities/NotFound';
import Guest from './Guest/Guest';
import GuestRender from './Guest/GuestRender';
import './Utilities/reset.css';
import './App.css';
import AvailableRoomList from './AvailableRooms/AvailableRoomList';
import Gitz from './Utilities/Gitz Carlton-logos.jpeg';

function App() {
	return (
		<section className='main-container'>
			<nav className='nav-container'>
				<div className='logo-container-main'>
					<Link to='/'>
						<img className='logo-container' src={Gitz} alt='' />
					</Link>
				</div>
				<ul className='link-container'>
					<li className='link pic-lib-link'>
						<Link to='/guestform'>Guest Form</Link>
					</li>
					<li className='link pic-lib-link'>
						<Link to='/roomlist'>Room List</Link>
					</li>
					<li className='link pic-lib-link'>
						<Link to='/guestlist'>Guest List</Link>
					</li>
				</ul>
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/body' element={<Body />} />
					<Route path='/guestform' element={<CreateGuestForm />} />
					<Route path='/roomlist' element={<RoomList />} />
					<Route
						path='/guestforms/:guestId/availablerooms'
						element={<AvailableRoomList />}
					/>
					<Route path='/roomlist/:id' element={<RoomInfo />} />
					<Route path='/guestlist' element={<Guest />} />
					<Route path='/guestlist/:id' element={<GuestRender />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
