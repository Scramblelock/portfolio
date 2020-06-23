import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='header'>Skills</div>
      <div className='skillsList'>
        <div className='frontEnd'>
          <ul>
            <li className='title'>Front End</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Material UI</li>
            <li>Styled Components</li>
          </ul>
        </div>
        <div className='backEnd'>
          <ul>
            <li className='title'>Back End</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Deno</li>
          </ul>
        </div>
        <div className='design'>
          <ul>
            <li className='title'>Design</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere Pro/Final Cut Pro</li>
            <li>Sketch</li>
            <li>Procreate</li>
          </ul>
        </div>
        <div className='other'>
          <ul>
            <li className='title'>Other</li>
            <li>Git/Github</li>
            <li>Fluture</li>
            <li>Partial Lenses</li>
            <li>Jest</li>
            <li>Postman</li>
            <li>Wordpress</li>
            <li>Google Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
