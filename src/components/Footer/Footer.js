import React from "react";
import format from "date-fns/format";

import gmail from "./Social/gmail.png";
import facebook from "./Social/facebook-logo-button.png";
import github from "./Social/github-logo.png";
import instagram from "./Social/instagram.png";
import linkedin from "./Social/linkedin.png";
import twitter from "./Social/twitter-logo-button.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='socialIcons'>
        <li>
          <a
            href='https://www.linkedin.com/in/scramblelock/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkedin} alt='' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Scramblelock'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={github} alt='' />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/scramblelock'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook} alt='' />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/scramblelock/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} alt='' />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/Scramblelock'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={twitter} alt='' />
          </a>
        </li>
        <li>
          <a href='mailto:scramblelock@gmail.com'>
            <img src={gmail} alt='' />
          </a>
        </li>
      </ul>
      <p>MARC SAKALAUSKAS © {format(new Date(), "yyyy")}</p>
    </div>
  );
};

export default Footer;
