import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            <div className="project-links">
              <a href="https://github.com/ku28/MediConnect" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" /></a>
            </div>
          </header>
          <div className="body">
            <h3>MediConnect</h3>
            <p>A platform for connecting patients and doctors with features like: <br /><br />
              - Secure authentication for patients and doctors. <br />
              - Search and filter doctors based on symptoms. <br />
              - Prescriptions and billing system.
            </p>
          </div>
          <footer> <ul className="tech-list"> <li>React</li> <li>Next.js</li> <li>PostgreSQL</li> </ul> </footer>
        </div>
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            <div className="project-links">
              <a href="https://github.com/ku28/MediConnect" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" /></a>
            </div>
          </header>
          <div className="body">
            <h3>MediConnect</h3>
            <p>A platform for connecting patients and doctors with features like: <br /><br />
              - Secure authentication for patients and doctors. <br />
              - Search and filter doctors based on symptoms. <br />
              - Prescriptions and billing system.
            </p>
          </div>
          <footer> <ul className="tech-list"> <li>React</li> <li>Next.js</li> <li>PostgreSQL</li> </ul> </footer>
        </div>
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            <div className="project-links">
              <a href="https://github.com/ku28/MediConnect" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" /></a>
            </div>
          </header>
          <div className="body">
            <h3>MediConnect</h3>
            <p>A platform for connecting patients and doctors with features like: <br /><br />
              - Secure authentication for patients and doctors. <br />
              - Search and filter doctors based on symptoms. <br />
              - Prescriptions and billing system.
            </p>
          </div>
          <footer> <ul className="tech-list"> <li>React</li> <li>Next.js</li> <li>PostgreSQL</li> </ul> </footer>
        </div>
      </div>
    </Container>
  );
}
