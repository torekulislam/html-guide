import React from "react";
import { Clipboard } from "lucide-react";
import Card from "./Card";
function HomeWork({ data, isBangla }) {
  return (
    <Card className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Clipboard className="w-7 h-7 text-blue-600" />
        <h2 className="text-2xl font-bold">
          {isBangla ? "হোমওয়ার্ক" : "Homework"}
        </h2>
      </div>

      <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
        <h3 className="font-bold text-lg mb-2">
          {isBangla ? "অ্যাসাইনমেন্ট 1" : "Assignment 1"}
        </h3>
        <ul className="space-y-1 ml-5 text-slate-700">
          {data?.map((item, index) => (
            <li key={index}>• {isBangla ? item?.bn : item?.en}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default HomeWork;
