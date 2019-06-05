import React from 'react';
import './AboutMe.css';

const AboutMe = () => {

	return (
		<div className='aboutMe' id='about'>
			<div className='header'>
				About Me
			</div>
			<p className='aboutText'>
				Based in Montréal, Québec, Canada, I'm a highly motivated, self-taught full-stack web developer with a diverse background in arts and sciences and a passion for learning new technologies. I have always pursued meaningful opportunities in my career and am driven by a desire to make a difference in people's lives. 
			</p>
			<p className='aboutText'>
				As a developer I enjoy making web pages fast and easy to use, while applying the latest technologies. My background as a scientist has helped me be a better problem solver and has given me a sharp and disciplined attention to detail. I also have a very strong artistic side, the result of being involved in Hip Hop culture (as a dancer and artist) for over 20 years. My graphic design, video editing and brush lettering skills developed from a love for graffiti and street art. The approach I took to learning dances like b-boying and locking has helped me become a creative artist, community leader and an effective teacher.
			</p>
			<p className='aboutText'>
				I've travelled the world, working with people from all walks of life. Following the motto of "each one, teach one", I truly believe we all have something special to bring to the table. <a className='touchLink' href="#contact"><b>Get in touch</b></a> to see what I can bring to your team!
			</p>
		</div>
	);
};

export default AboutMe;