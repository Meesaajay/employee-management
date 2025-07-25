import React, { useState, useEffect } from 'react';

const About = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeTab, setActiveTab] = useState('features');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimated(true);
  }, []);

  const tabContent = {
    features: (
      <ul className="feature-list">
        {['Employee Database', 'Secure Auth', 'Real-time Analytics', 'Role Management'].map((item, i) => (
          <li
            key={i}
            className={`feature-item ${hoveredItem === i ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredItem(i)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              transform: hoveredItem === i ? 'translateX(5px)' : 'translateX(0)',
              transition: 'all 0.3s ease'
            }}
          >
            <svg className="feature-icon" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    ),
    tech: (
      <div className="tech-grid">
        {[
          { name: 'React', color: '#61DAFB' },
          { name: 'Node.js', color: '#68A063' },
          { name: 'MongoDB', color: '#47A248' },
          { name: 'Express', color: '#000000' }
        ].map((tech, i) => (
          <div
            key={i}
            className="tech-card"
            style={{ 
              '--tech-color': tech.color,
              transform: hoveredItem === `tech-${i}` ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setHoveredItem(`tech-${i}`)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="tech-logo"></div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div 
      className="about-container"
      style={{
        opacity: animated ? 1 : 0,
        transition: 'opacity 0.5s ease'
      }}
    >
      <style jsx>{`
        .about-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 2rem;
          font-family: 'Inter', sans-serif;
          color: #1e293b;
        }
        
        .header {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: #0f172a;
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInSlideUp 0.6s ease-out forwards;
        }
        
        .header:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #4f46e5, #9333ea);
          border-radius: 2px;
        }
        
        .card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInSlideUp 0.6s ease-out 0.2s forwards;
        }
        
        .card:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(79, 70, 229, 0.1);
        }
        
        .intro-text {
          line-height: 1.7;
          font-size: 1.1rem;
          margin-bottom: 0;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 1.5rem;
        }
        
        .tab {
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          position: relative;
          font-weight: 500;
          color: #64748b;
          transition: all 0.3s ease;
        }
        
        .tab.active {
          color: #4f46e5;
          font-weight: 600;
        }
        
        .tab.active:after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #4f46e5;
        }
        
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f1f5f9;
          transition: all 0.3s ease;
        }
        
        .feature-item.hovered {
          color: #4f46e5;
        }
        
        .feature-icon {
          width: 20px;
          height: 20px;
          margin-right: 12px;
          fill: currentColor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .feature-item.hovered .feature-icon {
          opacity: 1;
        }
        
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
        }
        
        .tech-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem;
          border-radius: 8px;
          background: #f8fafc;
          cursor: default;
        }
        
        .tech-logo {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--tech-color);
          margin-bottom: 0.75rem;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .tech-card:hover .tech-logo {
          transform: scale(1.1);
          opacity: 1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <h1 className="header">
        About EmployeeManager Pro
      </h1>
      
      <div className="card">
        <p className="intro-text">
          A modern workforce management platform built with cutting-edge technology to streamline HR operations, 
          enhance employee engagement, and provide real-time business insights.
        </p>
      </div>

      <div className="card">
        <div className="tabs">
          <div 
            className={`tab ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Key Features
          </div>
          <div 
            className={`tab ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            Technology
          </div>
        </div>
        
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default About;