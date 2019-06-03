import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Landing.css';

const content = [
	{
		image: 'https://cdn.filestackcontent.com/ANI9fS5qSayY5tX9tYEmZz/resize=width:1200,height:520,fit:scale/output=secure:true/security=policy:eyJleHBpcnkiOiAxNTU5MzMyMjA4LCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==,signature:dbfb839bb37b2cb8dacc4143ff59b7054ac409b0c65af9c2d980f04203bdcda4/txQLhr73TKapsp3kGaeY'
	},
	{
		image: 'https://cdn.filestackcontent.com/ANI9fS5qSayY5tX9tYEmZz/resize=width:1200,height:520,fit:scale/output=secure:true/security=policy:eyJleHBpcnkiOiAxNTU5MzMyMjA4LCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==,signature:dbfb839bb37b2cb8dacc4143ff59b7054ac409b0c65af9c2d980f04203bdcda4/zk4k699zTrKajLsTNxSG'
	},
	{
		image: 'https://cdn.filestackcontent.com/ANI9fS5qSayY5tX9tYEmZz/resize=width:1200,height:520,fit:scale/output=secure:true/security=policy:eyJleHBpcnkiOiAxNTU5MzMyMjA4LCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==,signature:dbfb839bb37b2cb8dacc4143ff59b7054ac409b0c65af9c2d980f04203bdcda4/sl1Nha93RbmCcvu0Tpak'
	} 
]

const Landing = () => {

	return (
		<div className='welcomePage'>
			<div className='textHello'>
				Hello. my name is
			</div>
			<Slider 
				className='slider' 
				autoplay={3000} 
				previousButton={null} 
				nextButton={null}
			>
			  {content.map((item, index) => (
			  	<div 
			  		key={index}
			  		style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: `contain`}}
			  	>
			    </div>
			  ))}
			</Slider>
		</div>
	);
};

export default Landing;