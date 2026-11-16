import React from "react";
import {
  Layout,
  Navigation,
  FileText,
  BookOpen,
  Clipboard,
} from "lucide-react";
import { useSelector } from "react-redux";

import CodeExample from "../../components/CodeExample";
import LesonHading from "../../components/LesonHading";
import QuizSection from "../../components/QuizSection";
import CardContainer from "../../components/CardContarear"; // adjust if your filename differs
import HomeWork from "../../components/HomeWork";
import LessonNav from "../../components/LessonNav";
import { lessons } from "../../data/htmlLessonData";

function Lesson6() {
  const language = useSelector((state) => state.htmlStore.language);
  const isBangla = language === "BN";

  // Quiz (semantic tags)

  const quiz = lessons?.[5]?.quiz;

  // Homework / assignment list
  const assignment = lessons?.[5]?.assignment;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <LesonHading
        isBangla={isBangla}
        Icon={Layout}
        banglaSub={"পাঠ ৬: সেম্যান্টিক HTML"}
        engSub={"Beginner → Intermediate"}
        titel={"Lesson 6: Semantic HTML"}
      />

      {/* Main content */}
      <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
        {/* Intro to Semantic HTML */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla ? "সেম্যান্টিক HTML কী?" : "What is Semantic HTML?"}
          </h2>

          <p className="text-slate-700 mb-4">
            {isBangla
              ? "সেম্যান্টিক HTML ট্যাগগুলো কনটেন্টের উদ্দেশ্য স্পষ্ট করে — যেমন header, nav, main, article, section, aside, footer। এগুলো ব্রাউজার, সার্চ ইঞ্জিন এবং অ্যাসিস্টিভ টুলগুলোকে কনটেন্টের মানে বোঝাতে সাহায্য করে।"
              : "Semantic HTML tags make the purpose of content clear — examples: header, nav, main, article, section, aside, footer. They help browsers, search engines, and assistive tech understand page structure."}
          </p>

          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>
              <strong>&lt;header&gt;</strong> —{" "}
              {isBangla
                ? "পেজ বা সেকশনের শীর্ষ অংশ (লোগো, শিরোনাম, টপ ন্যাভ)"
                : "Top of a page or section (logo, heading, top navigation)"}
            </li>
            <li>
              <strong>&lt;nav&gt;</strong> —{" "}
              {isBangla
                ? "প্রধান নেভিগেশন লিংকগুলো ধারণ করে"
                : "Contains primary navigation links"}
            </li>
            <li>
              <strong>&lt;main&gt;</strong> —{" "}
              {isBangla
                ? "প্রধান কনটেন্ট; প্রতিটি পেজে একটিমাত্র থাকা উচিত"
                : "Primary page content; there should be only one main per page"}
            </li>
            <li>
              <strong>&lt;section&gt;</strong> —{" "}
              {isBangla
                ? "সংক্রান্ত কনটেন্টের গ্রুপ"
                : "A generic section for grouping related content"}
            </li>
            <li>
              <strong>&lt;article&gt;</strong> —{" "}
              {isBangla
                ? "স্বতন্ত্র কনটেন্ট যা আলাদাভাবে বিতরণযোগ্য (ব্লগ পোস্ট)"
                : "Standalone content that could be distributed independently (blog post)"}
            </li>
            <li>
              <strong>&lt;aside&gt;</strong> —{" "}
              {isBangla
                ? "পেজের সম্পূরক অংশ, যেমন সাইডবার"
                : "Complementary content like a sidebar"}
            </li>
            <li>
              <strong>&lt;footer&gt;</strong> —{" "}
              {isBangla
                ? "পৃষ্ঠার নিচের অংশ (কপিরাইট, লিঙ্ক)"
                : "Footer area (copyright, links)"}
            </li>
          </ul>
        </CardContainer>

        {/* Example layout */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            <Navigation className="w-5 h-5 text-blue-600" />
            {isBangla ? "বেসিক পেজ লেআউট" : "Basic Page Layout Example"}
          </h2>

          <p className="text-slate-700 mb-3">
            {isBangla
              ? "নিচের উদাহরণটি সেম্যান্টিক ট্যাগগুলো ব্যবহার করে একটি সাধারণ ব্লগ লেআউট দেখায়।"
              : "The example below shows a simple blog layout using semantic tags."}
          </p>

          <CodeExample
            code={`<!DOCTYPE html>
<html lang="en">
  <body>
    <header>
      <h1>Site Title</h1>
      <nav><!-- main nav --></nav>
    </header>

    <main>
      <article>
        <h2>Article title</h2>
        <p>Article content...</p>
      </article>

      <aside>
        <h3>Related</h3>
        <ul><li>Link</li></ul>
      </aside>
    </main>

    <footer>
      <p>© 2025 My Website</p>
    </footer>
  </body>
</html>`}
          />
        </CardContainer>

        {/* Accessibility & best-practices */}
        <CardContainer>
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
            {isBangla
              ? "অ্যাক্সেসিবিলিটি ও সেরা অনুশীলন"
              : "Accessibility & Best Practices"}
          </h2>

          <ul className="list-disc ml-6 text-slate-700 space-y-2">
            <li>
              {isBangla
                ? "প্রতিটি মূল landmark (header, main, nav, footer) ব্যবহার করে স্ক্রিন রিডারকে সহজ নেভিগেশন দিন।"
                : "Use landmarks (header, main, nav, footer) to give screen readers clear navigation."}
            </li>
            <li>
              {isBangla
                ? "হেডিং ট্যাগগুলো লজিক্যালভাবে (h1→h2→h3) ব্যবহার করুন।"
                : "Use heading tags in logical order (h1 → h2 → h3)."}
            </li>
            <li>
              {isBangla
                ? "কনটেন্টের টুকরা যেখানে স্বতন্ত্রভাবে অর্থপূর্ণ সেখানে <article> ব্যবহার করুন।"
                : "Wrap independently meaningful content in <article>."}
            </li>
            <li>
              {isBangla
                ? "অপ্রয়োজনীয় div ব্যবহার থেকে বিরত থাকুন—সেম্যান্টিক ট্যাগগুলো ব্যবহার করলে কোড পরিষ্কার হয়।"
                : "Avoid unnecessary divs—semantic tags make markup cleaner and more meaningful."}
            </li>
          </ul>
        </CardContainer>

        {/* Quiz */}
        <QuizSection quiz={quiz} isBangla={isBangla} />

        {/* Homework */}
        <HomeWork data={assignment} isBangla={isBangla} />

        {/* Navigation */}
        <LessonNav lessonId={6} />
      </div>
    </div>
  );
}

