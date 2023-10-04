import "../styles/Home.css";
import icons from "../data/icons";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main-title">Hey, I'm Evan.</div>
      <p className="intro-container">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <div className="button-row">
        <div className="icons">
          {icons.map((item, i) => (
            <a key={i} className="link-icon" href={item.link} title={item.alt}>
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
      <ProjectCard></ProjectCard>
    </div>
  );
}
