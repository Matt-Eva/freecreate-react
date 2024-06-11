import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden sm:block p-2">
      <nav>
        <ul>
          <li>
            <Link to="/read">Read</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
          <li>
            <Link to="/subscriptions">Subscriptions</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
