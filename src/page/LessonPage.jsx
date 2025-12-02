import { useParams } from "react-router-dom";
import {
  ErrorPage,
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson7,
  Lesson8,
  Lesson9,
  Lesson10,
  Lesson11,
  Lesson12,
} from "./index";

const lessonsMap = {
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson7,
  Lesson8,
  Lesson9,
  Lesson10,
  Lesson11,
  Lesson12,
};

export default function LessonPage() {
  const { lessonid } = useParams(); // "lesson1", "lesson2", etc.

  const renderLesson = () => {
    const formatted = lessonid.charAt(0).toUpperCase() + lessonid.slice(1); // "Lesson1"
    const LessonComponent = lessonsMap[formatted] || ErrorPage;
    return <LessonComponent />;
  };

  return <>{renderLesson()}</>;
}
