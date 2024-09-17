/* eslint-disable jsx-a11y/anchor-is-valid */
import profilbild from '../photos/kp.jpg'
import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="section">
      <h2>Welcome!</h2>
      <img src={profilbild} alt="Profilbild" id='profilbild' />
      <p>My name is Daniel, and I’m a full stack developer from Sweden.<br/><br/>
      Feel free to connect with me for project inquiries or potential collaborations!<br/><br/>
      Take a look at my previous projects to see some of my earlier creations.</p>
      <ul className="contact-links">
      <li>
      <i className= "fa-sharp fa-solid fa-envelope"></i>
        <a href="mailto:danielinti1@hotmail.com?subject=Hello!" title="Say hello!"></a>
      </li>
      <li>
      <i className= "fa-brands fa-github"></i>
        <a href="https://www.github.com/danieldarwiche/" target="_blank" rel="noopener noreferrer" title="Visit my Github profile!"></a>
      </li>
      <li>
      <i className= "fa-brands fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/daniel-darwiche-9125a6269/" target="_blank" rel="noopener noreferrer" title="I&#x27;m on Linkedin!"></a>
      </li>
      </ul>

      <ul className="projekticons">
  <li>
    <a href="https://crumbsbyemelie.netlify.app" target="_blank" rel="noopener noreferrer" title="Crumbs by Emelie">🎂</a>
  </li>
  <li>
    <a href="https://spanska.netlify.app" target="_blank" rel="noopener noreferrer" title="Spanish Learning Game">🦙</a>
  </li>
  <li>
    <a href="https://danieldarwiche.netlify.app" target="_blank" rel="noopener noreferrer" title="Developer Portfolio">💻</a>
  </li> 
  <li>
    <a href="#" title="Work in progress">🔨</a>
  </li>
      {/* <li><p>💪🏼</p>
        <a href="https://www.linkedin.com/in/daniel-darwiche-9125a6269/" target="_blank" rel="noopener noreferrer" title="I&#x27;m on Linkedin!"></a>
      </li> */}
      </ul>
    </section>
  );
};

export default Home;