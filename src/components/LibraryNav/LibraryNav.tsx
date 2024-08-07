import { Link } from "react-router-dom";

import styles from "./LibraryNav.module.css";

function LibraryNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/library">writing</Link>

      <Link to="/library/bookshelves">bookshelves</Link>

      <Link to="/library/writers">writers</Link>

      <Link to="/library/reading-list">to read</Link>

      <Link to="/library/likes">likes</Link>
    </nav>
  );
}

export default LibraryNav;
