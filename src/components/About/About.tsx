import { Container } from "./styles";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import image1 from "../../assets/me.jpg";

export function About() {
  const skillCategories = [
    {
      label: "Languages",
      skills: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
      ],
    },
    {
      label: "Frontend",
      skills: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", name: "Next.js" },
      ],
    },
    {
      label: "Backend & DB",
      skills: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", name: "Prisma" },
      ],
    },
    {
      label: "Tools",
      skills: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", name: "Netlify" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", name: "Jira" },
      ],
    },
  ];

  return (
    <SectionWrapper>
      <Container id="about">
        <div className="about-text">
          <div className="section-label">
            <span className="label-line" />
            <span className="label-text">{'// about_me'}</span>
          </div>
          <h2>About Me</h2>
          <div className="about-description">
            <p>
              I'm a Computer Science Engineering student with hands-on experience in 
              building full-stack and desktop applications. I enjoy solving real-world 
              problems by designing systems that are scalable, maintainable, and user-focused.
            </p>
            <p>
              My work spans across web platforms, desktop applications, and backend systems, 
              where I focus on writing clean code, implementing secure authentication, and 
              delivering smooth user experiences.
            </p>
          </div>

          <div className="skills-section">
            <h3>{'<'} Tech Stack {'/>'}</h3>
            <div className="skill-categories">
              {skillCategories.map((category, catIndex) => (
                <div className="skill-category" key={catIndex}>
                  <span className="category-label">{category.label}</span>
                  <div className="skill-items">
                    {category.skills.map((skill, skillIndex) => (
                      <div className="skill-badge" key={skillIndex}>
                        <img src={skill.src} alt={skill.name} width="24" height="24" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-frame">
            <img src={image1} alt="Kushagra Juneja" />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
