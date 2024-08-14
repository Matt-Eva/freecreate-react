import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store";
import { populateUser, unauthorizedUser } from "./state/userSlice";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";

function App() {
  const userState = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const testFetch = async () => {
      try {
        const res = await fetch("/api/master-user");
        if (res.ok) {
          const data = await res.json();
          dispatch(populateUser(data));
        } else {
          const err = res.text();
          console.error(err);
          dispatch(unauthorizedUser());
        }
      } catch (e) {
        console.error(e);
        dispatch(unauthorizedUser());
      }
    };
    if (!userState.isFetched) {
      testFetch();
    }
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.sidebarGrid}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
