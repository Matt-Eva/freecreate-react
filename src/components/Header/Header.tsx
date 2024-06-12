import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className="flex items-start pt-3">
      <h1 className="ml-1 mr-2 text-xl sm:mr-4">
        <Link to="/">FreeCreate</Link>
      </h1>
      <nav className={`${styles.navGrid} w-full mt-0.5 pt-px content-end`}>
        <Link to="/" className="hidden sm:block">
          browse
        </Link>
        <Link to="/about">about</Link>
        <Link to="/donate">donate</Link>
        <Link to="/profile" className="justify-self-end mr-1">
          profile
        </Link>
      </nav>
    </header>
  );
}

export default Header;
