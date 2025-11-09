import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        <h1>Kushagra Juneja</h1>
        <h3>Full Stack Developer</h3>
        <p className="small-resume">Computer Science Graduate</p>
        <div className="button-wrapper">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
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
      </div>
      <div className="hero-image">
        <img src={Illustration} alt="Ilustração" />
      </div>
    </Container>
  )
}
