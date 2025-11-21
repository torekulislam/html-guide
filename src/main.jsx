import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import CardSliderPage from "./page/CardSliderPage.jsx";
import TagDitilePage from "./page/TagDitilePage.jsx";
import Introduction from "./page/Introduction.jsx";
import Lesson1 from "./page/Lesson1.jsx";
import Lesson2 from "./page/Lesson2.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

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
        path: "/tutorial/lesson1",
        element: <Lesson1 />,
      },
      {
        path: "/tutorial/lesson2",
        element: <Lesson2 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
