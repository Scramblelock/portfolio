import React, { Component } from 'react';
import './Contact.css';
import canadianTuxedo from './canadianTuxedo.jpg';

class Contact extends Component {
	state = {
		name: '',
		message: '',
		email: '',
		sent: false,
		buttonText: 'Send Message'
	}
	
	render() {
		return (
			<div className='contact'>
				<div className='header'>
					Contact
				</div>
				<div className='contactBody'>
					<div className='inputForm'>
						Have a question or want to work together?
						<form 
							className="contact-form" 
							onSubmit={ (e) => this.formSubmit(e)}
						>
						  <input 
						  	onChange={e => this.setState({ name: e.target.value})} 
						  	name="name" 
						  	class="message-name" 
						  	type="text" 
						  	placeholder="Name" 
						  	value={this.state.name}
						  />
						  <input 
						  	onChange={(e) => this.setState({ email: e.target.value})} 
						  	name="email" 
						  	class="message-email" 
						  	type="email" 
						  	placeholder="Email" 
						  	required value={this.state.email} 
						  />
						  <textarea 
						  	onChange={e => this.setState({ message: e.target.value})} 
						  	name="message" 
						  	class="message-input" 
						  	type="text" 
						  	placeholder="Your message" 
						  	value={this.state.message} 
						  	required
						  />
						  <div className="button--container">
						      <button 
						      	type="submit" 
						      	className="button button-primary"
						      >
						      	{ this.state.buttonText }
						      </button>
						  </div>
						</form>
					</div>
					<div className='photo'>
						<img src={canadianTuxedo} alt=''/>
					</div>
				</div>
			</div>
		);
	}
};

export default Contact;