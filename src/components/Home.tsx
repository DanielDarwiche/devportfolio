/* eslint-disable jsx-a11y/anchor-is-valid */
import profilbild from '../photos/bild.jpg'
import React from 'react';
import alogga from '../photos/alogga.png'

const Home: React.FC = () => {
  return (
    <section id="home" className="section">
      <h2>Welcome!</h2>
      <img src={profilbild} alt="Profilbild" id='profilbild' />
      <p id='hometexten'>My name is Daniel and I’m a full stack developer from Sweden.<br/>
      Feel free to connect with me for project inquiries or potential collaborations.<br/>
      Take a look at my previous projects below to see some of my earlier projects.</p>
      <ul className="contact-links">
      <li>
      <a href="mailto:danielinti1@hotmail.com?subject=Hello!" title="Send me a mail">
      <i className= "fa-sharp fa-solid fa-envelope"></i>
      </a>
    </li>
    <li>
      <a href="https://www.github.com/danieldarwiche/" target="_blank" rel="noopener noreferrer" title="Visit my Github profile">
      <i className= "fa-brands fa-github"></i>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/daniel-darwiche-9125a6269/" target="_blank" rel="noopener noreferrer" title="Visit my Linkedin profile">
      <i className= "fa-brands fa-linkedin"></i>
      </a>
    </li>
      </ul>
      <ul className="projekticons">
  <li>
    <a href="https://crumbsbyemelie.netlify.app" target="_blank" rel="noopener noreferrer" title="Crumbs by Emelie">🎂</a>
  </li>
  <li>
    <a href="https://ameliavardbemanning.se/" target="_blank" rel="noopener noreferrer" title="Company Website">
    <img src={alogga} alt="Amelia Vårdbemanning" />
    </a>
  </li> 
  <li>
    <a href="https://spanska.netlify.app" target="_blank" rel="noopener noreferrer" title="Spanish Learning Game">🦙</a>
  </li>
      {/* <li>
        <a href="#" onClick={(e) => e.preventDefault()}  title="Work in progress">🔨</a>
      </li> */}
      </ul>
    </section>
  );
};

export default Home;