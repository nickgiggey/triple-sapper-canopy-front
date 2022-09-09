import { useState, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Utilities/reset.css';
import './ProfileRender.css';
import { useEffect } from 'react';

const api = axios.create({
	baseURL: 'http://localhost:1337/api/initiate'
})

class ProfileRender extends Component {
	constructor() {
		super(); api.get('/').then(res => {
			console.log(res.data)
		})
	}
// function ProfileRender() {
// 	const [posts, setPosts] = useState([]);

// 	useEffect(() => {
// 		const fetchPost = async () => {
// 			try {
// 				let response = await client.get('http://localhost:1337/api/profile');
// 				setPosts(response.data);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		};
// 		fetchPost();
// 	}, []);
	render() {
		return (
			<div className="app">
				<h2>All Posts 📫</h2>
				{posts.map((post) => {
					return (
						<div className="post-card" key={post.id}>
							<h2 className="post-title">{post.code}</h2>
							<p className="post-body">{post.code}</p>
							<div className="button">
								<div className="delete-btn">Delete</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default ProfileRender;
