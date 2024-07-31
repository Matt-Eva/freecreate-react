import App from "./App";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Read from "./pages/Read/Read";
import Write from "./pages/Write/Write";
import Published from "./pages/Published";
import Drafts from "./pages/Drafts";
import NewWriting from "./pages/NewWriting/NewWriting";
import Edit from "./pages/Edit";
import NewChapter from "./pages/NewChapter";
import EditChapter from "./pages/EditChapter";
import Profile from "./pages/Profile/Profile";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import LibWriting from "./pages/LibWriting/LibWriting";
import Bookshelves from "./pages/Bookshelves/Bookshelves";
import LibWriters from "./pages/LibWriters/LibWriters";
import ReadingList from "./pages/ReadingList/ReadingList";
import Likes from "./pages/Likes/Likes";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
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
        element: <NewWriting />,
      },
      {
        path: "/edit-writing",
        element: <Edit />,
      },
      {
        path: "/new-chapter",
        element: <NewChapter />,
      },
      {
        path: "/edit-chapter",
        element: <EditChapter />,
      },
    ],
  },
];

export default routes;
