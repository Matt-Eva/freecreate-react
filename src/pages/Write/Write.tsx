import { Outlet, Link } from "react-router-dom";

import styles from "./Write.module.css";

function Write() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/write">Drafts</Link>
        <Link to="/write/published">Published</Link>
        <Link to="/new-writing">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Write;