export default Lesson6;

// import React from "react";
// import { Layout, Speaker, BookOpen, Clipboard, Search } from "lucide-react";
// import { useSelector } from "react-redux";

// import { lessons } from "../../data/htmlLessonData";
// import CodeExample from "../../components/CodeExample";
// import LesonHading from "../../components/LesonHading";
// import QuizSection from "../../components/QuizSection";
// import CardContainer from "../../components/CardContarear";
// import HomeWork from "../../components/HomeWork";
// import LessonNav from "../../components/LessonNav";

// function Lesson6() {
//   const language = useSelector((state) => state.htmlStore.language);
//   const isBangla = language === "BN";

//   // Try to find lesson data (fallback to empty arrays)
//   const quiz = lessons?.[5]?.quiz;
//   const assignment = lessons?.[5]?.assignment;

//   return (
//     <div className="min-h-screen">
//       {/* Header */}
//       <LesonHading
//         isBangla={isBangla}
//         Icon={Layout}
//         banglaSub={"পাঠ ৬: অ্যাক্সেসিবিলিটি ও SEO"}
//         engSub={"Intermediate Level"}
//         titel={"Lesson 6: Accessibility & SEO"}
//       />

//       <div className="max-w-5xl mx-auto sm:px-6 py-10 space-y-12">
//         {/* Why Accessibility */}
//         <CardContainer>
//           <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
//             {isBangla ? "কেন অ্যাক্সেসিবিলিটি?" : "Why Accessibility?"}
//           </h2>

