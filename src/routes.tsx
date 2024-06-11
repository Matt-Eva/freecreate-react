import App from "./App";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Read from "./pages/Read/Read";
import Write from "./pages/Write/Write";
import Profile from "./pages/Profile/Profile";
import Subscriptions from "./pages/Subscriptions/Subscriptions";

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
      },
      {
        path: "/read",
        element: <Read />,
      },
      {
        path: "/write",
        element: <Write />,
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
