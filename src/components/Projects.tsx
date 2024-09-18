import React from 'react';

const Projects: React.FC = () => {
return (
    <section id="projects" className="section">
    <h2>Projects</h2>
    <ul className='projectgrid'>
<li className="li-projects">
    <a href="https://crumbsbyemelie.netlify.app" target="_blank" rel="noopener noreferrer">🎂 Baking website <i className="fa-solid fa-up-right-from-square">
    </i>
    </a>
    <p>Crumbs by Emelie: A website for a local baker.<br/>Includes a gallery with images.</p>
    <div className="tags">
        Tags:
        <span>React,</span>
        <span>TypeScript,</span>
        <span>Mobile,</span>
        <span>Web development</span>
    </div>
</li>
<li className="li-projects">
    <a href="https://spanska.netlify.app" target="_blank" rel="noopener noreferrer">🦙 Spanish Learning Game <i className="fa-solid fa-up-right-from-square">
    </i>
    </a>
    <p>Hangman game: A mobile website to study Spanish from Swedish.</p>
    <div className="tags">
    Tags:
        <span>React,</span>
        <span>TypeScript,</span>
        <span>Mobile,</span>
        <span>Educational,</span>
        <span>Web development</span>
    </div>
</li>
<li className="li-projects">
    <a href="https://danieldarwiche.netlify.app" target="_blank" rel="noopener noreferrer">💻 Developer Portfolio <i className="fa-solid fa-up-right-from-square">
    </i>
    </a>
    <p>Software developer portfolio: A website used as a developer portfolio.</p>
    <div className="tags">
    Tags:
        <span>React,</span>
        <span>TypeScript,</span>
        <span>Mobile,</span>
        <span>Portfolio,</span>
        <span>Web development</span>
    </div>
</li>
<li className="li-projects">
    <h4 style={{textAlign: 'center', textDecoration: 'underline'}} title='Work in progress'>💪🏼 Fitness Trainer Website </h4>
    {/* <a href="#">💪🏼 Fitness Trainer Website <i className="fa-solid fa-up-right-from-square"></i></a> */}

    <p style={{textAlign: 'center', textDecoration: 'underline'}}>🔨 WORK IN PROGRESS 🔨</p>
    {/* <p>Roos roof top training: A website for a fitness trainer.</p> */}
    <div className="tags">
    Tags:
        <span>React,</span>
        <span>TypeScript,</span>
        <span>Mobile,</span>
        <span>Fitness,</span>
        <span>Web development</span>
    </div>
</li>
    </ul>
    </section>
);
};

export default Projects;