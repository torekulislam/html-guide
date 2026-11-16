import React from "react";
import { Award } from "lucide-react";
import { useSelector } from "react-redux";

import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";
import { lessons } from "../../data/htmlLessonData";

function Lesson12() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  // Quiz (semantic tags)

  const quiz = lessons?.[11]?.quiz;

  // Homework / assignment list
  const assignment = lessons?.[11]?.assignment;

  return (
    <div className="min-h-screen">
      <LesonHading
        isBangla={isBangla}
        Icon={Award}
        banglaSub={"পাঠ ১২: Best Practices & Final Project"}
        engSub={"Intermediate Level"}
        titel={"Lesson 12: Best Practices & Final Project"}
      />

      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla
              ? "Best Practices & Final Project"
              : "Best Practices & Final Project"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "এই পাঠে আমরা accessibility, clean code এবং final project তৈরি নিয়ে শিখব।"
              : "This lesson covers accessibility, clean code, and building the final project."}
          </p>

          <CodeExample
            code={`<img src="image.jpg" alt="Description">
<label for="name">Name:</label>
<input type="text" id="name" aria-label="Name">`}
          />
        </CardContainer>

        <QuizSection quiz={quiz} isBangla={isBangla} />
        <HomeWork data={assignment} isBangla={isBangla} />
        <LessonNav lessonId={12} />
      </div>
    </div>
  );
}

export default Lesson12;
