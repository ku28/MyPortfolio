import { Container } from "./styles";
import image1 from "../../assets/me.jpg";

export function About() {
  const skills = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", alt: "Netlify" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", alt: "Prisma" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", alt: "Jira" },
  ];

  return (
    <Container id="about">
      <div className="about-text">
        <h2>About me</h2>
        <p>
          - A Computer Science Engineering Graduate with a strong foundation in web development and software engineering. <br /><br />
          - Passionate about crafting user-friendly applications and exploring innovative technologies in the software domain. <br /><br />
          - Skilled in modern web technologies like Next.js, React.js, PostgreSQL, and JWT authentication. <br /><br />
          - Experienced in project management using Jira, focusing on effective collaboration and agile methodologies. <br /><br />
          - Active participant in hackathons and seminars, constantly learning and applying new trends in technology.
        </p>
        <h3>Here are my main skills:</h3>
        <div className="hard-skills">
          {skills.map((skill, index) => (
            <div className="hability" key={index}>
              <img src={skill.src} alt={skill.alt} width="40" height="40" />
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <img src={image1} alt="Kushagra Juneja" />
      </div>
    </Container>
  );
}
