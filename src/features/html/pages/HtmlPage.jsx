import React from 'react'
import { Outlet } from "react-router";
import { motion as Motion } from "framer-motion";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
/**
 * Layout for the HTML guide section ( "/html/..." ).
 * The global shell ( header + sidebar + footer ) lives in App.jsx,
 * so this component only renders the section outlet.
 */
export const HtmlPage = () => {
  return (
      <div className="min-h-screen bg-[#eaf0f5] w-full relative ">
      <Header />

      <div className="h-1 w-full"></div>
      <section className="flex gap-4 items-stretch py-4 p-1 sm:p-4 ">
        <SideBar className="w-64" setShow={() => false} />
        <div className="">
          <Motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "backInOut" }}
          className="flex flex-col gap-4 w-full min-h-[calc(100vh-87px)] bg-[#f2f7ff] rounded-2xl p-4  mt-20 mb-4 shadow-lg overflow-y-auto hide-scrollbar-x"
        >
          <Outlet />
     
          </Motion.main>
                     <footer className="group    bg-white rounded-2xl p-8 shadow-[0px_-4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_-6px_20px_rgba(10,116,255,0.15)] transition flex flex-col items-center justify-center text-center  hover:-translate-y-1 duration-300">
        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/torekulislam"
            target="_blank"
            rel="noreferrer"
          >
            Torekul Islam
          </a>
        </p>
        <div className="mt-2 h-[3px] w-34 sm:w-0 bg-linear-to-r from-[#0A74FF] to-[#38BDF8] rounded-full group-hover:w-34 transition-all duration-500"></div>
      </footer>
        </div>
        
      </section>
      
    </div>
  );
}
