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
	constructor(code) {
		super(code);
		code = this.getStatus();
	}

	getStatus = async () => {
		let data = await api.get('/initiate').then(({ data }) => data);
		this.setState({ status: data });
	};

	createStatus = async () => {
		let res = await api.post('/status', { id: 0 });
		console.log('res', res)
		this.getStatus();
	};

	render() {
		console.log('status', this.state.status.code)
		return (
			<section>
				<div className='home-container3'>
					<section className='home-section3'>
						<span className="title">Status List</span>
						<ul className='status-list-container'>
						</ul>
						<div className="status-container">
							{/* <button className='status-button' onClick={this.createStatus}>Show Status</button> */}
							{this.state.status.map(status =>
								<ul key={status.id}>
									<br />
									Authorization: {status.Authorization}
									<br />
									code: {status.code}
									<br />
								</ul>
							)}
						</div>
					</section>
				</div>
			</section>
		);
	}
}

export default Status;