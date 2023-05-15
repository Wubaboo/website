import { Link } from "react-router-dom";
import "../styles/NavCard.css";
export default function NavCard({ title, text, link, path, left = 0, image }) {
  const contents = (
    <div className="nav-card-contents">
      <div
        className="nav-card-header"
        style={{ justifyContent: !left ? "flex-start" : "flex-end" }}
      >
        {!left ? image : null}
        <p className="nav-card-title">{title}</p>
        {left ? image : null}
      </div>
      <p>{text}</p>
    </div>
  );

  function renderPath() {
    if (path) {
      return (
        <Link className="nav-card" to={path}>
          {contents}
        </Link>
      );
    }
    if (link) {
      return (
        <a className="nav-card" href={link}>
          {contents}
        </a>
      );
    }
  }

  return renderPath();
}
