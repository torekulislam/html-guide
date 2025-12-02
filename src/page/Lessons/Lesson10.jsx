import React from "react";
import { Tag, Settings } from "lucide-react";
import { useSelector } from "react-redux";

import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";
import { lessons } from "../../data/htmlLessonData";

function Lesson10() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  // Quiz (semantic tags)

  const quiz = lessons?.[9]?.quiz;

  // Homework / assignment list
  const assignment = lessons?.[9]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={Tag}
        banglaSub={"পাঠ ১০: Meta Tags & Head Content"}
        engSub={"Intermediate Level"}
        titel={"Lesson 10: Meta Tags & Head Content"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* Meta Tags Section */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "Meta Tags ও Head Content" : "Meta Tags & Head Content"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "Meta tags ও head content ওয়েবপেজের SEO, social sharing, এবং অন্যান্য metadata নির্ধারণ করে।"
              : "Meta tags and head content define SEO, social sharing, and other metadata for a webpage."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>
              <b>&lt;title&gt;</b> –{" "}
              {isBangla ? "পৃষ্ঠার শিরোনাম" : "Page title"}
            </li>
            <li>
              <b>&lt;meta&gt;</b> –{" "}
              {isBangla
                ? "SEO, charset, viewport ইত্যাদির জন্য"
                : "For SEO, charset, viewport etc."}
            </li>
            <li>
              Open Graph –{" "}
              {isBangla ? "Social media preview" : "Social media preview"}
            </li>
            <li>
              Twitter Cards – {isBangla ? "Twitter preview" : "Twitter preview"}
            </li>
          </ul>

          <CodeExample
            code={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A sample webpage">
  <meta property="og:title" content="My Website">
  <meta property="og:description" content="This is an example site">
  <meta name="twitter:card" content="summary_large_image">
  <title>My Webpage</title>
</head>`}
          />
        </CardContainer>

        {/* Quiz Section */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework Section */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* Navigation */}
        <LessonNav lessonId={10} />
      </div>
    </div>
  );
}

export default Lesson10;
