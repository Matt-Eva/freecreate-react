import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  useEffect(() => {
    const testFetch = async () => {
      const res = await fetch("/api/master-user");
      const data = await res.json();
      console.log(data);
    };
    // testFetch();
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
