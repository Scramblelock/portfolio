import React, { Component } from 'react';
import './Contact.css';
import canadianTuxedo from './canadianTuxedo.jpg';
import axios from 'axios';

class Contact extends Component {
	state = {
		name: '',
		message: '',
		email: '',
		sent: false,
		buttonText: 'Send Message'
	}
	
	formSubmit = (e) => {
	  e.preventDefault();

	  this.setState({ buttonText: '...sending' })

	  let data = {
	      name: this.state.name,
	      email: this.state.email,
	      message: this.state.message,
	      headers: { 'Access-Control-Allow-Origin':'*'}
	  }
	  
	  axios.post('http://localhost:4444/api/v1', data)
	  .then( res => {
	      this.setState({ sent: true }, this.resetForm())
	  })
	  .catch( () => {
	    console.log('Message not sent')
	  })
	}

	resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
    })
	}

	render() {
		return (
			<div className='contact' id='contact'>
				<div className='header'>
					Contact
				</div>
				<div className='contactBody'>
					<div className='inputForm'>
						<p>Have a question or want to work together?</p>
						<form 
							className="contactForm" 
							onSubmit={ (e) => this.formSubmit(e)}
						>
						  <input 
						  	onChange={e => this.setState({ name: e.target.value})} 
						  	name="name" 
						  	className="messageName" 
						  	type="text" 
						  	placeholder="Name" 
						  	value={this.state.name}
						  />
						  <input 
						  	onChange={(e) => this.setState({ email: e.target.value})} 
						  	name="email" 
						  	className="messageEmail" 
						  	type="email" 
						  	placeholder="Email" 
						  	required value={this.state.email} 
						  />
						  <input 
						  	onChange={e => this.setState({ message: e.target.value})} 
						  	name="message" 
						  	className="messageInput" 
						  	type="text" 
						  	placeholder="Your message" 
						  	value={this.state.message} 
						  	required
						  />
						  <div className="buttonContainer">
						      <button 
						      	type="submit" 
						      	className="buttonPrimary"
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