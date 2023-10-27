import { Link } from "react-router-dom";
export default function BackArrow({}) {
  return (
    <Link className="back-arrow" to={"/"}>
      <i className="fa-solid fa-arrow-left 2xl" color="white"></i>
    </Link>
  );
}
