/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import amelia from '../photos/amelia2.png';
import spanska from '../photos/hang.png';
import crumb from '../photos/crumbs.png';

const Projects: React.FC = () => {
return (
    <section id="projects" className="projectsection">
    <h2>Projects</h2>
    <ul className='projectgrid'>

    <li className="li-projects">
    <a href="https://ameliavardbemanning.se/" target="_blank" rel="noopener noreferrer">Consulting firm 
    </a>
    <div className='projectphoto'>
    <img src={amelia} alt="Amelia Vårdbemanning" />
    </div>
    <p>Consulting firm: A website developed for a consulting firm.</p>
    <div className="tags">
    Tags:
        <span>Amelia Vårdbemanning,</span>
        <span>CMS,</span>
        <span>Design,</span>
        <span>Web development</span>
    </div>
</li>
<li className="li-projects">
    <a href="https://spanska.netlify.app" target="_blank" rel="noopener noreferrer">Spanish Learning Game 
    </a>
    <div className='projectphoto'>
    <img src={spanska} alt="Hangman" />
    </div>  
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
    <a href="https://crumbsbyemelie.netlify.app" target="_blank" rel="noopener noreferrer">Baking website  
    </a>
    <div className='projectphoto'>
    <img src={crumb} alt="Crumbs" />
    </div>  
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
    <a href="#" onClick={(e) => e.preventDefault()}>Art Gallery</a>
    {/* <div className='projectphoto'></div> */}
    <div className="image-wrapper">
  <div className="placeholder-image"></div>
</div>
    <p style={{textAlign: 'center', fontWeight: 'bold' }}>🔨Work in progress.🔨</p>
    {/* <div className="tags">
    Tags:
        <span>React,</span>
        <span>Mobile,</span>
        <span>Web development</span>
    </div> */}
</li>

    </ul>
    </section>
);
};

export default Projects;