import React from 'react'
import { Outlet } from "react-router";
import { motion } from "framer-motion";

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
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "backInOut" }}
          className="flex flex-col gap-4 w-full min-h-[calc(100vh-87px)] bg-[#f2f7ff] rounded-2xl p-4  mt-20 mb-4 shadow-lg overflow-y-auto hide-scrollbar-x"
        >
          <Outlet />
        </motion.main>
      </section>
    </div>
  );
}
