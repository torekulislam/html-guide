import { matchRoutes } from "react-router";

const routes = [
  {
    path: "/",
    children: [
      { index: true, id: "home" },
      {
        path: "html",
        children: [
          { index: true, id: "introduction" },
          { path: "allTag", id: "allTag" },
          { path: "allTag/:tagname", id: "tagDetail" },
          { path: "tutorial/:lessonid", id: "lesson" },
          { path: "codeditor", id: "codeEditor" },
        ],
      },
      { path: "css", id: "css" },
      { path: "js", id: "js" },
      { path: "*", id: "notFound" },
    ],
  },
];

const urls = [
  "/",
  "/html",
  "/html/allTag",
  "/html/allTag/div",
  "/html/tutorial/lesson1",
  "/html/tutorial/lesson12",
  "/html/codeditor",
  "/css",
  "/js",
  "/nope",
  "/html/unknown/deep/path",
];

for (const url of urls) {
  const matches = matchRoutes(routes, url);
  const ids = matches ? matches.map((m) => m.route.id ?? m.route.path).join(" > ") : "NO MATCH";
  console.log(url.padEnd(28), "=>", ids);
}
