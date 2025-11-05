import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import CardSliderPage from "./page/CardSliderPage.jsx";
import TagDitilePage from "./page/TagDitilePage.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardSliderPage />,
      },
      {
        path: "/:tagname",
        element: <TagDitilePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
