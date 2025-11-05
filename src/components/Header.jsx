import React, { useState } from "react";
import { Menu, X, Search, CodeXml } from "lucide-react";
import { Link } from "react-router-dom";
import SearchTag from "./SearchTag";
function Header() {
  const [showSearchManue, setShowSearchManue] = useState(false);
  return (
    <header>
      {showSearchManue && <SearchTag show={setShowSearchManue} />}
      <div className=" max-w-[98%] sm:max-w-[98%] mx-auto h-20 bg-white rounded-2xl p-8 shadow-[0_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(10,116,255,0.15)] transition flex z-20 items-center justify-between text-center  hover:translate-y-1 fixed inset-0  mb-3 duration-300 overflow-hidden gap4">
        <Link to={"/"}>
          <h2 className="text-3xl font-bold font-[Yatra_One] text-[#0250b6]">
            {"<html/>"}
          </h2>
        </Link>
        <div className="">
          <button
            aria-label="Search"
            type="button"
            onClick={() => setShowSearchManue((prv) => !prv)}
            className="text-blue-500 hover:text-blue-600 transition-colors md:mr-2 flex items-center gap-1 text-sm w-fit max-w-md bg-gray-50 border border-blue-200 rounded-full hover:shadow p-2 md:px-4 md:py-2 focus-within:ring-2 focus-within:ring-blue-400 "
          >
            <Search className="w-4 h-4" />
            Search tag
          </button>

          {/* <input
            onChange={""}
            type="text"
            placeholder="Search tag..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base hidden sm:block"
          /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
