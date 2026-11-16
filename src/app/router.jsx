import { createBrowserRouter } from "react-router";
import App from "./App";
import ComingSoonPage from "../pages/ComingSoonPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../shared/components/ErrorPage";
import CardSliderPage from "../features/html/pages/CardSliderPage";
import { HtmlPage } from "../features/html/pages/HtmlPage";
import Introduction from "../features/html/pages/Introduction";
import LessonPage from "../features/html/pages/LessonPage";
import TagDitilePage from "../features/html/pages/TagDitilePage";
import HtmlCodeEditorPage from "../features/html/pages/htmlCodeEditorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "html",
        element: <HtmlPage />,
        children: [
          { index: true, element: <Introduction /> },
          { path: "allTag", element: <CardSliderPage /> },
          { path: "allTag/:tagname", element: <TagDitilePage /> },
          { path: "tutorial/:lessonid", element: <LessonPage /> },
          { path: "codeditor", element: <HtmlCodeEditorPage /> },
        ],
      },
      {
        path: "css",
        element: (
          <ComingSoonPage
            title="CSS"
            titleBn="সিএসএস"
            color="#1572B6"
            tagline="Style & Layout"
            taglineBn="স্টাইল ও লেআউট"
          />
        ),
      },
      {
        path: "js",
        element: (
          <ComingSoonPage
            title="JavaScript"
            titleBn="জাভাস্ক্রিপ্ট"
            color="#F7DF1E"
            tagline="Behavior & Logic"
            taglineBn="আচরণ ও লজিক"
          />
        ),
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
