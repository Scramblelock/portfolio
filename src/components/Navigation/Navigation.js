import React from 'react';
import marcLogo from './marcLogo.png';
import './Navigation.css';

const Navigation = () => {

	return (
		<div>
			<ul className='navBar'>
				<li className='logo'><img className='marcLogo' alt='marcLogo' src={marcLogo}/></li>
        <li className='menuItems'>About</li>
        <li className='menuItems'>Contact</li>
			</ul>
		</div>
	);
};

export default Navigation;