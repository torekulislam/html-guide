import React from "react";
import {
  X,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Code,
  Type,
  Link,
  List,
  FormInput,
  Table,
  Layout,
  Terminal,
  Award,
  Book,
} from "lucide-react";

function SideBar() {
  const sidebarItems = [
    { id: 1, title: "Introduction", icon: BookOpen, path: "#other" },
    { id: 2, title: "HTML Basics", icon: Code, path: "/basics" },
    { id: 3, title: "Text & Headings", icon: Type, path: "/text" },
    { id: 4, title: "Links & Media", icon: Link, path: "/media" },
    { id: 5, title: "Lists", icon: List, path: "/lists" },
    { id: 6, title: "Forms", icon: FormInput, path: "/forms" },
    { id: 7, title: "Tables", icon: Table, path: "/tables" },
    { id: 8, title: "Semantic Tags", icon: Layout, path: "/semantic" },
    { id: 9, title: "Practice Playground", icon: Terminal, path: "/practice" },
    { id: 10, title: "Quizzes", icon: Award, path: "/quiz" },
    { id: 11, title: "Resources", icon: Book, path: "/resources" },
  ];

  return (
    <section className=" flex-col bg-[#f7faff] w-[40%] max-w-[300px] rounded-2xl gap-4 p-4 mt-20 mb-4 overflow-hidden min-h-[calc(100vh-87px)] shadow-[0_4px_12px_rgba(0,0,0,0.05)] hidden md:flex">
      <ul className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon; // assign the actual component
          return (
            <li key={item.id}>
              <a
                href={item.path}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#E0F2FF] transition"
              >
                <Icon className="text-[#0A74FF]" size={20} />
                <span className="text-gray-700 font-medium">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SideBar;
