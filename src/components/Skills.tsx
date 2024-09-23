import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">

<h2>Skills</h2>
<h3 style={{ color: '#00204a' }}>Front end:</h3>
<ul className='grid'>
  <li className="liskills">HTML</li>
  <li className="liskills">CSS</li>
  <li className="liskills">JavaScript</li>
  <li className="liskills">TypeScript</li>
  <li className="liskills">React</li>
  <li className="liskills">Bootstrap</li>
  <li className="liskills">Mantine</li>
  <li className="liskills">SPA</li>
</ul>
<h3 style={{ color: '#00204a' }}>Back end:</h3>
<ul className='grid'>
  <li className="liskills">C#</li>
  <li className="liskills">.NET</li>
  <li className="liskills">ASP.NET</li>
  <li className="liskills">APIs</li>
  <li className="liskills">MinimalAPIs</li>
  <li className="liskills">MSSQL</li>
  <li className="liskills">Node.js</li>
  <li className="liskills">WebForms</li>
  <li className="liskills">Dapper</li>
  <li className="liskills">Entity Framework</li>
  <li className="liskills">Git</li>
  <li className="liskills">LINQ</li>
  <li className="liskills">MVC</li>
  <li className="liskills">AzureDevOps</li>
</ul>
<h3 style={{ color: '#00204a' }}>Other skills:</h3>
<ul className='grid'>
  <li className="liskills">OOP</li>
  <li className="liskills">TDD</li>
  <li className="liskills">xUnit</li>
  <li className="liskills">nUnit</li>
  <li className="liskills">MSTest</li>
  <li className="liskills">Agile</li>
  <li className="liskills">Scrum</li>
  <li className="liskills">English</li>
  <li className="liskills">Spanish</li>
  <li className="liskills">Swedish</li>
</ul>
    </section>
  );
};

export default Skills;