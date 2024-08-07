import { Outlet } from "react-router-dom";

import LibraryNav from "../../components/LibraryNav/LibraryNav";

import styles from "./Library.module.css";

function Library() {
  return (
    <div className={styles.container}>
      <LibraryNav />
      <Outlet />
    </div>
  );
}

export default Library;
