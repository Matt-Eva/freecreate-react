import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link to="/read">read</Link>
          </li>
          <li>
            <Link to="/write">write</Link>
          </li>
          <li>
            <Link to="/subscriptions">subscriptions</Link>
          </li>
          <li>
            <Link to="/library">library</Link>
            <ul>
              <li>
                <Link to="/library">writing</Link>
              </li>
              <li>
                <Link to="/library/bookshelves">bookshelves</Link>
              </li>
              <li>
                <Link to="/library/writers">writers</Link>
              </li>
              <li>
                <Link to="/library/reading-list">reading list</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/library/likes">likes</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
