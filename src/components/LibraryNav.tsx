import { Link } from "react-router-dom";

function LibraryNav() {
  return (
    <nav>
      <Link to="/library">writing</Link>

      <Link to="/library/bookshelves">bookshelves</Link>

      <Link to="/library/writers">writers</Link>

      <Link to="/library/reading-list">to read</Link>

      <Link to="/library/likes">likes</Link>
    </nav>
  );
}

export default LibraryNav;
