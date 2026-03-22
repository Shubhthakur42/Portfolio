import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Navigation.css';

const Navigation = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      return;
    }

    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }

    // Remove active from all
    document.querySelectorAll('.ul-list li').forEach(li => {
      li.classList.remove('active');
    });

    // Add active only for nav menu items
    const activeLi = e.currentTarget.closest('li');
    if (activeLi) {
      activeLi.classList.add('active');
    }
  };

  return (
    <header className="header-list">
      <div className="div-list">
        <a href="#home" className="nav-brand" onClick={handleNavClick}>
          <img src="/images/app.svg" alt="Shubham logo" className="nav-brand-logo" />
          <span>Shubham Portfolio</span>
        </a>
        <ul className="ul-list">
          <li className="active">
            <i className="fa-regular fa-house"></i>
            <a href="#home" onClick={handleNavClick}>Home</a>
          </li>
          <li>
            <i className="fa-regular fa-address-card"></i>
            <a href="#about" onClick={handleNavClick}>About</a>
          </li>
          <li>
            <i className="fa-regular fa-folder-open"></i>
            <a href="#project" onClick={handleNavClick}>Projects</a>
          </li>
          <li>
            <i className="fa-solid fa-code"></i>
            <a href="#services" onClick={handleNavClick}>Skills</a>
          </li>
          <li>
            <i className="fa-regular fa-envelope"></i>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </li>
          <li className="theme-toggle" onClick={toggleTheme} title={isDark ? 'Light Mode' : 'Dark Mode'}>
            {isDark ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
