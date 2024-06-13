import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="sm:hidden bg-gray-50">
      <nav className="grid grid-flow-col items-center h-full">
        <Link to="/" className="text-center w-full border-r ">
          browse
        </Link>
        <Link to="/subscriptions" className="text-center w-full border-r ">
          subscriptions
        </Link>
        <Link to="/read" className="text-center w-full border-r ">
          read
        </Link>
        <Link to="/library" className="text-center w-full border-r ">
          library
        </Link>
        <Link to="/write" className="text-center w-full ">
          write
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
