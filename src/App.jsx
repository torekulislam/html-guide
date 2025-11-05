import "./App.css";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Info,
  Code2,
  Settings,
  Zap,
} from "lucide-react";
import { useRef } from "react";

import Header from "./components/Header";

import { Outlet } from "react-router";
function App() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // console.log(searchRef);

  return (
    <>
      <div className="min-h-screen  p-4 w-full relative">
        <Header />
        <section className=" flex gap-4 items-start">
          <section className="flex flex-col bg-[#f7faff] w-full rounded-2xl gap-4  p-2 sm:p-4  py-4 mt-20 mb-4 overflow-hidden">
            <Outlet />
          </section>
        </section>
        {/* <CodeExample /> */}
        <footer className="group w-full  bg-white rounded-2xl p-8 shadow-[0px_-4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_-6px_20px_rgba(10,116,255,0.15)] transition flex flex-col items-center justify-center text-center  hover:-translate-y-1 duration-300">
          <p>© {new Date().getFullYear()} Torekul Islam</p>
          <div className="mt-5 h-[3px] w-0 bg-linear-to-r from-[#0A74FF] to-[#38BDF8] rounded-full group-hover:w-34 transition-all duration-500"></div>
        </footer>
      </div>
    </>
  );
}

export default App;
