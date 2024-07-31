import { Outlet, Link } from "react-router-dom";

function Write() {
  return (
    <div>
      <nav>
        <Link to="/write">Drafts</Link>
        <Link to="/write/published">Published</Link>
        <Link to="/new-writing">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Write;
