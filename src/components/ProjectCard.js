import "../styles/ProjectCard.css";

export default function ProjectCard({
  description = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Lorem ipsum may be used as a placeholder before final copy is available.",
  image = "https://picsum.photos/200",
  link = null,
  pillItems = ["AWS", "Python", "JavaScript"],
  title = "Filler Title",
}) {
  return (
    <a className="card-container" href={link}>
      <img className="card-image" src={image} />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <p>{description}</p>
        <div className="pill-row">
          {pillItems.map((item) => (
            <div className="card-pill">{item}</div>
          ))}
        </div>
      </div>
    </a>
  );
}
