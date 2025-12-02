import React from "react";
import { FormInput } from "lucide-react";
import { useSelector } from "react-redux";

import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";
import { lessons } from "../../data/htmlLessonData";

function Lesson11() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  // Quiz (semantic tags)

  const quiz = lessons?.[10]?.quiz;

  // Homework / assignment list
  const assignment = lessons?.[10]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={FormInput}
        banglaSub={"পাঠ ১১: Forms (Part 2)"}
        engSub={"Intermediate Level"}
        titel={"Lesson 11: Forms — Part 2"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "Forms (Part 2)" : "Forms — Part 2"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "এই পাঠে আমরা select, textarea, datalist ও ইনপুট validation নিয়ে কাজ করব।"
              : "This lesson covers select, textarea, datalist, and input validation."}
          </p>

          <CodeExample
            code={`<form>
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  
  <select name="options">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>

  <textarea name="message"></textarea>

  <input list="browsers" name="browser">
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
  </datalist>
</form>`}
          />
        </CardContainer>

        <QuizSection quiz={quiz} isBangla={isBangla} />
        <HomeWork data={assignment} isBangla={isBangla} />
        <LessonNav lessonId={11} />
      </div>
    </div>
  );
}

export default Lesson11;
