import React from 'react';
import './Contact.css';
import canadianTuxedo from './canadianTuxedo.jpg';

const Contact = () => {

	return (
		<div className='contact'>
			<div className='header'>
				Contact
			</div>
			<div className='contactBody'>
				<div className='inputForm'>
					Have a question or want to work together?
					<input type="text" id="name" name="name" required></input>
					<input type="email" id="email" name="email" required></input>
					<input></input>
					<button>Submit</button>
				</div>
				<div className='photo'>
					<img src={canadianTuxedo} alt=''/>
				</div>
			</div>
		</div>
	);
};

export default Contact;