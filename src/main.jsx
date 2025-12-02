import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./store/store.js";

import { Provider } from "react-redux";

import { Introduction, CardSliderPage, TagDitilePage, ErrorPage } from "./page";
import LessonPage from "./page/LessonPage.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Introduction />,
      },
      {
        path: "/allTag",
        element: <CardSliderPage />,
      },
      {
        path: "/allTag/:tagname",
        element: <TagDitilePage />,
      },
      {
        path: "/:error",
        element: <ErrorPage />,
      },
      {
        path: "/tutorial/:lessonid",
        element: <LessonPage />,
      },
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
