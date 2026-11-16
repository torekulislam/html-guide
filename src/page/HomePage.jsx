import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FileCode, Palette, Zap, ArrowRight, Sparkles } from "lucide-react";

const tracks = [
  {
    id: "html",
    title: "HTML",
    titleBn: "এইচটিএমএল",
    tagline: "Structure & Markup",
    taglineBn: "গঠন ও মার্কআপ",
    desc: "Build the skeleton of every website with elements, attributes and semantic tags.",
    descBn: "এলিমেন্ট, অ্যাট্রিবিউট ও সেমান্টিক ট্যাগ দিয়ে ওয়েবসাইটের কাঠামো তৈরি করুন।",
    to: "/html",
    ready: true,
    color: "#E34F26",
    onColor: "#FFFFFF",
    gradient: "from-[#E34F26] to-[#F5804A]",
    Icon: FileCode,
  },
  {
    id: "css",
    title: "CSS",
    titleBn: "সিএসএস",
    tagline: "Style & Layout",
    taglineBn: "স্টাইল ও লেআউট",
    desc: "Style your pages with colors, layouts, responsive design and animations.",
    descBn: "রঙ, লেআউট, রেসপন্সিভ ডিজাইন ও অ্যানিমেশন দিয়ে পেজ সাজান।",
    to: "/css",
    ready: false,
    color: "#1572B6",
    onColor: "#FFFFFF",
    gradient: "from-[#1572B6] to-[#38BDF8]",
    Icon: Palette,
  },
  {
    id: "js",
    title: "JavaScript",
    titleBn: "জাভাস্ক্রিপ্ট",
    tagline: "Behavior & Logic",
    taglineBn: "আচরণ ও লজিক",
    desc: "Bring your pages to life with interactivity, logic and dynamic content.",
    descBn: "ইন্টারঅ্যাক্টিভিটি, লজিক ও ডাইনামিক কন্টেন্ট দিয়ে পেজকে প্রাণবন্ত করুন।",
    to: "/js",
    ready: false,
    color: "#F7DF1E",
    onColor: "#1E293B",
    gradient: "from-[#F7DF1E] to-[#F5B301]",
    Icon: Zap,
  },
];

function HomePage() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  return (
    <div className="max-w-6xl mx-auto sm:px-8 sm:py-12 py-2 space-y-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-8 sm:p-10 shadow-lg"
      >
        <div className="flex items-center gap-2 text-blue-100 text-sm font-semibold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          {isBangla ? "ফ্রন্টএন্ড গাইড" : "Frontend Guide"}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mt-3">
          {isBangla ? "HTML, CSS ও JS শিখুন" : "Learn HTML, CSS & JS"}
        </h1>
        <p className="text-lg text-blue-50 mt-3 max-w-2xl">
          {isBangla
            ? "শুরু করুন নতুনদের জন্য সহজ বাংলা ও ইংরেজি উদাহরণসহ — প্রতিটি ধাপে ধাপে।"
            : "Step by step tutorials with simple Bangla & English examples — from beginner to pro."}
        </p>
      </motion.div>

      {/* Language cards */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {isBangla ? "কোন ভাষা দিয়ে শুরু করবেন?" : "Which language do you want to start with?"}
        </h2>
        <p className="text-gray-600 mt-2">
          {isBangla
            ? "প্রতিটি কার্ডে টিউটোরিয়াল, ট্যাগ রেফারেন্স ও লাইভ কোড এডিটর পাবেন।"
            : "Every card gives you tutorials, a tag reference and a live code editor."}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <Link
              to={track.to}
              className="group block h-full rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] transition-all duration-300"
            >
              <div
                className={`h-1.5 w-16 rounded-full bg-linear-to-r ${track.gradient}`}
              ></div>

              <div className="mt-5 flex items-center gap-3">
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: track.color, color: track.onColor }}
                >
                  <track.Icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {isBangla ? track.titleBn : track.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {isBangla ? track.taglineBn : track.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {isBangla ? track.descBn : track.desc}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className="text-sm font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: `${track.color}1a`,
                    color: track.id === "js" ? "#B45309" : track.color,
                  }}
                >
                  {track.ready
                    ? isBangla
                      ? "শুরু করুন"
                      : "Start learning"
                    : isBangla
                    ? "শীঘ্রই আসছে"
                    : "Coming soon"}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
