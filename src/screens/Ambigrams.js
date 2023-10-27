import ImageBox from "../components/ImageBox";
import ImageInfo from "../data/imageInfo";

import "../styles/ambigrams.css";
import BackArrow from "../components/backArrow";
const textColor = "white";
export default function Ambigrams() {
  return (
    <div className="ambigrams">
      <BackArrow></BackArrow>
      <h1 className="ambigrams-title ambigrams-text">Ambigrams</h1>
      <br />
      <p className="ambigrams-description ambigrams-text">
        <b>Ambigram</b>: a calligraphic design that can be viewed from multiple
        perspectives
      </p>
      <div className="ambigrams-images-container">
        {ImageInfo.map((image, idx) => (
          <ImageBox
            key={idx}
            bold={image.bold}
            caption={image.caption}
            image={image.path}
            textColor={textColor}
          ></ImageBox>
        ))}
      </div>
    </div>
  );
}
