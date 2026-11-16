import "./App.css";
import { motion } from "framer-motion";
import { Outlet } from "react-router";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="min-h-screen bg-[#eaf0f5] w-full relative ">
      {/* <Header /> */}

  
          <Outlet />
       
      

      <footer className="group  mx-4  bg-white rounded-2xl p-8 shadow-[0px_-4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_-6px_20px_rgba(10,116,255,0.15)] transition flex flex-col items-center justify-center text-center  hover:-translate-y-1 duration-300">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://github.com/torekulislam" target="_blank">
            Torekul Islam
          </a>
        </p>
        <div className="mt-2 h-[3px] w-34 sm:w-0 bg-linear-to-r from-[#0A74FF] to-[#38BDF8] rounded-full group-hover:w-34 transition-all duration-500"></div>
      </footer>
    </div>
  );
}

export default App;
