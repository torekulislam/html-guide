import React, { useState, useEffect } from "react";
import { Menu, X, Search, CodeXml, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchTag from "./SearchTag";
import SideBar from "./SideBar";
function Header() {
  const [showSearchManue, setShowSearchManue] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    document.body.style.overflow =
      showSideBar || showSearchManue ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [showSearchManue, showSideBar]);
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }} // start hidden, left
      animate={{ opacity: 1, y: -10 }} // animate to visible
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {showSearchManue && (
        <SearchTag show={showSearchManue} setShow={setShowSearchManue} />
      )}
      {showSideBar && <SideBar isHiden={false} setShow={setShowSideBar} />}

      {showSideBar && (
        <div
          onClick={() => setShowSideBar(false)}
          className=" absolute backdrop-blur-md
        w-full h-[103vh] z-20 md:hidden  "
        ></div>
      )}

      <div className=" max-w-[96%] sm:max-w-[98%] mx-auto h-20 bg-white rounded-2xl p-5 sm:p-8 shadow-[0_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(10,116,255,0.15)] transition flex z-20 items-center justify-between text-center  hover:translate-y-1 fixed inset-0  mb-3 mt-4  duration-300 overflow-hidden gap-4">
        <Link to={"/"}>
          <h2 className="text-3xl font-bold font-[Yatra_One] text-[#0250b6]">
            {"<html/>"}
          </h2>
        </Link>
        <div className=" flex gap-2">
          <button
            aria-label="Search"
            type="button"
            onClick={() => setShowSearchManue((prv) => !prv)}
            className="text-blue-500 hover:text-blue-600 transition-colors sm:mr-2 flex items-center gap-1 text-md  bg-gray-50 border border-blue-200 rounded-full hover:shadow p-3 sm:px-4 sm:py-2 focus-within:ring-2 focus-within:ring-blue-400 "
          >
            <Search className="w-5 h-5 sm:w-4 sm:h-4" />
            <p className=" hidden sm:block">Search tag</p>
            {/*  */}
          </button>

          <button
            aria-label="Menu "
            type="button"
            onClick={() => setShowSideBar((prv) => !prv)}
            className="text-blue-500 hover:text-blue-600 transition-colors  flex items-center gap-1 text-md  p-3 bg-gray-50 border border-blue-200 rounded-full hover:shadow   focus-within:ring-blue-400 md:hidden"
          >
            {!showSideBar ? (
              <Menu className="w-5 h-5 " />
            ) : (
              <X className="w-5 h-5 " />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
