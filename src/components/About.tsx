import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="aboutsection">
      <h2>About</h2>
        <p>Hello! My name is Daniel Darwiche, and I’m a full stack developer.<br/> 
        I entered the tech-world by taking a few courses in programming, which led me to a decision to study further.<br/> 
        After completing a two-year software development program, I now have a solid foundation in C# and .NET, 
        along with database handling (Microsoft SQL Server) and agile methodologies.
        </p>
        <div>
        <i className= "fa-sharp fa-solid fa-bug">&nbsp;</i>
        </div>
        <p>
        My primary focus has been on back end development, but I am very interested in creating good user experiences across different stacks and using different techniques.<br/>
        To further advance my skills in web development, I have dedicated myself to creating and maintaining 
        sites using JavaScript, React.js and TypeScript, with a strong emphasis on mobile-first development and user experience.
        </p>  
        <div>
        <i className= "fa-sharp fa-solid fa-bug">&nbsp;</i>
        </div>
        <p>
        Lately I have spent a lot of time continuing my studies with courses in <br/>'Cyber security', 'Cloud development' (Amazon Web Services and Docker), and 'Test automation with Python'.
        I have also spent quite some time hired as a web developer and social media manager.
        </p>
        <div>
        <i className= "fa-sharp fa-solid fa-bug">&nbsp;</i>
        </div>
        <p>Tailoring my approach to meet project requirements and client specifications, I find a great satisfaction in 
        improving overall UI and UX as well as continuously learning new technologies. Feel free to connect with me for project inquiries, potential ideas or collaborations!</p>
    </section>
  );
};

export default About;