//           <p className="text-slate-700 mb-4">
//             {isBangla
//               ? "অ্যাক্সেসিবিলিটি (accessibility) এতে নিশ্চিত করে যে ওয়েবসাইটটি সকল ব্যবহারকারীর — নীচে স্ক্রিন-রিডার ব্যবহারকারীদেরও — জন্য ব্যবহারযোগ্য। সঠিক HTML ও ARIA ব্যবহার করলে UX উন্নত হয় এবং আইনি/মান সম্মতিও বজায় থাকে।"
//               : "Accessibility ensures your website is usable by everyone, including people using screen readers or keyboard navigation. Proper HTML semantics and ARIA attributes improve UX, inclusion and legal compliance."}
//           </p>

//           <ul className="list-disc ml-6 text-slate-700 space-y-2">
//             <li>
//               {isBangla
//                 ? "আকর্ষণীয় alt টেক্সট দিয়ে ইমেজ বর্ণনা করুন।"
//                 : "Provide meaningful alt text for images."}
//             </li>
//             <li>
//               {isBangla
//                 ? "ফর্মের প্রতিটি ইনপুটে label যোগ করুন।"
//                 : "Attach <label> to every form control."}
//             </li>
//             <li>
//               {isBangla
//                 ? "নেভিগেশনের জন্য landmark ট্যাগ ব্যবহার করুন (header, nav, main, footer)।"
//                 : "Use landmark tags (header, nav, main, footer) for clear navigation."}
//             </li>
//             <li>
//               {isBangla
//                 ? "ইন্টারঅ্যাকটিভ আইটেমগুলোর জন্য কীবোর্ড ন্যাভিগেশন সমর্থন করুন (tabindex, keyboard handlers)।"
//                 : "Support keyboard navigation for interactive items (tabindex, keyboard handlers)."}
//             </li>
//           </ul>
//         </CardContainer>

//         {/* ARIA & Examples */}
//         <CardContainer>
//           <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
//             <Speaker className="w-5 h-5 text-blue-600" />
//             {isBangla ? "ARIA ও সহায়ক ট্যাগ" : "ARIA & Assistive Tags"}
//           </h2>

//           <p className="text-slate-700 mb-4">
//             {isBangla
//               ? "যদি কোনো উপাদান স্বাভাবিক HTML semantics না ধরে (উদাহরণ: কাস্টম বাটন), তবে ARIA ব্যবহার করে স্ক্রিন রিডারকে বুঝিয়ে দিতে হবে।"
//               : "When a UI element doesn't use native HTML semantics (for example a custom button), use ARIA to describe its role and name for screen readers."}
//           </p>

//           <CodeExample
//             code={`<!-- Image with alt -->
// <img src="logo.png" alt="Company logo" />

// <!-- Form label -->
// <label for="email">Email</label>
// <input id="email" name="email" type="email" />

// <!-- Custom control with ARIA -->
// <div role="button" tabindex="0" aria-pressed="false">Toggle</div>`}
//           />
//         </CardContainer>

//         {/* Practical Examples */}
//         <CardContainer>
//           <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
//             <Search className="w-5 h-5 text-blue-600" />
//             {isBangla ? "প্রায়োগিক উদাহরণ" : "Practical Examples"}
//           </h2>

//           <p className="text-slate-700 mb-3">
//             {isBangla
//               ? "নীচে কিছু গুরুত্বপূর্ণ উদাহরণ: alt, labels, title/meta, এবং keyboard-friendly কন্ট্রোল।"
//               : "Below are key examples: alt, labels, title/meta, and keyboard-friendly controls."}
//           </p>

//           <CodeExample
//             code={`<!-- Image with ALT -->
// <img src="logo.png" alt="Company logo — blue circle with 'Acme' text" />

// <!-- Form with label -->
// <label for="email">Email address</label>
// <input id="email" name="email" type="email" placeholder="you@example.com" />

// <!-- Title & meta description -->
// <head>
//   <title>How to make accessible pages</title>
//   <meta name="description" content="A short accessible page about product X." />
// </head>

// <!-- Keyboard friendly button -->
// <button onClick="openMenu()" aria-expanded="false">Open Menu</button>`}
//           />
//         </CardContainer>

//         {/* SEO basics */}
//         <CardContainer>
//           <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
//             {isBangla ? "SEO বেসিকস" : "SEO Basics"}
//           </h2>

