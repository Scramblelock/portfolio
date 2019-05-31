import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Landing.css';

const content = [
	{
		image: 'https://cdn.filestackcontent.com/ARVNFDkIFTCy2nOXvYSoLz/resize=width:1200,height:540,fit:scale/output=secure:true/security=policy:eyJleHBpcnkiOiAxNTU5MzI1NjUwLCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==,signature:682e9b8d7eede33b13b7708fe04f1b43fd2b6382c860e3975caea1fc0b97c1ac/7F6Y9rG4QwHCKwLFeSED'
	},
	{
		image: 'https://cdn.filestackcontent.com/ARVNFDkIFTCy2nOXvYSoLz/resize=width:1200,height:520,fit:scale/output=secure:true/security=policy:eyJleHBpcnkiOiAxNTU5MzI1NjUwLCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==,signature:682e9b8d7eede33b13b7708fe04f1b43fd2b6382c860e3975caea1fc0b97c1ac/qmK8311eQauMynoLj5Aq'
	},
	{
		image: 'https://cdn.filestackcontent.com/ARVNFDkIFTCy2nOXvYSoLz/resize=width:1200,height:520,fit:scale/output=secure:true/security=policy:eyJleHBpcnkiOiAxNTU5MzI1NjUwLCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==,signature:682e9b8d7eede33b13b7708fe04f1b43fd2b6382c860e3975caea1fc0b97c1ac/q4jA4qTxWdygSm4ZtT1A'
	} 
]

const Landing = () => {

	return (
		<div className='welcomePage'>
			<div className='textHello'>
				Hello. my name is
			</div>
			<Slider className='slider' autoplay={3000}>
			  {content.map((item, index) => (
			  	<div 
			  		key={index}
			  		style={{ background: `url('${item.image}') no-repeat center center` }}
			  	>
			    </div>
			  ))}
			</Slider>
		</div>
	);
};

export default Landing;