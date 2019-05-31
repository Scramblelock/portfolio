import React from 'react';
import marcLogo from './marcLogo.png';
import './Navigation.css';

const Navigation = () => {

	return (
		<div>
			<ul className='navBar'>
				<li className='logo'><a href="/"><img className='marcLogo' alt='marcLogo' src={marcLogo}/></a></li>
        <li className='menuItems'><a href="#about">About</a></li>
        <li className='menuItems'><a href="#contact">Contact Me</a></li>
			</ul>
		</div>
	);
};

export default Navigation;