import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./store/store.js";

import { Provider } from "react-redux";

import {
  Introduction,
  CardSliderPage,
  TagDitilePage,
  Lesson1,
  Lesson2,
  ErrorPage,
} from "./page";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
