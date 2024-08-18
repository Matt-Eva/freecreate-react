import { useEffect, useState } from "react";

import { Outlet, Link } from "react-router-dom";

import styles from "./Write.module.css";
import Writing from "../../types/writing";

function Write() {
  const [drafts, setDrafts] = useState([]);
  const [published, setPublished] = useState([]);

  useEffect(() => {
    async function getUserWriting() {
      try {
        const res = await fetch("/api/writing/user");
        if (res.ok) {
          const data: Writing = await res.json();
          console.log(data);
        } else {
          const err = await res.text();
          console.error(err);
        }
      } catch (e) {
        console.error(e);
      }
    }
    getUserWriting();
  }, []);

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
