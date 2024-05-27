import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

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
    <div className="h-screen">
      <Header />
      <div className="fixed top-10 flex w-full h-full bg-red-100 ">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
