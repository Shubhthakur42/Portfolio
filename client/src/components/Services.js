import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['Java', 'C++', 'Python', 'C', 'JavaScript', 'PHP', 'SQL']
    },
    {
      category: 'Web Technologies',
      skills: ['React.js', 'Node.js', 'Express', 'HTML', 'CSS', 'Tailwind CSS', 'phpMyAdmin']
    },
    {
      category: 'Tools & Platforms',
      skills: ['VS Code', 'IntelliJ IDEA', 'Git', 'GitHub', 'LeetCode']
    },
    {
      category: 'Core CS Fundamentals',
      skills: ['DBMS', 'Operating System', 'Object-Oriented Programming (OOP)', 'Computer Network']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-Solving', 'Team Player', 'Project Management', 'Adaptability']
    }
  ];

  return (
    <section className="services" id="services">
      <p>TECHNICAL PROFICIENCY</p>
      <div className="title">
        <h1>Skills</h1>
        <p>Languages, frameworks, tools, and core competencies</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="services-container">
        {skillsData.map((skillGroup, index) => (
          <div className="skill-group" key={index}>
            <h3>{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
