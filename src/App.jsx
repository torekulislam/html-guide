import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";

import { Outlet } from "react-router";
import SideBar from "./components/SideBar";
function App() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // console.log(searchRef);

  return (
    <>
      <div className="min-h-screen bg-[#eaf0f5] w-full ">
        <Header />

        <section className="flex gap-4 items-start min-h-screen p-4">
          <SideBar className="w-64" />
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 w-full bg-[#f7faff] rounded-2xl p-4  mt-20 mb-4 shadow-lg overflow-auto"
          >
            <Outlet />
          </motion.section>
        </section>

        {/* <CodeExample /> */}
        <footer className="group  mx-4 my-2 bg-white rounded-2xl p-8 shadow-[0px_-4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_-6px_20px_rgba(10,116,255,0.15)] transition flex flex-col items-center justify-center text-center  hover:-translate-y-1 duration-300">
          <p>© {new Date().getFullYear()} Torekul Islam</p>
          <div className="mt-5 h-[3px] w-0 bg-linear-to-r from-[#0A74FF] to-[#38BDF8] rounded-full group-hover:w-34 transition-all duration-500"></div>
        </footer>
      </div>
    </>
  );
}

export default App;
