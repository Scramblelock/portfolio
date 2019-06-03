import React from 'react';
import './Projects.css';
import krang from './Images/krangfull.png';
import robot from './Images/robofriends.png';
import hackthenews from './Images/hackthenews.png';
import toronto from './Images/toronto.png';
import huddle from './Images/huddle.png';
import locking4life from './Images/locking4life.png';

const Projects = () => {

	return (
		<div className='projects'>
			<div className='header'>
				Projects
			</div>
			<div className='projectGrid'>
				<div className='projectBox'><img src={krang} alt=''/></div>
				<div className='projectBox'><img src={robot} alt=''/></div>
				<div className='projectBox'><img src={hackthenews} alt=''/></div>
				<div className='projectBox'><img src={toronto} alt=''/></div>
				<div className='projectBox'><img src={huddle} alt=''/></div>
				<div className='projectBox'><img src={locking4life} alt=''/></div>
			</div>
		</div>
	);
};

export default Projects;