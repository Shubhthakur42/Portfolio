import React from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Master Generative AI & Generative AI Tools (ChatGPT & more)',
      issuer: 'Certification Program',
      date: 'Aug 2025',
      icon: 'fa-robot',
      credentialUrl: 'https://www.udemy.com/certificate/UC-10630909-cde6-4716-b86f-33b1c37ecaae/',
      imageUrl: '/images/first.png'
    },
    {
      id: 2,
      title: 'Introduction to Hardware and Operating Systems',
      issuer: 'Coursera',
      date: 'Dec 2024',
      icon: 'fa-microchip',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4N9QZ0HMKOM4',
      imageUrl: '/images/second.png'
    },
    {
      id: 3,
      title: 'Data Structures and Algorithm',
      issuer: 'Iamneo Platform',
      date: 'Aug 2024',
      icon: 'fa-sitemap',
      credentialUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2Bb3OeGvQov6L6W6Ll1rIRS2S9R1EmaxKk%3D',
      imageUrl: '/images/third.png'
    },
    {
      id: 4,
      title: 'Object Oriented Programming',
      issuer: 'Iamneo Platform',
      date: 'Apr 2024',
      icon: 'fa-cubes',
      credentialUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BbIxH6rMDMqKAhCZpPO1ydqsPVmv9JiP0%3D',
      imageUrl: '/images/fourth.png'
    },
    {
      id: 5,
      title: 'Java Programming',
      issuer: 'Iamneo Platform',
      date: 'Dec 2023',
      icon: 'fa-coffee',
      credentialUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BbIxH6rMDMqKAhCZpPO1ydqsPVmv9JiP0%3D',
      imageUrl: '/images/fifth.png'
    }
  ];

    const handleCertificateClick = (url) => {
      if (url !== '#') {
        window.open(url, '_blank');
      }
    };

  return (
    <section className="certificates" id="certificates">
      <p>ACHIEVEMENTS</p>
      <div className="title">
        <h1>Certifications & Training</h1>
        <p>Professional certificates and training programs</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="certificates-container">
        {certificates.map((cert) => (
            <div 
              className="certificate-card" 
              key={cert.id}
              onClick={() => handleCertificateClick(cert.credentialUrl)}
              style={{ cursor: cert.credentialUrl !== '#' ? 'pointer' : 'default' }}
            >
              <div className="cert-image-container">
                <img
                  src={cert.imageUrl}
                  alt={`${cert.title} certificate`}
                  className="cert-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.classList.add('no-image');
                  }}
                />
                <div className="cert-icon">
                  <i className={`fa-solid ${cert.icon}`}></i>
                </div>
              </div>
              <div className="cert-details">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">
                <i className="fa-regular fa-calendar"></i> {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
