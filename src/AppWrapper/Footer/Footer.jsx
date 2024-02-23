import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Link to={"/encode"}>
        <span>Encode</span>
      </Link>
    </div>
  );
}
