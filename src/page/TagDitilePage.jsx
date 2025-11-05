import React, { useState, useEffect } from "react";
import HTMLTagViewer from "../components/HTMLTagViewer";
import { htmlTagsDataDitiles } from "../htmlTagsData";
import { useParams } from "react-router-dom";

function TagDitilePage() {
  const { tagname } = useParams();
  const [tag, setTag] = useState(null);

  useEffect(() => {
    if (tagname) {
      const foundTag = htmlTagsDataDitiles.find(
        (item) => item.name.toLowerCase() === tagname.toLowerCase()
      );
      setTag(foundTag || null);
    }
  }, [tagname]);

  //console.log(tag);

  if (!tag)
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-white/40 backdrop-blur-md rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(10,116,255,0.1)]">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
          Oops! Tag Not Found
        </h2>
        <p className="text-gray-500 max-w-md">
          Sorry 😅, my database doesn’t have this tag yet. Check back soon — I’m
          still learning new HTML tricks!
        </p>
      </div>
    );
  return (
    <div>
      {" "}
      <HTMLTagViewer tagData={tag} />
    </div>
  );
}

export default TagDitilePage;
