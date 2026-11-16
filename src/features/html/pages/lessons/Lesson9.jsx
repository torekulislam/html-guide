import React from "react";
import { Hash, Settings } from "lucide-react";
import { useSelector } from "react-redux";

import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";
import { lessons } from "../../data/htmlLessonData";

function Lesson9() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  // Quiz (semantic tags)

  const quiz = lessons?.[8]?.quiz;

  // Homework / assignment list
  const assignment = lessons?.[8]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={Settings}
        banglaSub={"পাঠ ৯: HTML Attributes পূর্ণ গাইড"}
        engSub={"Intermediate Level"}
        titel={"Lesson 9: HTML Attributes (Full Guide)"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* Attributes Section */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "HTML Attributes" : "HTML Attributes"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "HTML Attributes ব্যবহার করে elements এর properties নির্ধারণ করা হয়। উদাহরণ: id, class, src, href, target।"
              : "HTML attributes define properties of elements. Examples: id, class, src, href, target."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>
              <b>id</b> – {isBangla ? "Unique identifier" : "Unique identifier"}
            </li>
            <li>
              <b>class</b> –{" "}
              {isBangla
                ? "CSS styling বা JavaScript জন্য ক্লাস নাম"
                : "Class name for styling or JS"}
            </li>
            <li>
              <b>src</b> –{" "}
              {isBangla
                ? "Image বা script উৎস নির্ধারণ"
                : "Defines the source of an image or script"}
            </li>
            <li>
              <b>href</b> –{" "}
              {isBangla ? "Link ঠিকানা নির্ধারণ" : "Specifies link URL"}
            </li>
            <li>
              <b>target</b> –{" "}
              {isBangla ? "লিঙ্ক কোথায় খোলা হবে" : "Where to open the link"}
            </li>
            <li>
              <b>Global attributes</b> –{" "}
              {isBangla
                ? "title, hidden, draggable ইত্যাদি"
                : "title, hidden, draggable etc."}
            </li>
          </ul>

          <CodeExample
            code={`<a href="https://example.com" target="_blank" class="btn" title="Visit Example">Example</a>
<img src="photo.jpg" id="main-photo" class="rounded" alt="Sample Image" draggable="true">`}
          />
        </CardContainer>

        {/* Quiz Section */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework Section */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* Next/Previous Navigation */}
        <LessonNav lessonId={9} />
      </div>
    </div>
  );
}

export default Lesson9;
