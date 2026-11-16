import React from "react";
import { Image, Folder } from "lucide-react";
import { useSelector } from "react-redux";

import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";
import { lessons } from "../../data/htmlLessonData";

function Lesson8() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  // Quiz (semantic tags)

  const quiz = lessons?.[7]?.quiz;

  // Homework / assignment list
  const assignment = lessons?.[7]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={Image}
        banglaSub={"পাঠ ৮: ইমেজ ও অ্যাসেট হ্যান্ডলিং"}
        engSub={"Intermediate Level"}
        titel={"Lesson 8: Images & Asset Handling"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* Images & Asset Section */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla
              ? "ফাইল পাথ ও ইমেজ হ্যান্ডলিং"
              : "File Paths & Images Handling"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "HTML এ ইমেজ যোগ করার জন্য src attribute ব্যবহার হয়। ফাইল পাথ হিসেবে relative বা absolute URL ব্যবহার করা যায়।"
              : "Images in HTML are added using the src attribute. You can use relative or absolute URLs for file paths."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>
              {isBangla
                ? "Relative path: HTML ফাইলের অবস্থান থেকে পথ উল্লেখ করা"
                : "Relative path: Path relative to the HTML file location"}
            </li>
            <li>
              {isBangla
                ? "Absolute path: সম্পূর্ণ URL ব্যবহার করা"
                : "Absolute path: Full URL to the resource"}
            </li>
            <li>
              {isBangla
                ? "ফোল্ডার স্ট্রাকচার গুরুত্বপূর্ণ: assets/images, css, js আলাদা রাখা"
                : "Folder structure matters: keep assets/images, css, js separate"}
            </li>
          </ul>

          <CodeExample
            code={`<img src="assets/images/photo.jpg" alt="My Photo" />
<img src="https://example.com/photo.jpg" alt="External Photo" />`}
          />
        </CardContainer>

        {/* Quiz Section */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework Section */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* Next/Previous Navigation */}
        <LessonNav lessonId={8} />
      </div>
    </div>
  );
}

export default Lesson8;
