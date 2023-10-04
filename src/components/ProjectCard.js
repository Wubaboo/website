import "../styles/ProjectCard.css";

export default function ProjectCard({
  image = "https://picsum.photos/200",
  title = "Filler Title",
  description,
  technologies,
}) {
  return (
    <div className="card-container">
      <img className="card-image" src={image} />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. Lorem ipsum may
          be used as a placeholder before final copy is available.
        </p>
        <div className="pill-row">
          <div className="card-pill">AWS</div>
        </div>
      </div>
    </div>
  );
}
