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
				<div className='projectBox'>
					<a 
						href='https://smart-brain-marc.herokuapp.com/' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						<img src={krang} alt=''/>
						<div className='overlay'>
							Smart Brain
							<p>React + Node.js</p>
						</div>
					</a>
				</div>
				<div className='projectBox'>
					<a 
						href='https://scramblelock.github.io/robofriends-redux-pwa/' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						<img src={robot} alt=''/>
						<div className='overlay'>
							Robofriends
							<p>React + Redux</p>
						</div>
					</a>
				</div>
				<div className='projectBox'>
					<a 
						href='https://scramblelock.github.io/hack-the-news/' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						<img src={hackthenews} alt=''/>
						<div className='overlay'>
							Hack The News
							<p>React</p>
						</div>
					</a>
				</div>
				<div className='projectBox'>
					<a 
						href='https://scramblelock.github.io/toronto-waste-lookup/' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						<img src={toronto} alt=''/>
						<div className='overlay'>
							Toronto Waste Lookup
							<p>React</p>
						</div>
					</a>
				</div>
				<div className='projectBox'>
					<a 
						href='https://scramblelock.github.io/coding_challenge_11/' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						<img src={huddle} alt=''/>
						<div className='overlay'>
							Huddle
							<p>HTML + CSS + Bootstrap</p>
						</div>
					</a>
				</div>
				<div className='projectBox'>
					<a 
						href='https://scramblelock.com' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						<img src={locking4life} alt=''/>
						<div className='overlay'>
							Scramblelock
							<p>Wordpress + HTML + CSS</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;