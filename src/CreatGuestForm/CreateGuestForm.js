import { useState } from 'react';
import './CreateGuestForm.css';


function CreateGuestForm(props) {

    const initialFormState = {
				Name: '',
				email: '',
                partySize: 0,
			};

	const [formState, setFormState] = useState(initialFormState);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}
    function handleSubmit(event) {
			event.preventDefault();
			console.log('you clicked me');
			console.log(formState);
			setFormState(formState);
            
		}
	return (
		<div className='Form-Page-Container'>
			<div className='Form-container'>
				<form className='guest-form' onSubmit={handleSubmit}>
					<label className='form-label' htmlFor='guest-name'>
						Guest Name:
					</label>
					<input
						className='form-input'
						type='text'
						placeholder='Full Name'
						id='Name'
						value={formState.Name}
						onChange={handleChange}
						required
					/>
					<label className='form-label' htmlFor='guest-email'>
						Guest Email:
					</label>
					<input
						className='form-input'
						type='email'
						id='email'
						placeholder='Email'
						value={formState.email}
						onChange={handleChange}
						required
					/>
					<label className='form-label' htmlFor='guest-party-size'>
						Guest Party size:
					</label>
					<input
						className='form-input'
						type='number'
						id='partySize'
						min={0}
						max={6}
						value={formState.partySize}
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
