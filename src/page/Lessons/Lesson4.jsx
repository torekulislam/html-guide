import React from "react";
import { Edit, Box, BookOpen, Clipboard } from "lucide-react";
import { useSelector } from "react-redux";

import { lessons } from "../../data/htmlLessonData";
import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear";
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";

function Lesson4() {
  // language comes from your redux store (same as Lesson2 / Lesson3)
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  const quiz = lessons?.[3]?.quiz;
  const assignment = lessons?.[3]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={Edit}
        banglaSub={"পাঠ ৪: ফর্ম ও ইনপুটস"}
        engSub={"Beginner Level"}
        titel={"Lesson 4: Forms & Inputs"}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* Forms Intro */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "ফর্মস (Forms)" : "HTML Forms"}
          </h2>

          <p className="text-slate-700 mb-4">
            {isBangla
              ? "ফর্ম ব্যবহার করে ইউজার থেকে ডেটা নেওয়া হয়। <form> ট্যাগটি ফর্মের কনটেইনার। ইনপুটগুলির name অ্যাট্রিবিউট সার্ভারে পাঠানোর সময় কী হিসেবে কাজ করে।"
              : "Forms collect user input. The <form> tag contains form controls. Each input's name attribute becomes the key when data is submitted."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-1 mb-4">
            <li>
              <strong>action</strong> —{" "}
              {isBangla ? "ফর্ম জমা হওয়ার URL" : "URL to send the form data to"}
            </li>
            <li>
              <strong>method</strong> —{" "}
              {isBangla ? "GET বা POST" : "GET or POST"}
            </li>
            <li>
              <strong>name</strong> —{" "}
              {isBangla
                ? "প্রতিটি ইনপুটের নাম (সার্ভারে কী হিসেবে যাবে)"
                : "Input name used as the key when submitting"}
            </li>
          </ul>

          <CodeExample
            code={`<form action="/submit" method="POST">
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4"></textarea>

  <button type="submit">Send</button>
</form>`}
          />
        </CardContainer>

        {/* Inputs & Attributes */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            <Box className="w-5 h-5 text-blue-600" />
            {isBangla
              ? "ইনপুট টাইপ ও অ্যাট্রিবিউট"
              : "Input Types & Attributes"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "HTML-এ text, email, tel, password, checkbox, radio, file, number, date, range, color সহ আরও অনেক ধরনের input type রয়েছে। প্রতিটি input type নির্দিষ্ট ধরনের ডেটা নেওয়ার জন্য ব্যবহৃত হয়। placeholder, required, value, min, max, minlength, maxlength, pattern ইত্যাদি অ্যাট্রিবিউট ব্যবহার করলে জাভাস্ক্রিপ্ট ছাড়াই ইনপুট যাচাই (validation) করা যায়। এর ফলে ইউজার ভুল ডেটা কম দেয় এবং ফর্ম আরও ব্যবহারবান্ধব হয়।"
              : "HTML provides many input types such as text, email, tel, password, checkbox, radio, file, number, date, range, color, and more. Each input type helps collect the correct form of user data. Attributes like placeholder, required, value, min, max, minlength, maxlength, and pattern help validate and control the input directly from HTML without JavaScript. These features make forms more user-friendly and reduce invalid submissions."}
          </p>

          <CodeExample
            code={`<!-- Text and email -->
<input type="text" name="fullname" placeholder="Full name" />
<input type="email" name="email" placeholder="you@example.com" required />

<!-- Checkbox & Radio -->
<label><input type="checkbox" name="subscribe" /> Subscribe</label>
<label><input type="radio" name="plan" value="free" /> Free</label>

<!-- File upload -->
<input type="file" name="avatar" accept="image/*" />`}
          />
        </CardContainer>

        {/* Quiz Section */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework Section */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* Next lesson or previous lesson section-- */}
        <LessonNav lessonId={4} />
      </div>
    </div>
  );
}

export default Lesson4;
