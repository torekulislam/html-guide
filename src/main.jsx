import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./store/store.js";

import { Provider } from "react-redux";

import {
  HomePage,
  Introduction,
  CardSliderPage,
  TagDitilePage,
  ErrorPage,
  HtmlCodeEditorPage,
  HtmlPage,
  ComingSoonPage,
} from "./page";
import LessonPage from "./page/LessonPage.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Landing page -> "/"
      { index: true, element: <HomePage /> },

      // HTML guide section -> "/html/..."
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

      // Upcoming sections -> "/css" , "/js"
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

      // Any unknown url -> 404 page
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
