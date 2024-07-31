import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
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
