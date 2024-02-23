import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <Link to={"/encode"} className="menu-item" onClick={this.closeMenu}>
                  <span></span>
                </Link>
        </div>
    )
}