//           <p className="text-slate-700 mb-4">
//             {isBangla
//               ? "সঠিক সেম্যান্টিক ট্যাগ, উপযুক্ত meta ট্যাগ (title, description), এবং পরিষ্কার হেডিং স্ট্রাকচার সার্চ ইঞ্জিনকে সাহায্য করে পেজটি বুঝতে। দ্রুত লোডিং, মোবাইল-ফ্রেন্ডলি পেজ এবং structured data SEO বাড়ায়।"
//               : "Semantic HTML, proper meta tags (title, description) and clear heading structure help search engines understand your page. Fast load times, mobile-friendliness and structured data improve SEO."}
//           </p>

//           <CodeExample
//             code={`<!-- Meta description -->
// <head>
//   <title>My Page Title</title>
//   <meta name="description" content="Short summary of this page for search engines" />
// </head>`}
//           />
//         </CardContainer>

//         {/* SEO Tips */}
//         <CardContainer>
//           <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
//             {isBangla ? "SEO টিপস (শর্ট)" : "SEO Tips (Short)"}
//           </h2>

//           <ul className="list-disc ml-6 text-slate-700 space-y-2">
//             <li>
//               {isBangla
//                 ? "প্রতিটি পেজে অনন্য title ও meta description রাখুন।"
//                 : "Use a unique title and meta description per page."}
//             </li>
//             <li>
//               {isBangla
//                 ? "হেডিংগুলো (h1→h2→h3) লজিক্যাল রাখুন এবং কন্টেন্টে কীবোর্ড-ফ্রেন্ডলি структуре রাখুন।"
//                 : "Use logical headings (h1→h2→h3) and well-structured content."}
//             </li>
//             <li>
//               {isBangla
//                 ? "ছবি ও মিডিয়া সঠিকভাবে লোড করুন — responsive images (srcset) ব্যবহার করুন।"
//                 : "Load images properly — use responsive images (`srcset`) when appropriate."}
//             </li>
//             <li>
//               {isBangla
//                 ? "কোনও ক্রিটিকাল কনটেন্ট জাভাস্ক্রিপ্টে লুকিয়ে রাখবেন না — সার্চ ইঞ্জিনকে দেখতে দিন।"
//                 : "Avoid hiding critical content behind JavaScript-only rendering."}
//             </li>
//           </ul>
//         </CardContainer>

//         {/* Practical checklist */}
//         <CardContainer>
//           <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
//             {isBangla ? "প্র্যাকটিক্যাল চেকলিস্ট" : "Practical Checklist"}
//           </h2>

//           <ul className="list-disc ml-6 text-slate-700 space-y-2">
//             <li>
//               {isBangla
//                 ? "সব ইমেজে alt আছে কিনা চেক করুন"
//                 : "Check all images have alt text"}
//             </li>
//             <li>
//               {isBangla
//                 ? "ফর্ম লেবেল ও ARIA সঠিক আছে কিনা দেখুন"
//                 : "Ensure form labels and ARIA are correct"}
//             </li>
//             <li>
//               {isBangla
//                 ? "কীবোর্ডে সব ইন্টারঅ্যাকটিভ আইটেম অ্যাক্সেস করা যায় কিনা পরীক্ষা করুন"
//                 : "Test that interactive items are keyboard accessible"}
//             </li>
//             <li>
//               {isBangla
//                 ? "পেজ টাইটেল ও মেটা ডেসক্রিপশন আছে কিনা যোগ করুন"
//                 : "Add page title and meta description"}
//             </li>
//           </ul>
//         </CardContainer>

//         {/* Quiz */}
//         <CardContainer>
//           <div className="flex items-center gap-3 mb-4">
//             <BookOpen className="w-6 h-6 text-blue-600" />
//             <h3 className="text-xl font-bold">{isBangla ? "কুইজ" : "Quiz"}</h3>
//           </div>

//           <QuizSection quiz={quiz} isBangla={isBangla} />
//         </CardContainer>

//         {/* Homework Section */}
//         <HomeWork data={assignment} isBangla={isBangla} />

//         {/* Navigation */}
//         <LessonNav lessonId={6} />
//       </div>
//     </div>
//   );
// }

// export default Lesson6;
