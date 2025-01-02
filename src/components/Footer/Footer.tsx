import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://kushagrajuneja.vercel.app/" className="logo">
        <span>www.kushagra</span>
        <span>juneja.in</span>
      </a>
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
