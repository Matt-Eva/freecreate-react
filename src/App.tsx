import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  useEffect(() => {
    const testFetch = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      console.log(data);
    };
    testFetch();
  }, []);
  return (
    <div className={`h-screen ${styles.appGrid} bg-gray-50`}>
      <Header />
      <div className={`${styles.sidebarGrid}`}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
