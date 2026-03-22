import React from 'react';
import '../styles/Internships.css';

const Internships = () => {
  const experiences = [
    {
      id: 1,
      section: 'Internship',
      position: 'Web Developer Intern',
      company: 'Vanillakart',
      duration: 'Recent',
      location: 'Remote',
      description: `Developed scalable end-to-end MERN stack applications by translating client requirements into robust hybrid web solutions. Designed dynamic responsive interfaces in React.js and built secure RESTful APIs with Node.js to improve stability and performance.`,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
      icon: 'fa-code'
    },
    {
      id: 2,
      section: 'Training',
      position: 'Data Structures and Algorithms Trainee',
      company: 'Splen Technologies & Education Pvt. Ltd.',
      duration: 'Jun 2025 - Jul 2025',
      location: 'India',
      description: `Completed structured training on DSA and implemented optimized solutions for sorting, searching, linked lists, stacks, queues, trees, and graphs. Strengthened debugging and complexity analysis skills through real-world coding challenges.`,
      technologies: ['Data Structures', 'Algorithms', 'Complexity Analysis', 'Debugging', 'Problem Solving'],
      icon: 'fa-sitemap'
    }
  ];

  return (
    <section className="internships" id="internships">
      <p>PROFESSIONAL EXPERIENCE</p>
      <div className="title">
        <h1>Work & Experience</h1>
        <p>Internship and training experience from my professional journey</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="internships-container">
        {experiences.map((internship) => (
          <div className="internship-card" key={internship.id}>
            <div className="internship-header">
              <div className="company-icon">
                <i className={`fa-solid ${internship.icon}`}></i>
              </div>
              <div className="company-info">
                <p className="experience-type">{internship.section}</p>
                <h3>{internship.position}</h3>
                <p className="company-name">
                  {internship.companyLink ? (
                    <a href={internship.companyLink} target="_blank" rel="noopener noreferrer">{internship.company}</a>
                  ) : (
                    internship.company
                  )}
                </p>
              </div>
            </div>

            <div className="internship-meta">
              <span className="duration">
                <i className="fa-regular fa-calendar"></i> {internship.duration}
              </span>
              <span className="location">
                <i className="fa-solid fa-location-dot"></i> {internship.location}
              </span>
            </div>

            <p className="internship-description">{internship.description}</p>

            <div className="internship-technologies">
              <p className="tech-label">Technologies:</p>
              <div className="tech-tags">
                {internship.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
