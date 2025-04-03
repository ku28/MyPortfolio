import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"

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
            <p>- Engineered a real-time booking system with REST APIs and Redux, reducing appointment scheduling time by 30%. <br />
              - Developed a symptom-based doctor search, improving efficiency by 40% helping users find relevant specialists faster. <br />
              - Optimized backend handling 20+ concurrent requests/sec with Express.js. <br />
              - Automated deployment workflow using GitHub Actions, reducing deployment time by 50% Netlify. <br />
            </p>
          </div>
          <footer> <ul className="tech-list"> <li>React</li> <li>Next.js</li> <li>Express.js</li> <li>PostgreSQL</li> <li>Prisma ORM</li> </ul> </footer>
        </div>
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            <div className="project-links">
              <a href="https://github.com/ku28/CompileX" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" /></a>
            </div>
          </header>
          <div className="body">
            <h3>Code Collab</h3>
            <p>- Designed an online compiler supporting 5+ programming languages, enabling seamless execution.<br />
              - Integrated WebSockets for real-time collaboration, reducing latency by 35% in multi-user sessions. <br />
              - Enhanced code execution with 20% faster response times and 25% fewer compilation errors via real-time detection. <br />
              - Used Docker and GitHub Actions for build, testing, and deployment, reducing deployment time by 40%.
            </p>
          </div>
          <footer> <ul className="tech-list"> <li>React</li> <li>Next.js</li> <li>Express.js</li> <li>MongoDB</li> <li>WebSockets</li> </ul> </footer>
        </div>
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            <div className="project-links">
              <a href="https://github.com/ku28/Elevatr" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" /></a>
            </div>
          </header>
          <div className="body">
            <h3>Elevatr</h3>
            <p>- An AI-powered resume builder with real-time mock interview practice for job preparation. <br />
              - Improved resume building and AI interview evaluations, boosting feedback accuracy by 30%. <br />
              - Optimized question generation speed by 40% using Gemini API for faster and more accurate content creation. <br />
              - Configured deployment workflow using GitHub Actions and Vercel, reducing deployment time by 40%.
            </p>
          </div>
          <footer> <ul className="tech-list"> <li>React</li> <li>Next.js</li> <li>Gemini API</li> <li>Clerk</li> <li>NeonDB(PostgreSQL)</li> <li>Drizzle ORM</li> </ul> </footer>
        </div>
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
            <div className="project-links">
              <a href="https://github.com/ku28/Apparel-Arcade" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" /></a>
            </div>
          </header>
          <div className="body">
            <h3>Apparel Arcade</h3>
            <p>- An ecommerce platform for seamless shopping <br />
              - Enhanced product recommendations and search accuracy, boosting customer satisfaction by 30%. <br />
              - Optimized checkout process speed by 40% using advanced algorithms for faster transactions. <br />
              - Configured deployment workflow using GitHub Actions and Netlify, reducing deployment time by 40%. <br />
              - Integrated real-time inventory updates, ensuring accurate stock availability for customers.
            </p>
          </div>
          <footer> <ul className="tech-list"> <li>React</li> <li>Express.js</li> <li>MongoDB</li> </ul> </footer>
        </div>
      </div>
    </Container>
  );
}
