import "./styles/App.css";
import ImageBox from "./components/ImageBox";
import ImageInfo from "./data/imageInfo";
import LinkInfo from "./data/linkInfo";

const textColor = "#a27b5c";

export default function App() {
  return (
    <div className="container">
      <div className="intro-container">
        <h1 className="intro">Hi, I'm Evan. Let's connect!</h1>

        <div className="links-row">
          {LinkInfo.map((link, idx) => (
            <a className={"link-icon"} href={link.link} title={link.alt}>
              <i className={link.classes}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="ambigrams">
        <p className="title">
          <b>Ambigram</b>: a calligraphic design that can be viewed from
          multiple perspectives
        </p>
        <div className="images-container">
          {ImageInfo.map((image, idx) => (
            <ImageBox
              bold={image.bold}
              caption={image.caption}
              image={image.path}
              textColor={textColor}
            ></ImageBox>
          ))}
        </div>
      </div>
    </div>
  );
}
