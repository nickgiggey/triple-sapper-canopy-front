import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
	const [profile, setProfile] = useState([]);

	// GET with Axios
	// useEffect(() => {
	// 	const fetchProfile = async () => {
	// 		try {
	// 			let response = await axios.get('http://localhost:1337/api/profile');
	// 			setProfile(response.data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	fetchProfile();
	// }, []);
	const [address, setAddress] = useState([]);
	async function getAddresses() {
		const results = [];
		const response = await axios.get('http://localhost:1337/api/status');
		setProfile(response.data);
		results.push(response[0]);
		setAddress(results);
		console.log('response:', response)
		console.log('results:', results)
		console.log('response type:', typeof response);
		console.log('results type:', typeof results)
	}
	console.log('address:', address)
	console.log('address type:', typeof address)
	useEffect(() => {
		getAddresses();
	}, []);

	return (
		<div className="app">
			<div>
				<p>POSTS APP</p>
			</div>
			<div className="profile-container">
				<h2>All Profile 📫</h2>
				{profile.map((profile) => {
					return (
						<div className="post-card" key={profile.code}>
							<h2 className="profile-title">{profile.code}</h2>
							<p className="profile-body">{profile}</p>
							<h1 className='info-window'>{address[profile]}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Profile;
