import React, { useState, useEffect } from "react";

import {
  BookOpen,
  Code,
  Type,
  List,
  FormInput,
  Table,
  Globe,
  Layout,
  Terminal,
  Award,
  Book,
  Tags,
  ChevronDown,
  ChevronUp,
  Link as LinkIcon,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/htmlSlice";
function SideBar({ isHiden = true, setShow }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const ln = useSelector((state) => state.htmlStore.language);
  const [lang, setLang] = useState(ln);
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // const sidebarItems = [
  //   { id: 1, title: "Introduction", icon: BookOpen, path: "/" },

  //   {
  //     id: 2,
  //     title: "Tutorial",
  //     icon: BookOpen,
  //     // path: "/tutorial",

  //     children: [
  //       {
  //         id: 2.1,
  //         title: "Lesson 1",

  //         path: "/tutorial/lesson1",
  //       },
  //       {
  //         id: 2.2,
  //         title: "Lesson 2",

  //         path: "/tutorial/lesson2",
  //       },
  //     ],
  //   },
  //   { id: 12, title: "All Tage", icon: Tags, path: "/allTag" },
  //   // { id: 2, title: "HTML Basics", icon: Code, path: "/basics" },
  //   // { id: 3, title: "Text & Headings", icon: Type, path: "/text" },
  //   // { id: 4, title: "Links & Media", icon: LinkIcon, path: "/media" },
  //   // { id: 5, title: "Lists", icon: List, path: "/lists" },
  //   // { id: 6, title: "Forms", icon: FormInput, path: "/forms" },
  //   // { id: 7, title: "Tables", icon: Table, path: "/tables" },
  //   // { id: 8, title: "Semantic Tags", icon: Layout, path: "/semantic" },
  //   // { id: 9, title: "Practice Playground", icon: Terminal, path: "/practice" },
  //   // { id: 10, title: "Quizzes", icon: Award, path: "/quiz" },
  //   // { id: 11, title: "Resources", icon: Book, path: "/resources" },
  // ];
  const sidebarItems = [
    {
      id: 1,
      title: "Introduction",
      titleBn: "ভূমিকা",
      icon: BookOpen,
      path: "/",
    },

    {
      id: 2,
      title: "Tutorial",
      titleBn: "টিউটোরিয়াল",
      icon: BookOpen,

      children: [
        {
          id: 2.1,
          title: "Lesson 1",
          titleBn: "পাঠ ১",
          path: "/tutorial/lesson1",
        },
        {
          id: 2.2,
          title: "Lesson 2",
          titleBn: "পাঠ ২",
          path: "/tutorial/lesson2",
        },
        {
          id: 2.3,
          title: "Lesson 3",
          titleBn: "পাঠ ৩",
          path: "/tutorial/lesson3",
        },
        {
          id: 2.4,
          title: "Lesson 4",
          titleBn: "পাঠ ৪",
          path: "/tutorial/lesson4",
        },
        {
          id: 2.5,
          title: "Lesson 5",
          titleBn: "পাঠ ৫",
          path: "/tutorial/lesson5",
        },
        {
          id: 2.6,
          title: "Lesson 6",
          titleBn: "পাঠ ৬",
          path: "/tutorial/lesson6",
        },
        {
          id: 2.7,
          title: "Lesson 7",
          titleBn: "পাঠ ৭",
          path: "/tutorial/lesson7",
        },
        {
          id: 2.8,
          title: "Lesson8",
          titleBn: "পাঠ ৮",
          path: "/tutorial/lesson8",
        },
        {
          id: 2.9,
          title: "Lesson9",
          titleBn: "পাঠ ৯",
          path: "/tutorial/lesson9",
        },
        {
          id: 2.1,
          title: "Lesson10",
          titleBn: "পাঠ ১০",
          path: "/tutorial/lesson10",
        },
        {
          id: 2.11,
          title: "Lesson11",
          titleBn: "পাঠ ১১",
          path: "/tutorial/lesson11",
        },
        {
          id: 2.12,
          title: "Lesson12",
          titleBn: "পাঠ ১২",
          path: "/tutorial/lesson12",
        },
      ],
    },

    {
      id: 12,
      title: "All Tags",
      titleBn: "সমস্ত ট্যাগ",
      icon: Tags,
      path: "/allTag",
    },
  ];

  const language = {
    id: 14,
    title: "Language",
    titleBn: "ভাষা",
    icon: Globe,
    path: "/resources",
    children: [
      { title: "বাংলা", sortName: "BN" },
      { title: "English", sortName: "EN" },
    ],
  };

  useEffect(() => {
    dispatch(changeLanguage(lang));
  }, [lang]);

  useEffect(() => {
    const activeItem = sidebarItems.find((item) => {
      if (item?.children) {
        let a;
        item?.children?.map((i) => {
          if (i?.path === location?.pathname) {
            a = true;
            return;
          }
        });
        return a;
      } else {
        return item?.path === location?.pathname;
      }
    });

    const newValue = activeItem?.title;

    if (newValue) {
      // setValue(activeItem?.title || "html-guide-v1");
      document.title = `${newValue} | html-guide-app`;
    }
  }, [location]);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex-col bg-[#f7faff] w-[90%] md:w-[40%] max-w-[300px] rounded-2xl gap-4 p-4 mt-20 mb-4  overflow-y-scroll md:overflow-hidden .hide-scrollbar-x  h-[calc(100vh-110px)] md:h-full md:min-h-[calc(100vh-50px)] shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${
        isHiden ? "hidden md:flex" : "flex md:hidden"
      } absolute top-7 shadow-[1px_1px_15px_#ddd] left-4 z-30 md:sticky `}
    >
      <ul className="space-y-2 ">
        {sidebarItems.map((item) => {
          const Icon = item?.icon;

          // ---- Items with children (Tutorial) ----
          if (item.children) {
            return (
              <li key={item.id}>
                <button
                  onClick={() => toggle(item.id)}
                  className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-[#E0F2FF] transition"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-[#0A74FF]" size={20} />
                    <span className="text-gray-700 font-medium">
                      {lang === "EN" ? item.title : item.titleBn}
                    </span>
                  </div>

                  {openId === item.id ? (
                    <ChevronUp className="text-[#0A74FF]" size={18} />
                  ) : (
                    <ChevronDown className="text-[#0A74FF]" size={18} />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openId === item.id && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-8 mt-2 space-y-1 overflow-hidden"
                    >
                      {item.children.map((d) => (
                        <li key={d?.path} onClick={() => setShow(false)}>
                          <NavLink
                            aria-label={d?.path}
                            to={d?.path}
                            className={({ isActive }) =>
                              `flex items-center gap-2 p-2 rounded-md text-gray-600 hover:bg-[#E6F3FF] transition ${
                                isActive ? "bg-[#bfe2fd] " : ""
                              }`
                            }
                          >
                            • {lang === "EN" ? d.title : d.titleBn}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          }

          // ---- Items without children ----
          return (
            <li key={item.id} onClick={() => setShow(false)}>
              <NavLink
                aria-label={item?.path}
                to={item?.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg hover:bg-[#E0F2FF] transition ${
                    isActive ? "bg-[#bfe2fd] " : ""
                  }`
                }
              >
                <Icon className="text-[#0A74FF]" size={20} />
                <span className="text-gray-700 font-medium">
                  {lang === "EN" ? item.title : item.titleBn}
                </span>
              </NavLink>
            </li>
          );
        })}
        {/* Language change section */}
        <li>
          <button
            onClick={() => toggle(language.id)}
            className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-[#E0F2FF] transition"
          >
            <div className="flex items-center gap-3">
              <Globe className="text-[#0A74FF]" size={20} />
              <span className="text-gray-700 font-medium">
                {lang === "EN" ? language.title : language.titleBn}
              </span>
            </div>

            {openId === language.id ? (
              <ChevronUp className="text-[#0A74FF]" size={18} />
            ) : (
              <ChevronDown className="text-[#0A74FF]" size={18} />
            )}
          </button>

          <AnimatePresence initial={false}>
            {openId === language.id && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-8 mt-2 space-y-1 overflow-hidden"
              >
                {language.children.map((d) => (
                  <li key={d?.sortName} onClick={() => setLang(d?.sortName)}>
                    <div
                      aria-label={d?.title}
                      className={`flex items-center gap-2 p-2 rounded-md text-gray-600 hover:bg-[#E6F3FF] transition ${
                        d.sortName === lang ? "bg-[#bfe2fd] " : ""
                      }`}
                    >
                      • {d.title}
                    </div>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </motion.aside>
  );
}

export default SideBar;
