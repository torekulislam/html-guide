import React, { useState } from "react";
import { Globe, Code2, Info, Zap, Settings } from "lucide-react";
import { motion } from "framer-motion";

import CodeExample from "./CodeExample";
import Card from "./Card";

export default function HTMLTagViewer({ tagData }) {
  const [language, setLanguage] = useState("bn");
  const [activeTab, setActiveTab] = useState("overview");

  const isBengali = language === "bn";

  return (
    <>
      <div className="max-w-6xl w-[97%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <Card className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 mb-8  gap-4 shadow-[0_8px_32px_rgba(31,38,135,0.1)]  hover:shadow-[0_2px_40px_rgba(10,116,255,0.25)] text-white ">
          <div className=" w-full">
            <div className="flex flex-row-reverse items-center justify-between w-full">
              <button
                onClick={() => setLanguage(language === "en" ? "bn" : "en")}
                className="flex items-center gap-2 px-4 py-2 bg-[#a5cdf538] bg-opacity-10  rounded-lg transition-colors hover:shadow-[0_12px_40px_rgba(10,116,255,0.25)]"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">
                  {language === "en" ? "বাংলা" : "English"}
                </span>
              </button>
              <div className="inline-block px-3 py-1 bg-[#a5cdf538] bg-opacity-20 rounded-full text-sm font-medium mb-3 shadow">
                {tagData?.category}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              &lt;{tagData?.name}&gt;
            </h1>
            <p className="text-lg text-blue-100">
              {isBengali ? tagData?.definitionBn : tagData?.definition}
            </p>

            <div className="bg-[#a5cdf538] bg-opacity-10  rounded-xl p-4 shadow border-white border-opacity-20 mt-7 w-fit">
              <div className="text-sm text-blue-100 mb-1">Syntax</div>
              <code className="text-white font-mono text-lg">
                {tagData?.syntax}
              </code>
            </div>
          </div>
        </Card>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex gap-2 mb-6 overflow-x-auto"
        >
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Info className="w-4 h-4" />
            {isBengali ? "সংক্ষিপ্ত বিবরণ" : "Overview"}
          </button>
          <button
            onClick={() => setActiveTab("example")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === "example"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Code2 className="w-4 h-4" />
            {isBengali ? "উদাহরণ" : "Example"}
          </button>
          <button
            onClick={() => setActiveTab("usage")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === "usage"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Zap className="w-4 h-4" />
            {isBengali ? "ব্যবহার" : "Usage"}
          </button>
          <button
            onClick={() => setActiveTab("attributes")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === "attributes"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Settings className="w-4 h-4" />
            {isBengali ? "অ্যাট্রিবিউটস" : "Attributes"}
          </button>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8"
        >
          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isBengali ? "সম্পর্কে" : "About"}
              </h2>
              <pre className="text-gray-700 text-lg leading-loose inline-block whitespace-pre-wrap">
                {isBengali ? tagData?.aboutBn : tagData?.about}
              </pre>
            </div>
          )}

          {activeTab === "example" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isBengali ? "কোড উদাহরণ" : "Code Example"}
              </h2>
              <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-xl p-6 overflow-x-auto">
                <CodeExample code={tagData?.codeExample} />
              </div>
            </div>
          )}

          {activeTab === "usage" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isBengali ? "ব্যবহারের ক্ষেত্র" : "Use Case"}
              </h2>
              <div className="bg-linear-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 rounded-lg p-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  {isBengali ? tagData?.useCaseBn : tagData?.useCase}
                </p>
              </div>
            </div>
          )}

          {activeTab === "attributes" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isBengali ? "অ্যাট্রিবিউটস" : "Attributes"}
              </h2>
              <div className="space-y-4">
                {tagData?.attributes?.map((attr, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-blue-600">
                        {attr?.name}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Attribute
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {isBengali ? attr?.descriptionBn : attr?.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-2">EXAMPLE</div>
                      {/* <code className="text-blue-600 font-mono">
                        {attr.example}
                            </code> */}
                      <CodeExample code={attr?.example} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}
