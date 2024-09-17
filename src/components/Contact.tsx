import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Press any option below:</p>
      <div className='box-layout'>
    <ul className="contact-special">
    <li>
      <p>Mail</p>
    </li>
    <li>
      <p>Github</p>
    </li>
    <li>
      <p>Linkedin</p>
    </li>
    </ul>
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
      </div>
    </section>
  );
};

export default Contact;