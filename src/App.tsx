import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-red-100 ">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
