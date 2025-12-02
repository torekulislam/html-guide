import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import Card from "./Card";
function QuizSection({ quiz, isBangla }) {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (id, idx) =>
    setQuizAnswers({ ...quizAnswers, [id]: idx });

  const calculateScore = () =>
    //Answer calculate
    quiz.filter((q) => quizAnswers[q.id] === q.correct).length;

  return (
    <Card className="bg-sky-50 backdrop-blur-2xl  border shadow-sm border-blue-200 rounded-xl p-4 py-8 sm:p-8">
      <div className="flex gap-3 items-center mb-4">
        <BookOpen className="w-7 h-7 text-blue-600" />
        <h2 className="text-2xl font-bold text-slate-900">
          {isBangla ? "কুইজ সময়!" : "Quiz Time!"}
        </h2>
      </div>

      {quiz.map((q, index) => (
        <div
          key={q.id}
          className="bg-white border-b border-slate-200 p-4 rounded-lg  mb-5 shadow hover:shadow-xs duration-300"
        >
          <p className="font-semibold">
            {index + 1}. {isBangla ? q?.question?.bn : q?.question?.en}
          </p>

          {q.options.map((o, i) => (
            <label
              key={i}
              className={`flex items-center gap-3 p-2 border rounded-lg cursor-pointer mt-2
                    ${
                      quizAnswers[q.id] === i
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200"
                    }
                    ${
                      showResults && i === q.correct
                        ? "border-green-500 bg-green-50"
                        : ""
                    }
                    ${
                      showResults && quizAnswers[q.id] === i && i !== q.correct
                        ? "border-red-500 bg-red-50"
                        : ""
                    }
                  `}
            >
              <input
                type="radio"
                name={`q-${q.id}`}
                disabled={showResults}
                checked={quizAnswers[q.id] === i}
                onChange={() => handleAnswer(q.id, i)}
              />
              <span>{o}</span>
            </label>
          ))}
        </div>
      ))}

      {!showResults ? (
        <button
          onClick={() => setShowResults(true)}
          disabled={Object.keys(quizAnswers).length !== quiz.length}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold disabled:bg-slate-300"
        >
          {isBangla ? "জমা দিন" : "Submit"}
        </button>
      ) : (
        <div className="p-4 shadow bg-white border-b border-slate-200 rounded-xl mt-4">
          <h3 className="text-xl font-bold">{isBangla ? "স্কোর" : "Score"}</h3>
          <p className="text-3xl font-bold text-blue-600">
            {calculateScore()} / {quiz.length}
          </p>
        </div>
      )}
    </Card>
  );
}

export default QuizSection;
