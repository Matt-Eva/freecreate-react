import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="sm:hidden">
      <nav className="flex justify-evenly items-center h-full">
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
