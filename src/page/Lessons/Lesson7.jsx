import React from "react";
import { Type, LayoutDashboard } from "lucide-react";
import { useSelector } from "react-redux";

import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";
import { lessons } from "../../data/htmlLessonData";

// Lesson 7: Responsive Layouts & Media Queries
function Lesson7() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  const quiz = lessons?.[6]?.quiz;
  const assignment = lessons?.[6]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={LayoutDashboard}
        banglaSub={"পাঠ ৭: Div, Span ও লেআউট বেসিকস"}
        engSub={"Beginner to Intermediate Level"}
        titel={"Lesson 7: Div, Span & Layout Basics"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* DIV VS SPAN */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "Div ও Span" : "Div & Span Elements"}
          </h2>

          <p className="text-slate-700 mb-4">
            {isBangla
              ? "<div> একটি block-level element যা সবসময় নতুন লাইনে শুরু হয়। <span> একটি inline element যা টেক্সটের সাথে একই লাইনে থাকে।"
              : "<div> is a block-level element that always starts on a new line. <span> is an inline element that stays within the same line as text."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>
              <b>&lt;div&gt;</b> –{" "}
              {isBangla
                ? "Block element (পুরো লাইন দখল করে)"
                : "Block element (takes full width)"}
            </li>
            <li>
              <b>&lt;span&gt;</b> –{" "}
              {isBangla
                ? "Inline element (লাইন পরিবর্তন হয় না)"
                : "Inline element (does not break line)"}
            </li>
          </ul>

          <CodeExample
            code={`<div style="background: lightblue;">
  This is a block element.
</div>

<span style="background: yellow;">
  This is inline text.
</span>`}
          />
        </CardContainer>

        {/* BLOCK VS INLINE */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "Block vs Inline Elements" : "Block vs Inline Elements"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "Block elements পুরো প্রস্থ দখল করে এবং নতুন লাইনে শুরু হয়। Inline elements শুধু প্রয়োজনীয় জায়গা নেয় এবং একই লাইনে থাকে।"
              : "Block elements take full width and begin on a new line. Inline elements only take needed space and stay in the same line."}
          </p>

          <CodeExample
            code={`<!-- Block Element -->
<div style="border: 1px solid black;">Block Item</div>

<!-- Inline Element -->
<span style="border: 1px solid red;">Inline Item</span>
<span style="border: 1px solid red;">Inline Item</span>`}
          />
        </CardContainer>

        {/* BOX MODEL */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "HTML Box Model" : "HTML Box Model"}
          </h2>

          <p className="text-slate-700 mb-4">
            {isBangla
              ? "Box Model চারটি অংশ নিয়ে গঠিত: margin, border, padding এবং content।"
              : "The box model consists of margin, border, padding and content."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>Content – actual text or elements</li>
            <li>Padding – space inside the border</li>
            <li>Border – line around padding</li>
            <li>Margin – space outside the element</li>
          </ul>

          <CodeExample
            code={`<div style="margin: 20px; padding: 20px; border: 2px solid blue;">
  Box Model Example
</div>`}
          />
        </CardContainer>

        {/* QUIZ */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* HOMEWORK */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* NAVIGATION */}
        <LessonNav lessonId={7} />
      </div>
    </div>
  );
}

export default Lesson7;
