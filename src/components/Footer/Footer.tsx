import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div className="footer-brand">
        <a href="https://kushagrajuneja.dev/" className="logo">
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-name">KJ</span>
          <span className="logo-bracket">{' />'}</span>
        </a>
        <p className="footer-tagline">Designed & Built by Kushagra Juneja</p>
      </div>
      <div className="footer-tech">
        <span className="tech-badge">
          Built with <strong>React</strong> & <strong>TypeScript</strong>
        </span>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/kush-juneja/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/ku28/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
