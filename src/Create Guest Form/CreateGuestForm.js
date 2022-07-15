import { useState } from 'react';
import './CreateGuestForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateGuestForm(props) {
	const initialFormState = {
		name: '',
		email: '',
		partySize: 1,
	};
	const navigate = useNavigate();
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
		try {
			const response = await axios.post(
				'https://secret-waters-54413.herokuapp.com/api/guests',
				currentFormState
			);
			const guestId = response.data._id;

			setCurrentFormState(initialFormState);

			if (response.status === 200) {
				navigate(`/guestforms/${guestId}/availablerooms`);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='Form-Page-Container'>
			<div className='Form-container'>
				<form className='guest-form' onSubmit={handleSubmit}>
					<label className='form-label' htmlFor='name'>
						Guest Name:
					</label>
					<input
						className='form-input'
						type='text'
						placeholder='Full Name'
						id='name'
						value={currentFormState.name}
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
						min={1}
						max={7}
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
