import React, { useState } from "react";
import { Table, Type, Clipboard } from "lucide-react";
import { useSelector } from "react-redux";

import { lessons } from "../../data/htmlLessonData";
import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";

function Lesson5() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  const quiz = lessons?.[4]?.quiz;
  const assignment = lessons?.[4]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={Table}
        banglaSub={"পাঠ ৫: টেবিল তৈরি"}
        engSub={"Intermediate Level"}
        titel={"Lesson 5: HTML Tables"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* Tables Section */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "HTML টেবিল ট্যাগ" : "HTML Table Tags"}
          </h2>

          <p className="text-slate-700 mb-4">
            {isBangla
              ? "HTML টেবিল তৈরি করার জন্য <table>, <tr>, <th> এবং <td> ব্যবহার করা হয়।"
              : "HTML tables are created using <table>, <tr>, <th>, and <td> tags."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1">
            <li>
              &lt;table&gt; –{" "}
              {isBangla ? "টেবিলের মূল কন্টেইনার" : "Table container"}
            </li>
            <li>&lt;tr&gt; – {isBangla ? "টেবিলের সারি" : "Table row"}</li>
            <li>&lt;th&gt; – {isBangla ? "হেডার সেল" : "Header cell"}</li>
            <li>&lt;td&gt; – {isBangla ? "সাধারণ সেল" : "Standard cell"}</li>
          </ul>

          <CodeExample
            code={`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
    <td>Dhaka</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>30</td>
    <td>Chittagong</td>
  </tr>
</table>`}
          />
        </CardContainer>

        {/* Quiz Section */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework Section */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* Next lesson or previous lesson section-- */}
        <LessonNav lessonId={5} />
      </div>
    </div>
  );
}

export default Lesson5;
