import { useParams } from 'react-router-dom';
import '../Utilities/reset.css';
import './Guest.css';

function GuestRender() {
	let { id } = useParams();
	console.log(id);

    //this is where we axios.get by id and populate the data

	return (
		<div className='home-container3'>
			<section className='home-section3'>Guest Render</section>
		</div>
	);
}

export default GuestRender;
