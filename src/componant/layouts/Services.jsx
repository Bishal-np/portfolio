import React from 'react';
import { FiCode, FiLayers, FiSmartphone, FiDatabase, FiSearch, FiTrendingUp } from 'react-icons/fi';

function Services() {
  const services = [
    {
      icon: <FiCode className="service-icon" />,
      title: "Front-End Development",
      description: "Modern websites built with React, HTML5, CSS3, and JavaScript. Clean, efficient code with responsive design.",
      color: "#6c5ce7"
    },
    {
      icon: <FiLayers className="service-icon" />,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins. Fast, secure, and SEO-friendly CMS solutions.",
      color: "#00b894"
    },
    {
      icon: <FiSmartphone className="service-icon" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices from desktop to smartphone.",
      color: "#0984e3"
    },
   
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Modern, responsive development solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              style={{ '--accent-color': service.color }}
            >
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;