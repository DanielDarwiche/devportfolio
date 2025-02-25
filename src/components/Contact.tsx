import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
        <ul className="direct-contact-links">
          <li>
            <p>Mail</p>
            <a href="mailto:danielinti1@hotmail.com?subject=Hello!" title="Send me a mail">
              <i className="fa-sharp fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <p>Github</p>
            <a href="https://www.github.com/danieldarwiche/" target="_blank" rel="noopener noreferrer" title="Visit my Github profile">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <p>Linkedin</p>
            <a href="https://www.linkedin.com/in/daniel-darwiche-9125a6269/" target="_blank" rel="noopener noreferrer" title="Visit my Linkedin profile">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
    </section>
  );
};

export default Contact;
