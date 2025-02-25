/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
<h2>Skills</h2>
<h3>Front end:</h3>
<ul className='skillgrid'>
  <li className="liskills">HTML</li>
  <li className="liskills">Css</li>
  <li className="liskills goldenskill">JavaScript</li>
  <li className="liskills">TypeScript</li>
  <li className="liskills">React.js</li>
  <li className="liskills">SPA</li>
  <li className="liskills goldenskill">CMS</li>
</ul>
<h3>Back end:</h3>
<ul className='skillgrid'>
  <li className="liskills goldenskill">C#</li>
  <li className="liskills goldenskill">.Net</li>
  <li className="liskills">ASP.NET</li>
  <li className="liskills">APIs</li>
  <li className="liskills">MinimalAPIs</li>
  <li className="liskills goldenskill">MSSQL</li>
  <li className="liskills">RDBMS</li>
  <li className="liskills">SQL</li>
  <li className="liskills">CI/CD</li>
  <li className="liskills">Node.js</li>
  <li className="liskills">WebForms</li>
  <li className="liskills">Dapper</li>
  <li className="liskills">Entity Framework</li>
  <li className="liskills">Git</li>
  <li className="liskills">LINQ</li>
  <li className="liskills">MVC</li>
  <li className="liskills">AzureDevOps</li>
  <li className="liskills">OOP</li>
  <li className="liskills goldenskill">Python</li>
  <li className="liskills goldenskill">Docker</li>
  <li className="liskills goldenskill">Cloud Development</li>
  <li className="liskills goldenskill">Amazon Web Services</li>
</ul>
<h3>Other skills:</h3>
<ul className='skillgrid'>
  <li className="liskills goldenskill">Test automation</li>
  <li className="liskills">TDD</li>
  <li className="liskills goldenskill">Cyber security</li>
  <li className="liskills">xUnit</li>
  <li className="liskills">nUnit</li>
  <li className="liskills">MsTest</li>
  <li className="liskills goldenskill">Agile</li>
  <li className="liskills">Scrum</li>
  <li className="liskills">English</li>
  <li className="liskills">Spanish</li>
  <li className="liskills">Swedish</li>
</ul>
    </section>
  );
};

export default Skills;