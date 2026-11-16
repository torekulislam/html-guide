import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { lessons } from "../data/htmlLessonData"; // adjust path
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LessonNav({ lessonId }) {
  const language = useSelector((s) => s.htmlStore.language);
  const isBangla = language === "BN";
  const navigate = useNavigate();

  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) return null;

  const prev = lesson.prev
    ? lessons.find((l) => l.id === lesson.prev.id)
    : null;
  const next = lesson.next
    ? lessons.find((l) => l.id === lesson.next.id)
    : null;

  return (
    <div className="flex justify-between items-center mt-8 gap-4">
      <button
        onClick={() => prev && navigate(prev.path)}
        disabled={!prev}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
          prev
            ? "bg-white hover:shadow-md"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
        <span>
          {isBangla
            ? prev
              ? prev.titleBn
              : "আগে নেই"
            : prev
            ? prev.title
            : "No Prev"}
        </span>
      </button>

      <div className="text-center text-sm text-gray-500">
        {isBangla ? "পাঠ নেভিগেশন" : "Lesson Navigation"}
      </div>

      <button
        onClick={() => next && navigate(next.path)}
        disabled={!next}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
          next
            ? "bg-blue-600 text-white hover:shadow-lg"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        <span>
          {isBangla
            ? next
              ? next.titleBn
              : "পরের নেই"
            : next
            ? next.title
            : "No Next"}
        </span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
