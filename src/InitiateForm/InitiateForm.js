import './InitiateForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function InitiateForm() {
	const accessToken = 'Sapper';
	let code = {
		code: Math.floor(Math.random() * (50 - 5 + 1) * Math.PI + 5),
		Authorization: [accessToken],
	};

	const navigate = useNavigate();
	const [formState, setFormState] = useState(code);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	const handleClick = async () => {
		try {
			const response = await axios.post(
				'http://localhost:1337/api/initiate',
				formState
			);
			console.log('hashed', formState)
			const codeId = response.data._id;
			if (response === 201) {
				navigate(`/status`);
			}
			console.log("codeId", codeId)
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className='Form-Page-Container'>
			<div className='Form-container'>
				<button className='emc2-form'
					id='code'
					value={formState.code}
					type='password'
					onClick={() => {
						handleClick();
					}}
					onChange={handleChange}>
					<i className="fas fa-fingerprint i1" aria-hidden="true"></i>
				</button>
			</div>
		</section>
	);
}

export default InitiateForm;
