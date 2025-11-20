import React, { useState } from "react";
import { Globe, Code, BookOpen, Layout, Chrome } from "lucide-react";
import CodeExample from "../components/CodeExample";
import Card from "../components/Card";
// const CodeExample = ({ code }) => (
//   <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
//     <pre className="text-green-400 font-mono text-sm">{code}</pre>
//   </div>
// );

function Introduction() {
  const [isBangla, setIsBangla] = useState(false);

  return (
    <div className="min-h-screen ">
      {/* Header */}

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <Card className="bg-linear-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex gap-2 justify-between items-start">
            <h2 className="text-4xl font-bold mb-4">
              {isBangla ? "HTML ভূমিকা" : "HTML Introduction"}
            </h2>
            <button
              onClick={() => setIsBangla(!isBangla)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all"
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-blue-600">
                {isBangla ? "English" : "বাংলা"}
              </span>
            </button>
          </div>
          <p className="text-xl text-blue-50">
            {isBangla
              ? "HTML হল ওয়েব পেজ তৈরির জন্য স্ট্যান্ডার্ড মার্কআপ ল্যাঙ্গুয়েজ।"
              : "HTML is the standard markup language for creating web pages."}
          </p>
        </Card>

        {/* What is HTML */}
        <Card className="bg-white rounded-2xl p-8 shadow-md border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-7 h-7 text-blue-600" />
            <h3 className="text-3xl font-bold text-gray-800">
              {isBangla ? "HTML কি?" : "What is HTML?"}
            </h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {isBangla
                  ? "HTML এর অর্থ হল হাইপার টেক্সট মার্কআপ ল্যাঙ্গুয়েজ"
                  : "HTML stands for Hyper Text Markup Language"}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {isBangla
                  ? "HTML একটি ওয়েব পেজের গঠন বর্ণনা করে"
                  : "HTML describes the structure of a web page"}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {isBangla
                  ? "HTML এলিমেন্ট ব্রাউজারকে বলে কিভাবে কন্টেন্ট প্রদর্শন করতে হয়"
                  : "HTML elements tell the browser how to display content"}
              </span>
            </li>
          </ul>
        </Card>

        {/* Simple Example */}
        <Card className="bg-white rounded-2xl p-8 shadow-md border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {isBangla ? "একটি সহজ HTML ডকুমেন্ট" : "A Simple HTML Document"}
          </h3>
          <CodeExample
            code={`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`}
          />
        </Card>
        {/* Example Explained */}
        <Card className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            {isBangla ? "উদাহরণ ব্যাখ্যা" : "Example Explained"}
          </h2>
          <div className="space-y-3 text-slate-700">
            <div className="flex items-start gap-3">
              <code className="shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded">
                &lt;!DOCTYPE html&gt;
              </code>
              <p className="text-sm leading-relaxed">
                {isBangla
                  ? "ঘোষণা করে যে এটি একটি HTML5 ডকুমেন্ট"
                  : "Declares that this document is an HTML5 document"}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <code className="shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded">
                &lt;html&gt;
              </code>
              <p className="text-sm leading-relaxed">
                {isBangla
                  ? "HTML পৃষ্ঠার মূল এলিমেন্ট"
                  : "The root element of an HTML page"}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <code className="shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded">
                &lt;head&gt;
              </code>
              <p className="text-sm leading-relaxed">
                {isBangla
                  ? "HTML পৃষ্ঠা সম্পর্কে মেটা তথ্য ধারণ করে"
                  : "Contains meta information about the HTML page"}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <code className="shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded">
                &lt;title&gt;
              </code>
              <p className="text-sm leading-relaxed">
                {isBangla
                  ? "HTML পৃষ্ঠার জন্য একটি শিরোনাম নির্দিষ্ট করে (যা ব্রাউজারের টাইটেল বারে বা ট্যাবে দেখায়)"
                  : "Specifies a title for the HTML page (shown in browser's title bar or tab)"}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <code className="shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded">
                &lt;body&gt;
              </code>
              <p className="text-sm leading-relaxed">
                {isBangla
                  ? "ডকুমেন্টের বডি সংজ্ঞায়িত করে এবং সমস্ত দৃশ্যমান কন্টেন্ট ধারণ করে"
                  : "Defines the document's body and contains all visible contents like headings, paragraphs, images, links, tables, lists, etc."}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <code className="shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded">
                &lt;h1&gt;
              </code>
              <p className="text-sm leading-relaxed">
                {isBangla
                  ? "একটি বড় শিরোনাম সংজ্ঞায়িত করে"
                  : "Defines a large heading"}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <code className="shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded">
                &lt;p&gt;
              </code>
              <p className="text-sm leading-relaxed">
                {isBangla
                  ? "একটি অনুচ্ছেদ সংজ্ঞায়িত করে"
                  : "Defines a paragraph"}
              </p>
            </div>
          </div>
        </Card>

        {/* HTML Element Structure */}
        <Card className="bg-white rounded-2xl p-8 shadow-md border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {isBangla ? "HTML এলিমেন্ট কী?" : "What is an HTML Element?"}
          </h3>
          <p className="text-gray-700 mb-6">
            {isBangla
              ? "একটি HTML উপাদান একটি স্টার্ট ট্যাগ, কিছু কন্টেন্ট এবং একটি এন্ড ট্যাগ দ্বারা সংজ্ঞায়িত:"
              : "An HTML element is defined by a start tag, content, and an end tag:"}
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6 mb-6">
            <code className="font-mono text-lg text-gray-800">
              <span className="text-gray-500">&lt;</span>
              <span className="text-blue-600 font-semibold">tagname</span>
              <span className="text-gray-500">&gt;</span>
              <span className="text-gray-700"> Content goes here... </span>
              <span className="text-gray-500">&lt;/</span>
              <span className="text-blue-600 font-semibold">tagname</span>
              <span className="text-gray-500">&gt;</span>
            </code>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">
                    {isBangla ? "শুরু ট্যাগ" : "Start Tag"}
                  </th>
                  <th className="p-3 text-left">
                    {isBangla ? "কন্টেন্ট" : "Content"}
                  </th>
                  <th className="p-3 text-left">
                    {isBangla ? "শেষ ট্যাগ" : "End Tag"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-100">
                  <td className="p-3">
                    <code>&lt;h1&gt;</code>
                  </td>
                  <td className="p-3">
                    {isBangla ? "আমার প্রথম শিরোনাম" : "My First Heading"}
                  </td>
                  <td className="p-3">
                    <code>&lt;/h1&gt;</code>
                  </td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="p-3">
                    <code>&lt;p&gt;</code>
                  </td>
                  <td className="p-3">
                    {isBangla ? "আমার প্রথম অনুচ্ছেদ" : "My First Paragraph"}
                  </td>
                  <td className="p-3">
                    <code>&lt;/p&gt;</code>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <code>&lt;br&gt;</code>
                  </td>
                  <td className="p-3 text-gray-500">none</td>
                  <td className="p-3 text-gray-500">none</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Page Structure */}
        <Card className="bg-white rounded-2xl p-8 shadow-md border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <Layout className="w-7 h-7 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">
              {isBangla ? "HTML পৃষ্ঠার কাঠামো" : "HTML Page Structure"}
            </h3>
          </div>

          <div className="border-2 border-blue-300 rounded-xl p-4 bg-blue-50 font-mono text-sm">
            <div className="mb-2">&lt;html&gt;</div>
            <div className="ml-4 border-2 border-blue-400 bg-white p-3 rounded mb-2">
              <div>&lt;head&gt;</div>
              <div className="ml-4 border border-blue-300 bg-blue-50 p-2 rounded my-1">
                &lt;title&gt;Page title&lt;/title&gt;
              </div>
              <div>&lt;/head&gt;</div>
            </div>
            <div className="ml-4 border-2 border-blue-400 bg-white p-3 rounded mb-2">
              <div>&lt;body&gt;</div>
              <div className="ml-4 space-y-2 my-2">
                <div className="border border-blue-300 bg-blue-50 p-2 rounded">
                  &lt;h1&gt;This is a heading&lt;/h1&gt;
                </div>
                <div className="border border-blue-300 bg-blue-50 p-2 rounded">
                  &lt;p&gt;This is a paragraph.&lt;/p&gt;
                </div>
              </div>
              <div>&lt;/body&gt;</div>
            </div>
            <div>&lt;/html&gt;</div>
          </div>
        </Card>

        {/* Browser Info */}
        <Card className="bg-linear-to-br from-blue-600 to-blue-500 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Chrome className="w-8 h-8" />
            <h3 className="text-2xl font-bold">
              {isBangla ? "ওয়েব ব্রাউজার" : "Web Browsers"}
            </h3>
          </div>
          <p className="text-blue-50 text-lg">
            {isBangla
              ? "একটি ওয়েব ব্রাউজারের উদ্দেশ্য হল HTML ডকুমেন্ট পড়া এবং সঠিকভাবে প্রদর্শন করা।"
              : "A web browser's purpose is to read HTML documents and display them correctly."}
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Introduction;
