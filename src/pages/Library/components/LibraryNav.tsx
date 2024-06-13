import { Link } from "react-router-dom";

function LibraryNav() {
  return (
    <nav className="grid grid-flow-col sm:hidden bg-gray-50 h-9 items-center">
      <Link to="/library" className="w-full text-center border-r">
        writing
      </Link>

      <Link to="/library/bookshelves" className="w-full text-center border-r">
        bookshelves
      </Link>

      <Link to="/library/writers" className="w-full text-center border-r">
        writers
      </Link>

      <Link to="/library/reading-list" className="w-full text-center border-r">
        to read
      </Link>

      <Link to="/library/likes" className="w-full text-center">
        likes
      </Link>
    </nav>
  );
}

export default LibraryNav;
