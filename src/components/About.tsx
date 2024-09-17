import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <h2>About</h2>
        <p>Hello! My name is Daniel Darwiche, and I’m a full stack developer.<br/> 
        After completing a two-year software development program, I have a solid foundation in C# and .NET, 
        along with database handling using "Microsoft SQL Server" and agile methodologies (particularly Scrum).
        </p>
        <div>
        <i className= "fa-sharp fa-solid fa-bug">&nbsp;</i>
        <i className= "fa-sharp fa-solid fa-bug">&nbsp;</i>
        <i className= "fa-sharp fa-solid fa-bug">&nbsp;</i>
        </div>
        <p>
        My primary focus has been on back end development, but I am very interested in creating good user experiences across different stacks and using different techniques.<br/>
        To further advance my skills in web-dev, I have dedicated myself to creating and maintaining 
        sites using React.js and TypeScript, with a strong emphasis on mobile-first development and user experience.
        </p>  
        <div>
        <i className="fa-solid fa-microchip">&nbsp;</i>
        <i className="fa-solid fa-microchip">&nbsp;</i>
        <i className="fa-solid fa-microchip">&nbsp;</i>
        </div>
        <p>
        Tailoring my approach to meet project requirements and client specifications, I find a great satisfaction in 
        improving overall UI and UX as well as continuously learning new technologies.
        </p>
        <div>
        <i className="fa-solid fa-mug-hot">&nbsp;</i>
        <i className="fa-solid fa-mug-hot">&nbsp;</i>
        <i className="fa-solid fa-mug-hot">&nbsp;</i>
        </div>
        <p>Feel free to connect with me for project inquiries, potential ideas or collaborations!</p>
    </section>
  );
};

export default About;