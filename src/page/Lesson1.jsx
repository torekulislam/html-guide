import React, { useState } from "react";
import {
  Globe,
  Terminal,
  FileCode,
  BookOpen,
  Clipboard,
  CheckCircle,
  XCircle,
} from "lucide-react";
import CodeExample from "../components/CodeExample";
import LesonHading from "../components/LesonHading";
import QuizSection from "../components/QuizSection";
import CardContainer from "../components/CardContarear";
import HomeWork from "../components/HomeWork";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Lesson1() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";
  const quiz = [
    {
      id: 1,
      question: isBangla ? "HTML এর পূর্ণরূপ কি?" : "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
      ],
      correct: 0,
    },
    {
      id: 2,
      question: isBangla
        ? "HTML পৃষ্ঠার মূল এলিমেন্ট কোনটি?"
        : "What is the root element of an HTML page?",
      options: ["<body>", "<html>", "<head>"],
      correct: 1,
    },
    {
      id: 3,
      question: isBangla
        ? "কোন ট্যাগটি HTML5 ডকুমেন্ট ঘোষণা করে?"
        : "Which tag declares an HTML5 document?",
      options: ["<!DOCTYPE html>", "<html5>", "<meta>"],
      correct: 0,
    },
    {
      id: 4,
      question: isBangla
        ? "দৃশ্যমান কন্টেন্ট কোথায় থাকে?"
        : "Where does visible content go?",
      options: ["<head>", "<title>", "<body>"],
      correct: 2,
    },
  ];
  const assignment = [
    { en: "Create an HTML file", bn: "একটি HTML ফাইল তৈরি করুন" },
    { en: "Write one paragraph", bn: "একটি paragraph লিখুন" },
    {
      en: "Use bold, italic, and underline",
      bn: "Bold, italic ও underline ব্যবহার করুন",
    },
    { en: "Add a Google link", bn: "একটি Google লিংক দিন" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}

      <LesonHading
        isBangla={isBangla}
        banglaSub={"পাঠ ১: HTML বেসিক"}
        engSub={"Beginner Level"}
        titel={"Lesson 1: HTML Basics"}
      />

      <div className="max-w-5xl mx-auto md:px-6 py-10 space-y-10">
        {/* Intro */}
        <section>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            {isBangla ? "HTML কি?" : "What is HTML?"}
          </h1>
          <p className="text-slate-600 text-lg">
            {isBangla
              ? "HTML হল ওয়েব পেজ তৈরির স্ট্যান্ডার্ড মার্কআপ ল্যাঙ্গুয়েজ।"
              : "HTML is the standard markup language for creating web pages."}
          </p>
        </section>

        {/* Core Concepts */}

        <CardContainer>
          <h2 className="text-xl font-semibold text-slate-900 mb-4 flex gap-2 items-center">
            <FileCode className="w-5 h-5 text-blue-600" />
            {isBangla ? "মূল ধারণা" : "Core Concepts"}
          </h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              •{" "}
              {isBangla
                ? "ওয়েব পেজের স্ট্রাকচার"
                : "Defines web page structure"}
            </li>
            <li>
              •{" "}
              {isBangla
                ? "ট্যাগ ব্যবহার করে কন্টেন্ট মার্কআপ করে"
                : "Uses tags to markup content"}
            </li>
            <li>
              •{" "}
              {isBangla ? "ব্রাউজার HTML রেন্ডার করে" : "Browsers render HTML"}
            </li>
          </ul>
        </CardContainer>

        {/* Document Structure */}

        <CardContainer>
          <h2 className="text-xl font-semibold text-slate-900 mb-4 ">
            {isBangla ? "ডকুমেন্ট স্ট্রাকচার" : "Document Structure"}
          </h2>

          <CodeExample
            code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is my first paragraph.</p>
  </body>
</html>`}
          />
        </CardContainer>

        {/* Quiz Section */}

        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework */}

        <HomeWork data={assignment} isBangla={isBangla} />
      </div>
    </div>
  );
}

export default Lesson1;
