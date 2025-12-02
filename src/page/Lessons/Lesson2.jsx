import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Type, Link2, BookOpen, Clipboard } from "lucide-react";

import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContarear from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import Card from "../../components/Card";
import { lessons } from "../../data/htmlLessonData";
import LessonNav from "../../components/LessonNav";

function Lesson2() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  const quiz = lessons?.[1]?.quiz;
  const assignment = lessons?.[1]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={Type}
        banglaSub={"পাঠ ২: টেক্সট ফরম্যাটিং ও লিংক"}
        engSub={"Beginner Level"}
        titel={"Lesson 2: Text Formatting & Links"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* Text Formatting Section */}
        <CardContarear>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "টেক্সট ফরম্যাটিং ট্যাগ" : "HTML Text Formatting Tags"}
          </h2>

          <p className="text-slate-700 mb-4">
            {isBangla
              ? "HTML বিভিন্ন ধরনের টেক্সট স্টাইল তৈরি করতে কিছু স্পেশাল ট্যাগ ব্যবহার করে।"
              : "HTML provides several tags to style and emphasize text."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>
              <b>&lt;b&gt;</b> – {isBangla ? "Bold টেক্সট" : "Bold text"}
            </li>
            <li>
              <i>&lt;i&gt;</i> – {isBangla ? "Italic টেক্সট" : "Italic text"}
            </li>
            <li>
              <u>&lt;u&gt;</u> –{" "}
              {isBangla ? "Underline টেক্সট" : "Underline text"}
            </li>
            <li>&lt;mark&gt; – {isBangla ? "হাইলাইট" : "Highlight text"}</li>
            <li>
              &lt;strong&gt; –{" "}
              {isBangla ? "গুরুত্বপূর্ণ টেক্সট" : "Important (strong) text"}
            </li>
            <li>
              &lt;em&gt; – {isBangla ? "জোর দেয়া টেক্সট" : "Emphasized text"}
            </li>
          </ul>

          <CodeExample
            code={`<p>This is <b>bold</b>, <i>italic</i>, and <u>underlined</u> text.</p>
<p>This is <mark>highlighted</mark> text.</p>
<p>This is <strong>strong</strong> and <em>emphasized</em> text.</p>`}
          />
        </CardContarear>

        {/* Links Section */}
        <CardContarear>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            <Link2 className="w-5 h-5 text-blue-600" />
            {isBangla ? "HTML লিংক" : "HTML Links"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "লিংক তৈরির জন্য <a> ট্যাগ ব্যবহার করা হয়। href অ্যাট্রিবিউট দিয়ে লিংকের ঠিকানা দেওয়া হয়।"
              : "Links are created using the <a> tag. The 'href' attribute defines the destination URL."}
          </p>

          <CodeExample
            code={`<a href="https://google.com">Visit Google</a>

<a href="/about.html">Go to About Page</a>

<a href="https://youtube.com" target="_blank">
  Open YouTube in new tab
</a>`}
          />
        </CardContarear>

        {/* Quiz Section */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework Section */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* Next lesson or previous lesson section-- */}
        <LessonNav lessonId={2} />
      </div>
    </div>
  );
}

export default Lesson2;
