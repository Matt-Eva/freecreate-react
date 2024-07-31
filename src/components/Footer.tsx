import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <Link to="/">browse</Link>
        <Link to="/subscriptions">subscriptions</Link>
        <Link to="/read">read</Link>
        <Link to="/library">library</Link>
        <Link to="/write">write</Link>
      </nav>
    </footer>
  );
}

export default Footer;
