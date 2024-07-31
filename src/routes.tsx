import App from "./App";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Read from "./pages/Read/Read";
import Write from "./pages/Write/Write";
import New from "./pages/Write/pages/New";
import Edit from "./pages/Write/pages/Edit";
import Published from "./pages/Write/pages/Published";
import Drafts from "./pages/Write/pages/Drafts";
import Profile from "./pages/Profile/Profile";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import LibWriting from "./pages/Library/pages/LibWriting/LibWriting";
import Bookshelves from "./pages/Library/pages/Bookshelves/Bookshelves";
import LibWriters from "./pages/Library/pages/LibWriters/LibWriters";
import ReadingList from "./pages/Library/pages/ReadingList/ReadingList";
import Likes from "./pages/Library/pages/Likes/Likes";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/library",
        element: <Library />,
        children: [
          {
            path: "/library",
            element: <LibWriting />,
          },
          {
            path: "/library/bookshelves",
            element: <Bookshelves />,
          },
          {
            path: "/library/writers",
            element: <LibWriters />,
          },
          {
            path: "/library/reading-list",
            element: <ReadingList />,
          },
          {
            path: "/library/likes",
            element: <Likes />,
          },
        ],
      },
      {
        path: "/read",
        element: <Read />,
      },
      {
        path: "/write",
        element: <Write />,
        children: [
          {
            path: "/write/published",
            element: <Published />,
          },
          {
            path: "/write",
            element: <Drafts />,
          },
        ],
      },
      {
        path: "/new-writing",
        element: <New />,
      },
      {
        path: "/edit-writing",
        element: <Edit />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
    ],
  },
];

export default routes;
