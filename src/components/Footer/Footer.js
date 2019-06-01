import React from 'react';
import './Footer.css';
import gmail from './Social/gmail.png';
import facebook from './Social/facebook-logo-button.png';
import github from './Social/github-logo.png';
import instagram from './Social/instagram.png';
import linkedin from './Social/linkedin.png';
import twitter from './Social/twitter-logo-button.png';

const Footer = () => {

	return (
		<div className='footer'>
			<ul className='socialIcons'>
				<li><img src={linkedin} alt=''/></li>
				<li><img src={github} alt=''/></li>
				<li><img src={facebook} alt=''/></li>
				<li><img src={instagram} alt=''/></li>
				<li><img src={twitter} alt=''/></li>
				<li><img src={gmail} alt=''/></li>
			</ul>
		</div>
	);
};

export default Footer;