import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <p>ABOUT ME</p>
      <div className="title">
        <h1>Building Meaningful</h1>
        <h1>Digital Experiences</h1>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="about-container">
        <div className="info-about">
          <div className="about-info">
            <p>
              I'm a software developer passionate about building responsive and scalable digital products that solve practical user problems.
              <br />I enjoy turning ideas into production-ready applications with clean architecture, strong backend logic, and intuitive interfaces.
            </p>
            <p>
              My interests include full-stack development, AI-powered applications, and competitive programming with a focus on continuous learning.
            </p>
          </div>
          <h2>What Drives Me</h2>
          <div className="card">
            <div className="c1">
              <h3><i className="fa-solid fa-code"></i> Core Skills</h3>
              <p>Java, C++, Python, C, JavaScript, PHP, SQL, React.js, Node.js, Express, Tailwind CSS</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-graduation-cap"></i> Education</h3>
              <p>B.Tech in Computer Science and Engineering, Lovely Professional University</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-folder-open"></i> Projects</h3>
              <p>Built and deployed full-stack and AI-based projects including salon booking and healthcare triage platforms</p>
            </div>
          </div>
        </div>
        <div className="imghov">
          <img src="/images/About.jpg" alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;
