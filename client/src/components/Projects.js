import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Glow Stack Salon - Beauty & Wellness Booking Platform',
      description: 'Developed a full-stack salon booking and management platform enabling real-time appointment inquiries, service browsing, and centralized admin control. Built RESTful APIs with Express.js for booking workflows, inquiry management, and email notifications via Nodemailer. Created a responsive React frontend with Tailwind CSS, dynamic routing, and seamless Axios-based client-server integration.',
      tags: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Axios', 'Nodemailer'],
      link: '#',
      demo: '#',
      bg: '/images/salon.svg'
    },
    {
      id: 2,
      title: 'Aura Health AI - AI-Powered Healthcare Triage Assistant',
      description: 'Created a multilingual AI triage platform using the SambaNova Cloud API with Llama-3.1 to deliver instant and structured health guidance from complex user symptoms. Improved accessibility by reducing symptom reporting time with voice-first interaction. Implemented bi-directional voice features using Web Speech API for real-time Speech-to-Text and Text-to-Speech in English and Hindi.',
      tags: ['JavaScript', 'Tailwind CSS', 'SambaNova API (Llama-3.1)', 'Web Speech API', 'HTML5'],
      link: '#',
      demo: '#',
      bg: '/images/seo.svg'
    }
  ];

  return (
    <section className="projects" id="project">
      <p>MY WORK</p>
      <div className="title">
        <h1>Recent Projects</h1>
        <p>Showcase of my recent work and accomplishments</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-bg"
              style={{ backgroundImage: `url(${project.bg})` }}
            />
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.link} className="project-link" title="View Code">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={project.demo} className="project-link" title="Live Demo">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
