import axios from 'axios';
import '../Utilities/reset.css';
import './statuslist.css';
import React, { Component } from 'react';

const api = axios.create({
	baseURL: 'http://localhost:1337/api/'
});

class Status extends Component {
	state = {
		status: []
	};
	constructor() {
		super();
		this.getStatus();
	}

	getStatus = async () => {
		let data = await api.get('/initiate').then(({ data }) => data);
		this.setState({ status: data });
	};

	createStatus = async () => {
		let res = await api.post('/status', { id: 0 });
		console.log(res);
		this.getStatus();
	};

	render() {
		return (
			<section>
				<div className='home-container3'>
					<section className='home-section3'>
						<span className="title">Status List</span>
						<ul className='status-list-container'>
							<h1>Hello</h1>
						</ul>
						<div className="status-container">
							{/* <button className='status-button' onClick={this.createStatus}>Show Status</button> */}
							{this.state.status.map(status => <li key={status.id}>{status.id}</li>)}
						</div>
					</section>
				</div>
			</section>
		);
	}
}

export default Status;