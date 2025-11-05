import React, { useEffect, useState } from "react";
import { X, Search, Hash, ChevronRight } from "lucide-react";
import { htmlTagsDataDitiles } from "../htmlTagsData";
import { Link } from "react-router-dom";

function SearchTag({ show }) {
  useEffect(() => {
    show ?? document.body.style.height("100vh");
  }, [show]);

  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Calculate directly - no useState needed!
  const elements = htmlTagsDataDitiles.filter((item) =>
    item?.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="h-screen w-full fixed inset-0 z-30">
      {/* Backdrop */}
      <div
        onClick={() => show(false)}
        className="h-full w-full bg-[#08224928] backdrop-blur-sm"
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-start justify-center pt-20 pointer-events-none">
        <div className="w-[90%] max-w-[600px] bg-white shadow-2xl rounded-2xl pointer-events-auto">
          {/* Search Input */}
          <div className="w-full flex items-center border-gray-300 border-b px-5 py-4 gap-3">
            <Search className="w-5 h-5 text-blue-500 shrink-0" />
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search tag..."
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
            />
            <button
              onClick={() => show(false)}
              aria-label="Close"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="w-full min-h-[200px] max-h-[400px] overflow-y-auto p-6">
            {searchQuery.trim() === "" ? (
              <div className="text-gray-400 text-center py-12 text-base">
                No recent searches
              </div>
            ) : elements.length > 0 ? (
              <div className="space-y-2">
                {elements.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item?.name}`}
                    aria-label={`${item?.name}-teg`}
                    onClick={() => show(false)}
                    className="group p-3 hover:bg-sky-500 rounded-lg cursor-pointer transition flex items-center justify-baseline gap-4"
                  >
                    <div className=" border border-[#d4cfcf93]  p-1 rounded group-hover:shadow-sky-400">
                      <Hash className="text-gray-500 group-hover:text-gray-100  h-5 w-5 font-extralight stroke-1 " />
                    </div>
                    <div className=" flex-1 text-gray-400 font-semibold group-hover:text-gray-200">
                      {item?.name}
                    </div>
                    <div className="">
                      <ChevronRight className="w-4 h-4 text-gray-400 font-semibold group-hover:text-gray-200" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-gray-400 text-center py-12 text-base">
                No results found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTag;
