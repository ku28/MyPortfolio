import { Container } from './styles';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import erpMockup from '../../assets/erp-mockup.png';
import githubIcon from '../../assets/github.svg';
import externalLink from '../../assets/external-link.svg';

export function FeaturedProject() {
  const features = [
    'Built a desktop ERP application using Electron',
    'Implemented JWT authentication and role-based access using Supabase',
    'Designed modular ERP workflows for business operations',
    'Integrated Windows auto-update system with NSIS',
    'Built real-time dashboards with analytics & reporting',
  ];

  const techStack = [
    'Electron',
    'React',
    'Node.js',
    'Supabase',
    'PostgreSQL',
    'NSIS',
  ];

  return (
    <SectionWrapper>
      <Container id="featured-project">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">{'// featured_project'}</span>
        </div>

        <div className="featured-card">
          <div className="featured-content">
            <h2 className="featured-title">
              ERP Flow Studios
            </h2>
            <p className="featured-description">
              ERP Flow Studios is a production-grade desktop ERP platform built with 
              Electron and React, combining the flexibility of web technologies with 
              the reliability of native applications.
            </p>

            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-icon">▸</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="tech-badges">
              {techStack.map((tech, index) => (
                <span className="badge" key={index}>{tech}</span>
              ))}
            </div>

            <div className="cta-buttons">
              <a
                href="https://erpflowstudios.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <img src={externalLink} alt="" className="btn-icon" />
                View Project
              </a>
              <a
                href="https://github.com/ku28"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <img src={githubIcon} alt="" className="btn-icon" />
                GitHub
              </a>
            </div>
          </div>

          <div className="featured-image">
            <div className="image-glow" />
            <img src={erpMockup} alt="ERP Flow Studios Dashboard" />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
