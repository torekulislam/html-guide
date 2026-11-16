import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./src/store/store.js";
import App from "./src/App.jsx";
import HomePage from "./src/page/HomePage.jsx";
import Introduction from "./src/page/Introduction.jsx";
import ComingSoonPage from "./src/page/ComingSoonPage.jsx";
import ErrorPage from "./src/components/ErrorPage.jsx";
import { HtmlPage } from "./src/page/HtmlPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "html",
        element: <HtmlPage />,
        children: [{ index: true, element: <Introduction /> }],
      },
      { path: "css", element: <ComingSoonPage title="CSS" color="#1572B6" /> },
      { path: "js", element: <ComingSoonPage title="JavaScript" color="#F7DF1E" /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

const urls = ["/", "/html", "/css", "/js", "/not-a-page"];

for (const url of urls) {
  const router = createMemoryRouter(routes, { initialEntries: [url] });
  const html = renderToStaticMarkup(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  );
  const has = (t) => (html.includes(t) ? "YES" : "no ");
  console.log(
    url.padEnd(14),
    `len=${String(html.length).padEnd(7)}`,
    `cards[HTML/CSS/JS]=${has("HTML")}${has("CSS")}/${has("JavaScript")}`.padEnd(22),
    `404=${has("Page Not Found")}`,
    `comingSoon=${has("Coming soon")}`,
    `intro=${has("HTML Introduction")}`,
  );
}
console.log("SSR smoke test OK");
