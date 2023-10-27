import "../styles/Home.css";
import icons from "../data/icons";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const introText =
  "I'm a Software Engineer and a graduate of the University of Waterloo in Computational Math. I find joy in the art of continuous learning, self-growth, and the thrill of solving complex problems. For me, there's nothing quite like the deep sense of ownership and satisfaction that accompanies the process of crafting software.";
export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="intro-container">
          <div className="main-title">Hey, I'm Evan.</div>
          <p className="intro-text">{introText}</p>
          <div className="button-row">
            <div className="icons">
              {icons.map((item, i) => (
                <a
                  key={i}
                  className="link-icon"
                  href={item.link}
                  title={item.alt}
                >
                  <i className={`circle-icon ${item.classes}`} />
                </a>
              ))}
            </div>
            <a
              className="resume-button"
              href={process.env.PUBLIC_URL + "/assets/ResumeEvanPai.pdf"}
              title="Resume"
            >
              View Full Resume
            </a>
          </div>
        </div>
        <p className="projects-header">FEATURED PERSONAL PROJECTS:</p>
        <div className="projects-container">
          {projects.map((item) => (
            <ProjectCard
              pillItems={item.technologies}
              title={item.title}
              description={item.description}
              link={item.link}
              image={item.image}
              styles={item.style}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
}
