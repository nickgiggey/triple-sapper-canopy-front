import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/HomeContainer';
import Body from './Home/Body';
import CreateGuestForm from './Create Guest Form/CreateGuestForm';
import RoomList from './RoomList/RoomList';
import NotFound from './Utilities/NotFound';
import Guest from './Guest/Guest';
import GuestRender from './Guest/GuestRender';
import './Utilities/reset.css';
import './App.css';
import AvailableRoomList from './AvailableRooms/AvailableRoomList';

function App() {
	return (
		<section className='main-container'>
			<nav className='nav-container'>
				<div className='logo-container'>
					<Link to='/'>
						<h1 className='logo-title'>ZET Resorts & Hotels</h1>
					</Link>
					<Link to='/'>
						{/* <img src={logo} alt='' style={logoStyle} /> */}
					</Link>
				</div>
				<ul className='link-container'>
					<Link to='/guestform'>
						<li className='link pic-lib-link'>Guest Form</li>
					</Link>
					<Link to='/roomlist'>
						<li className='link pic-lib-link'>Room List</li>
					</Link>
					<Link to='/guestlist'>
						<li className='link pic-lib-link'>Guest List</li>
					</Link>
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
					<Route path='/guestlist' element={<Guest />} />
					<Route path='/guestlist/:id' element={<GuestRender />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
