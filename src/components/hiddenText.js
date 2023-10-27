import { useState } from "react";
import "../styles/hiddenText.css";

export default function HiddenText(props) {
  const [bgColor, setBGColor] = useState(props.hiddenColor);
  const [cursor, setCursor] = useState("pointer");

  function handleClick() {
    setBGColor(null);
    setCursor("text");
  }
  return (
    <p
      className="hidden"
      style={{ backgroundColor: bgColor, color: bgColor, cursor: cursor }}
      onClick={handleClick}
    >
      <b>{props.children}</b>
    </p>
  );
}
