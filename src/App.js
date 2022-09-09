import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Main/HomeContainer';
import InitiateForm from './InitiateForm/InitiateForm';
import StatusList from './Status/StatusList';
import NotFound from './Utilities/NotFound';
import Profile from './Profile/Profile';
import './Utilities/reset.css';
import './App.css';
import Einstein from './e_mc2png.png';

function App() {
	return (
		<section className='main-container'>
			<nav className='nav-container'>
				<div className='logo-container-main'>
					<Link to='/'>
						<img className='logo-container' src={Einstein} alt='' />
					</Link>
				</div>
				<ul className='link-container'>
					<li className='link pic-lib-link'>
						<Link to='/initiate'>Initiate</Link>
					</li>
					<li className='link pic-lib-link'>
						<Link to='/status'>Status</Link>
					</li>
					<li className='link pic-lib-link'>
						<Link to='/profile'>Profile</Link>
					</li>
				</ul>
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/initiate' element={<InitiateForm />} />
					<Route path='/status' element={<StatusList />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
