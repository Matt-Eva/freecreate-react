import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden sm:block bg-gray-50 rounded-lg overflow-auto">
      <nav>
        <ul>
          <li>
            <Link
              to="/read"
              className="block py-1 pl-2 w-full h-full hover:bg-gray-200 rounded-lg"
            >
              read
            </Link>
          </li>
          <li>
            <Link
              to="/write"
              className="block py-1 pl-2 w-full h-full hover:bg-gray-200 rounded-lg"
            >
              write
            </Link>
          </li>
          <li>
            <Link
              to="/subscriptions"
              className="block py-1 pl-2 w-full h-full hover:bg-gray-200 rounded-lg"
            >
              subscriptions
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="block py-1 pl-2 w-full h-full hover:bg-gray-200 rounded-lg"
            >
              library
            </Link>
            <ul>
              <li>
                <Link
                  to="/library"
                  className="block py-1 pl-6 w-full h-full hover:bg-gray-200 rounded-lg"
                >
                  writing
                </Link>
              </li>
              <li>
                <Link
                  to="/library/bookshelves"
                  className="block py-1 pl-6 w-full h-full hover:bg-gray-200 rounded-lg"
                >
                  bookshelves
                </Link>
              </li>
              <li>
                <Link
                  to="/library/writers"
                  className="block py-1 pl-6 w-full h-full hover:bg-gray-200 rounded-lg"
                >
                  writers
                </Link>
              </li>
              <li>
                <Link
                  to="/library/reading-list"
                  className="block py-1 pl-6 w-full h-full hover:bg-gray-200 rounded-lg"
                >
                  reading list
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/library/likes"
              className="block py-1 pl-2 w-full h-full hover:bg-gray-200 rounded-lg"
            >
              likes
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
