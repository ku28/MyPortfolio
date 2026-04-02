import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Hero() {
  const codeLines = [
    { indent: 0, content: '<span class="punctuation">{</span>' },
    { indent: 1, content: '<span class="key">"name"</span><span class="punctuation">:</span> <span class="string">"Kushagra Juneja"</span><span class="punctuation">,</span>' },
    { indent: 1, content: '<span class="key">"role"</span><span class="punctuation">:</span> <span class="string">"Full-Stack Developer"</span><span class="punctuation">,</span>' },
    { indent: 1, content: '<span class="key">"focus"</span><span class="punctuation">:</span> <span class="string">"Web & Desktop Apps"</span><span class="punctuation">,</span>' },
    { indent: 1, content: '<span class="key">"stack"</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">"React"</span><span class="punctuation">,</span> <span class="string">"Next.js"</span><span class="punctuation">,</span> <span class="string">"Electron"</span><span class="punctuation">],</span>' },
    { indent: 1, content: '<span class="key">"available"</span><span class="punctuation">:</span> <span class="boolean">true</span>' },
    { indent: 0, content: '<span class="punctuation">}</span>' },
  ];

  return (
    <Container id="home">
      <div className="hero-text">
        <p className="code-comment">{'// welcome.js'}</p>
        <h1>
          <span className="greeting">Hi, I'm</span>
          <span className="name-gradient">Kushagra Juneja</span>
        </h1>
        <div className="role-wrapper">
          <span className="role-prefix">{'>'}</span>
          <h3>Full-Stack Developer</h3>
          <span className="cursor-blink">_</span>
        </div>
        <p className="tagline">
          I design and develop production-ready applications using modern 
          technologies like React, Next.js, and Electron — focusing on performance, 
          clean architecture, and real-world usability.
        </p>
        <div className="status-badge">
          <span className="status-dot" />
          <span>Available for opportunities</span>
        </div>
        <div className="button-wrapper">
          <BrowserRouter>
            <NavHashLink smooth to="#project" className="button cta-primary">
              View Projects
            </NavHashLink>
          </BrowserRouter>
          <a href="#contact" className="cta-secondary">
            Contact Me
          </a>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/kush-juneja/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/ku28/" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="hero-terminal">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="terminal-title">developer.json</span>
            <div className="terminal-dots-placeholder" />
          </div>
          <div className="terminal-body">
            {codeLines.map((line, i) => (
              <div className="code-line" key={i}>
                <span className="line-number">{i + 1}</span>
                <span 
                  className="line-content"
                  style={{ paddingLeft: `${line.indent * 2}rem` }}
                  dangerouslySetInnerHTML={{ __html: line.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
