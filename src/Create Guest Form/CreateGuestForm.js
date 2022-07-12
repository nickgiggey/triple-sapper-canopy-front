import { useState } from 'react';

import './CreateGuestForm.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function CreateGuestForm(props) {
	const initialFormState = {
		Name: '',
		email: '',
		partySize: 0,
	};

	const [currentFormState, setCurrentFormState] = useState(initialFormState);
	

	function handleChange(event) {
		setCurrentFormState({
			...currentFormState,
			[event.target.id]: event.target.value,
		});
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		await setCurrentFormState(currentFormState);
		try{
			const response = await axios.post('http://localhost:1337/api/guests',currentFormState);
		setCurrentFormState(initialFormState);
		if (response.status ===201){
			Navigate('/availablerooms')
		}
		}	
		catch(error){
			console.log(error)
		}
		
	}
	return (
		<div className='Form-Page-Container'>
			<div className='Form-container'>
				<form className='guest-form' onSubmit={handleSubmit}>
					<label className='form-label' htmlFor='Name'>
						Guest Name:
					</label>
					<input
						className='form-input'
						type='text'
						placeholder='Full Name'
						id='Name'
						value={currentFormState.Name}
						onChange={handleChange}
						required
					/>
					<label className='form-label' htmlFor='email'>
						Guest Email:
					</label>
					<input
						className='form-input'
						type='email'
						id='email'
						placeholder='Email'
						value={currentFormState.email}
						onChange={handleChange}
						required
					/>
					<label className='form-label' htmlFor='partySize'>
						Guest Party size:
					</label>
					<input
						className='form-input'
						type='number'
						id='partySize'
						min={0}
						max={6}
						value={currentFormState.partySize}
						placeholder='# of guests'
						onChange={handleChange}
						required
					/>
					<button className='form-submit' type='Submit'>
						{' '}
						Create Guest
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateGuestForm;
