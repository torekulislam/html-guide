import React, { useEffect, useState } from "react";
import { X, Search, Hash, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { htmlTagsDataDitiles } from "../data/htmlTagsData";
import { Link } from "react-router-dom";

function SearchTag({ show, setShow }) {
  const itemRefs = React.useRef([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const el = itemRefs.current[selectedIndex];
    if (el) {
      el.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  /* Reset selection when search changes */
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleKeyDown = (e) => {
    if (!elements.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev === elements.length - 1 ? 0 : prev + 1));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev === 0 ? elements.length - 1 : prev - 1));
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const selected = elements[selectedIndex];
      if (selected) {
        setShow(false);
        window.location.href = `/allTag/${selected.name}`;
      }
    }
    if (e.key === "Escape") setShow(false);
  };

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [show]);

  const elements = htmlTagsDataDitiles.filter((item) =>
    item?.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  if (!show) return null; //  hide completely when closed

  return (
    <div className="h-screen w-full relative  z-999 ">
      {/* Backdrop */}
      <div
        onClick={() => setShow(false)}
        className="h-[110vh] w-full bg-[#062a5f38] backdrop-blur-[3px]"
      ></div>

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: -400, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed inset-0 flex items-start justify-center pt-20 pointer-events-none"
      >
        <div className="w-[90%] max-w-[600px] bg-white shadow-2xl rounded-2xl pointer-events-auto">
          {/* Search Input */}
          <div className="w-full flex items-center border-gray-300 border-b px-5 py-4 gap-3">
            <Search className="w-5 h-5 text-blue-500 shrink-0" />
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              onKeyDown={handleKeyDown}
              placeholder="Search tag..."
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
            />
            <button
              onClick={() => setShow(false)}
              aria-label="Close"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results */}
          <div className="w-full min-h-[200px] max-h-[400px] overflow-y-auto p-6">
            {searchQuery.trim() === "" ? (
              <div className="text-gray-400 text-center py-12">
                No recent searches
              </div>
            ) : elements.length > 0 ? (
              <div className="space-y-2">
                {/* {elements.map((item, index) => (
                  <Link
                    key={index}
                    to={`/allTag/${item?.name}`}
                    onClick={() => setShow(false)}
                    className="group p-3 hover:bg-sky-500 rounded-lg cursor-pointer transition flex items-center gap-4"
                  >
                    <div className="border border-[#d4cfcf93] p-1 rounded group-hover:shadow-sky-400">
                      <Hash className="text-gray-500 group-hover:text-gray-100 h-5 w-5 stroke-1" />
                    </div>
                    <div className="flex-1 text-gray-400 font-semibold group-hover:text-gray-200">
                      {item?.name}
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-200" />
                  </Link>
                ))} */}
                {elements.map((item, index) => {
                  const isActive = index === selectedIndex;

                  return (
                    <Link
                      key={index}
                      ref={(el) => (itemRefs.current[index] = el)}
                      to={`/allTag/${item?.name}`}
                      onClick={() => setShow(false)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`
        p-3 rounded-lg cursor-pointer transition
        flex items-center gap-4
        ${isActive ? "bg-sky-500" : "hover:bg-sky-500"}
      `}
                    >
                      <div
                        className={`
          border p-1 rounded
          ${isActive ? "border-sky-300" : "border-[#d4cfcf93]"}
        `}
                      >
                        <Hash
                          className={`
            h-5 w-5 stroke-1
            ${isActive ? "text-white" : "text-gray-500"}
          `}
                        />
                      </div>

                      <div
                        className={`
          flex-1 font-semibold
          ${isActive ? "text-white" : "text-gray-400"}
        `}
                      >
                        {item?.name}
                      </div>

                      <ChevronRight
                        className={`
          w-4 h-4
          ${isActive ? "text-white" : "text-gray-400"}
        `}
                      />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-gray-400 text-center py-12">
                No results found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SearchTag;
