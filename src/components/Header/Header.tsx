import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">FreeCreate</Link>
      </h1>
      <nav className={styles.navGrid}>
        <Link to="/">browse</Link>
        <Link to="/about">about</Link>
        <Link to="/donate">donate</Link>
        <Link to="/profile">profile</Link>
      </nav>
    </header>
  );
}

export default Header;
