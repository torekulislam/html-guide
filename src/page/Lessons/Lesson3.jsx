import React, { useState } from "react";
import { Image, List, BookOpen, Clipboard } from "lucide-react";
import { useSelector } from "react-redux";

import { lessons } from "../../data/htmlLessonData";
import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import Card from "../../components/Card";
import LessonNav from "../../components/LessonNav";

function Lesson3() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  const quiz = lessons?.[2]?.quiz;
  const assignment = lessons?.[2]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={Image}
        banglaSub={"পাঠ ৩: ইমেজ ও লিস্টস"}
        engSub={"Beginner Level"}
        titel={"Lesson 3: Images & Lists"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* Images Section */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "ইমেজ (Images)" : "HTML Images"}
          </h2>

          <p className="text-slate-700 mb-4">
            {isBangla
              ? "HTML-এ ছবি দেখাতে <img> ট্যাগ ব্যবহার করা হয়। প্রধান অ্যাট্রিবিউট হলো src এবং alt।"
              : "Use the <img> tag to display images. The main attributes are src and alt."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1 mb-4">
            <li>
              <strong>src</strong> —{" "}
              {isBangla ? "ইমেজের উৎস" : "image source (URL/path)"}
            </li>
            <li>
              <strong>alt</strong> —{" "}
              {isBangla
                ? "বিকল্প টেক্সট (Accessibility)"
                : "alternative text for accessibility"}
            </li>
            <li>
              <strong>width/height</strong> —{" "}
              {isBangla ? "আকার নির্ধারণ" : "size attributes"}
            </li>
          </ul>

          <CodeExample
            code={`<!-- Basic image -->
<img src="images/photo.jpg" alt="A beautiful view" />

<!-- Responsive example -->
<img src="https://placekitten.com/800/400" alt="kitten" style="max-width:100%;height:auto;" />`}
          />
        </CardContainer>

        {/* Lists Section */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            <List className="w-5 h-5 text-blue-600" />
            {isBangla ? "লিস্টস (Lists)" : "HTML Lists"}
          </h2>

          <p className="text-slate-700 mb-4">
            {isBangla
              ? "HTML-এ তিন ধরনের লিস্ট আছে: unordered (&lt;ul&gt;), ordered (&lt;ol&gt;) এবং definition (&lt;dl&gt;)."
              : "HTML has three common list types: unordered (<ul>), ordered (<ol>), and definition (<dl>)."}
          </p>

          <CodeExample
            code={`<!-- Unordered list -->
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Have breakfast</li>
</ol>`}
          />
        </CardContainer>

        {/* Quiz Section */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework Section */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* Next lesson or previous lesson section-- */}
        <LessonNav lessonId={3} />
      </div>
    </div>
  );
}

export default Lesson3;
