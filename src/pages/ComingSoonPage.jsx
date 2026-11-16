import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft, Clock, Code2 } from "lucide-react";

function ComingSoonPage({
  title = "CSS",
  titleBn = "",
  color = "#1572B6",
  tagline = "",
  taglineBn = "",
}) {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  return (
    <div className="max-w-4xl mx-auto sm:px-8 py-10">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl bg-white p-10 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70"
      >
        <span
          className="mx-auto grid h-20 w-20 place-items-center rounded-2xl shadow-lg"
          style={{ backgroundColor: color, color: title === "JavaScript" ? "#1E293B" : "#FFFFFF" }}
        >
          <Code2 className="h-10 w-10" />
        </span>

        <h1 className="text-4xl font-bold text-gray-800 mt-6">
          {isBangla ? titleBn || title : title}
        </h1>
        <p className="text-lg text-gray-500 mt-1">
          {isBangla ? taglineBn || tagline : tagline}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
          <Clock className="w-4 h-4" />
          {isBangla ? "শীঘ্রই আসছে" : "Coming soon"}
        </div>

        <p className="text-gray-600 mt-6 max-w-xl mx-auto">
          {isBangla
            ? "এই অংশটি এখনো তৈরি হচ্ছে। ততক্ষণে HTML গাইড দিয়ে শুরু করুন!"
            : "This section is still being built. Start with the HTML guide in the meantime!"}
        </p>

        <Link
          to="/html"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {isBangla ? "HTML গাইডে যান" : "Go to HTML Guide"}
        </Link>
      </Motion.div>
    </div>
  );
}

export default ComingSoonPage;
