import { useState, useRef } from "react";
import "../styles/ImageBox.css";
import HiddenText from "./hiddenText";

export default function ImageBox(props) {
  // https://stackoverflow.com/questions/44604966/how-to-click-an-image-and-make-a-rotation
  const [rotate, setRotate] = useState(false);
  const [angle, setAngle] = useState(0);
  const img = useRef(null);

  function handleClick(e) {
    setRotate(true);
  }

  function rotatingDone() {
    if (rotate) {
      const newAngle = angle !== 0 ? 0 : 180;
      img.current.style["transform"] = `rotate(${newAngle}deg)`;
      setAngle(newAngle);
      setRotate(false);
    }
  }

  return (
    <figure className="image-container">
      <img
        className={[
          "image " +
            (rotate && angle
              ? "rotate2"
              : rotate
              ? "rotate1"
              : angle
              ? "jiggle2"
              : "jiggle"),
        ]}
        ref={img}
        alt={props.caption}
        src={props.image}
        onClick={(e) => handleClick(e)}
        onAnimationEnd={rotatingDone}
      />
      <figcaption>
        {props.bold ? (
          <HiddenText hiddenColor={props.textColor}>{props.bold}</HiddenText>
        ) : null}{" "}
        {props.caption}
      </figcaption>
    </figure>
  );
}
