import { Link } from "react-router-dom";
import { useAppSelector } from "../../store";

import styles from "./Header.module.css";

function Header() {
  const userState = useAppSelector((state) => state.user.value);
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">FreeCreate</Link>
      </h1>
      <nav className={styles.navGrid}>
        {userState.authenticated ? null : (
          <Link to="/" className={styles.browse}>
            browse
          </Link>
        )}
        <Link to="/about">about</Link>
        <Link to="/donate">donate</Link>
        {userState.isFetched ? (
          userState.authenticated ? (
            <Link to="/profile">profile</Link>
          ) : (
            <Link to="/login">login</Link>
          )
        ) : (
          <div>loading...</div>
        )}
      </nav>
    </header>
  );
}

export default Header;
