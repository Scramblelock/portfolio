import React from "react";
import Slider from "react-animated-slider";
import MarcBrush from "./Logos/MarcBrush.png";
import MarcCode from "./Logos/MarcCode.png";
import MarcGraf1 from "./Logos/MarcGraf1.png";
import "react-animated-slider/build/horizontal.css";
import "./Landing.css";

const content = [
  {
    image: MarcCode,
  },
  {
    image: MarcBrush,
  },
  {
    image: MarcGraf1,
  },
];

const Landing = () => {
  return (
    <div className='welcomePage'>
      <div className='textHello'>Hello. My name is</div>
      <Slider
        className='slider'
        autoplay={3000}
        previousButton={null}
        nextButton={null}
      >
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}') no-repeat center center`,
              backgroundSize: `contain`,
            }}
          ></div>
        ))}
      </Slider>
    </div>
  );
};

export default Landing;
