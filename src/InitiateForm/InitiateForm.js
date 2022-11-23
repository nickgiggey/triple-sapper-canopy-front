import './InitiateForm.css';
import React from 'react';

function InitiateForm() {
	let Code = JSON.stringify(Math.floor(Math.random() * (50 - 5 + 1) * Math.PI + 5), 10);
	let keyPhrase = JSON.stringify(('Sapper'), 10);

	const handleClick = () => {
		fetch('http://localhost:1337/api/initiate', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Code: Code,
				Authorization: keyPhrase,
			}),
		});
		console.log('Salted', keyPhrase);
		console.log('Phrase', Code);
	};
	console.log('unSalted', Code);
	console.log('unPhrased', keyPhrase);
	return (
		<section className='Form-Page-Container'>
			<div className='Form-container'>
				<button className='emc2-form'
					id='Code'
					value={Code}
					type='password'
					onClick={() => {
						handleClick();
					}}
				>
					<i className="fas fa-fingerprint i1" aria-hidden="true"></i>
				</button>
			</div>
		</section>
	);
};
export default InitiateForm;

		// const accessToken = 'Sapper                                                            ';
		// let code = {
		// 	code: Math.floor(Math.random() * (50 - 5 + 1) * Math.PI + 5),
		// 	Authorization: [accessToken],
		// };

		// const navigate = useNavigate();
		// const [formState, setFormState] = useState(code);

		// function handleChange(event) {
		// 	setFormState({ ...formState, [event.target.id]: event.target.value });
		// }

		// const handleClick = async () => {
		// 	try {
		// 		const response = await axios.post(
		// 			'http://localhost:1337/api/initiate',
		// 			formState
		// 		);
		// 		console.log('hashed', formState)
		// 		const codeId = response.data._id;
		// 		if (response === 201) {
		// 			navigate(`/status`);
		// 		}
		// 		console.log("codeId", codeId)
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };
