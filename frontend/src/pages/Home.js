import React from 'react';
import './HomePage.css';

// Inline SVG for a professional illustration
const ProfessionalIllustration = () => (
  <svg viewBox="0 0 500 300" className="professional-illustration">
    {/* Modern office building */}
    <rect x="100" y="150" width="300" height="150" fill="#f5f7fa" stroke="#d1d9e6" strokeWidth="2" rx="5" />
    
    {/* Windows */}
    <rect x="120" y="170" width="50" height="40" fill="#e6e9f0" rx="3" />
    <rect x="190" y="170" width="50" height="40" fill="#e6e9f0" rx="3" />
    <rect x="260" y="170" width="50" height="40" fill="#e6e9f0" rx="3" />
    <rect x="330" y="170" width="50" height="40" fill="#e6e9f0" rx="3" />
    
    {/* Door */}
    <rect x="220" y="220" width="60" height="80" fill="#d1d9e6" rx="3" />
    
    {/* Roof */}
    <path d="M100,150 L250,80 L400,150" fill="#e6e9f0" stroke="#d1d9e6" strokeWidth="2" />
    
    {/* Graph elements */}
    <path d="M50,50 L50,250 L450,250" stroke="#6366f1" strokeWidth="2" fill="none" />
    <path d="M70,200 L120,150 L170,180 L220,120 L270,160 L320,100 L370,140" 
          stroke="#6366f1" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="70" cy="200" r="4" fill="#6366f1" />
    <circle cx="120" cy="150" r="4" fill="#6366f1" />
    <circle cx="170" cy="180" r="4" fill="#6366f1" />
    <circle cx="220" cy="120" r="4" fill="#6366f1" />
    <circle cx="270" cy="160" r="4" fill="#6366f1" />
    <circle cx="320" cy="100" r="4" fill="#6366f1" />
    <circle cx="370" cy="140" r="4" fill="#6366f1" />
  </svg>
);

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">ENTERPRISE SOLUTION</div>
          <h1 className="hero-title">
            <span className="gradient-text">EmployeeManager</span> Pro
          </h1>
          <p className="hero-subtitle">
            Streamline your workforce management with our enterprise-grade solution.
            Optimize HR processes with intuitive tools and real-time analytics.
          </p>
          <div className="hero-cta">
            <button className="primary-cta">Request Demo</button>
            <button className="secondary-cta">
              <span>Explore Features</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="trusted-by">
            <span>Trusted by industry leaders:</span>
            <div className="trusted-logos">
              <span>TechCorp</span>
              <span>•</span>
              <span>GlobalSoft</span>
              <span>•</span>
              <span>InnovateX</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <ProfessionalIllustration />
        </div>
      </header>

      {/* Value Proposition */}
      <section className="value-section">
        <div className="section-header">
          <h2>Transform Your HR Operations</h2>
          <p>Comprehensive tools designed for modern enterprises</p>
        </div>
        
        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Time Savings</h3>
            <p>Reduce administrative workload by up to 65% with automated processes</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3>Data Security</h3>
            <p>Enterprise-grade encryption and compliance with global data protection standards</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>Real-time Insights</h3>
            <p>Interactive dashboards with customizable KPIs and reporting</p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <div className="tech-content">
          <h2>Powered by Cutting-Edge Technology</h2>
          <p>
            EmployeeManager Pro leverages the MERN stack to deliver exceptional performance,
            scalability, and reliability for organizations of all sizes.
          </p>
          <div className="tech-stack">
            <div className="tech-item">
              <div className="tech-logo">M</div>
              <span>MongoDB</span>
            </div>
            <div className="tech-item">
              <div className="tech-logo">E</div>
              <span>Express</span>
            </div>
            <div className="tech-item">
              <div className="tech-logo">R</div>
              <span>React</span>
            </div>
            <div className="tech-item">
              <div className="tech-logo">N</div>
              <span>Node.js</span>
            </div>
          </div>
        </div>
        <div className="tech-visual">
          <div className="code-snippet">
            <div className="code-header">
              <div className="code-dots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              <span>employee.controller.js</span>
            </div>
            <pre className="code-content">
              {`// Secure employee creation
async function createEmployee(req, res) {
  try {
    const { name, position, department } = req.body;
    
    // Data validation
    if (!name || !position) {
      return res.status(400).json({ 
        error: 'Name and position are required' 
      });
    }

    // Create new employee
    const employee = new Employee({
      name,
      position,
      department,
      createdBy: req.user.id
    });

    await employee.save();
    
    // Audit log
    await new AuditLog({
      action: 'CREATE_EMPLOYEE',
      performedBy: req.user.id,
      targetId: employee._id
    }).save();

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ 
      error: 'Server error' 
    });
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="professional-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EmployeeManager Pro</h3>
            <p>Enterprise Workforce Solutions</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Integrations</a>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Support</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Meessa Ajay. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">GDPR Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;