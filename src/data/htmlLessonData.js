export const lessons = [
    {
        id: 1,
        title: "Lesson 1",
        titleBn: "পাঠ ১",
        path: "/tutorial/lesson1",
        prev: null,
        next: { id: 2, path: "/tutorial/lesson2", title: "Lesson2", titleBn: "পাঠ ২" },

        quiz: [
            {
                id: 1, question: { en: "What does HTML stand for?", bn: "HTML এর পূর্ণরূপ কি?" },
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], correct: 0
            },
            {
                id: 2, question: { en: "What is the root element of an HTML page?", bn: "HTML পৃষ্ঠার মূল এলিমেন্ট কোনটি?" },
                options: ["<body>", "<html>", "<head>"], correct: 1
            },
            {
                id: 3, question: { en: "Which tag declares an HTML5 document?", bn: "কোন ট্যাগটি HTML5 ডকুমেন্ট ঘোষণা করে?" },
                options: ["<!DOCTYPE html>", "<html5>", "<meta>"], correct: 0
            },
            {
                id: 4, question: { en: "Where does visible content go?", bn: "দৃশ্যমান কন্টেন্ট কোথায় থাকে?" },
                options: ["<head>", "<title>", "<body>"], correct: 2
            }
        ],

        assignment: [
            { en: "Create an HTML file", bn: "একটি HTML ফাইল তৈরি করুন" },
            { en: "Write one paragraph", bn: "একটি paragraph লিখুন" },
            { en: "Use bold, italic, and underline", bn: "Bold, italic ও underline ব্যবহার করুন" },
            { en: "Add a Google link", bn: "একটি Google লিংক দিন" }
        ]
    },

    {
        id: 2,
        title: "Lesson 2",
        titleBn: "পাঠ ২",
        path: "/tutorial/lesson2",
        prev: { id: 1, path: "/tutorial/lesson1", title: "Lesson1", titleBn: "পাঠ ১" },
        next: { id: 3, path: "/tutorial/lesson3", title: "Lesson3", titleBn: "পাঠ ৩" },

        quiz: [
            {
                id: 1, question: { en: "Which tag makes text bold?", bn: "Bold করার ট্যাগ কোনটি?" },
                options: ["<b>", "<i>", "<u>"], correct: 0
            },
            {
                id: 2, question: { en: "Which tag makes text italic?", bn: "Italic টেক্সট কোন ট্যাগ দিয়ে করা হয়?" },
                options: ["<i>", "<strong>", "<mark>"], correct: 0
            },
            {
                id: 3, question: { en: "Which tag is used for creating a link?", bn: "একটি লিংকের জন্য কোন ট্যাগ ব্যবহার করা হয়?" },
                options: ["<a>", "<link>", "<href>"], correct: 0
            },
            {
                id: 4, question: { en: "Which tag creates underline?", bn: "Underline এর জন্য কোন ট্যাগ?" },
                options: ["<u>", "<line>", "<span>"], correct: 0
            }
        ],

        assignment: [
            { en: "Create an HTML file", bn: "একটি HTML ফাইল তৈরি করুন" },
            { en: "Write one paragraph", bn: "একটি paragraph লিখুন" },
            { en: "Use bold, italic, and underline", bn: "Bold, italic ও underline ব্যবহার করুন" },
            { en: "Add a Google link", bn: "একটি Google লিংক দিন" }
        ]
    },

    {
        id: 3,
        title: "Lesson 3",
        titleBn: "পাঠ ৩",
        path: "/tutorial/lesson3",
        prev: { id: 2, path: "/tutorial/lesson2", title: "Lesson2", titleBn: "পাঠ ২" },
        next: { id: 4, path: "/tutorial/lesson4", title: "Lesson4", titleBn: "পাঠ ৪" },

        quiz: [
            {
                id: 1, question: { en: "Which tag is used to add an image?", bn: "ইমেজ যোগ করার জন্য কোন ট্যাগ ব্যবহার করা হয়?" },
                options: ["<img>", "<image>", "<picture>"], correct: 0
            },
            {
                id: 2, question: { en: "Which attribute defines the image source?", bn: "কোন অ্যাট্রিবিউট ইমেজের উৎস নির্ধারণ করে?" },
                options: ["src", "href", "alt"], correct: 0
            },
            {
                id: 3, question: { en: "Which tag creates an ordered list?", bn: "অনর্ডারড লিস্ট তৈরি করতে কোন ট্যাগ ব্যবহার করা হয়?" },
                options: ["<ul>", "<ol>", "<li>"], correct: 1
            },
            {
                id: 4, question: { en: "Which tag represents a list item?", bn: "লিস্ট আইটেম কোন ট্যাগে থাকে?" },
                options: ["<li>", "<item>", "<list>"], correct: 0
            }
        ],

        assignment: [
            { en: "Create an HTML file with an image", bn: "একটি HTML ফাইল তৈরি করুন, একটি ইমেজ দেখান" },
            { en: "Add alt text to the image", bn: "ইমেজে alt টেক্সট যোগ করুন" },
            { en: "Create an ordered and an unordered list", bn: "একটি ordered ও একটি unordered লিস্ট তৈরি করুন" },
            { en: "Use images inside list items", bn: "লিস্ট আইটেমের মধ্যে একটি ইমেজ ব্যবহার করুন" }
        ]
    },
    {
        id: 4,
        title: "Lesson 4",
        titleBn: "পাঠ ৪",
        path: "/tutorial/lesson4",
        prev: { id: 3, path: "/tutorial/lesson3", title: "Lesson3", titleBn: "পাঠ ৩" },
        next: { id: 5, path: "/tutorial/lesson5", title: "Lesson 5", titleBn: "পাঠ ৫" },

        quiz: [
            {
                id: 1, question: { en: "Which tag is used to create a form?", bn: "ফর্মের মূল ট্যাগ কোনটি?" },
                options: ["<form>", "<input>", "<fieldset>"], correct: 0
            },
            {
                id: 2, question: { en: "Which input type helps with email validation?", bn: "কোন ইনপুট টাইপ ব্যবহার করলে ইমেইল ভ্যালিডেশন সহজ হয়?" },
                options: ["text", "email", "tel"], correct: 1
            },
            {
                id: 3, question: { en: "Which input attribute sends the name/value pair on submit?", bn: "কোন ইনপুট অ্যাট্রিবিউট সাবমিট করার সময় নাম পাঠায়?" },
                options: ["id", "name", "class"], correct: 1
            },
            {
                id: 4, question: { en: "Which button type submits the form?", bn: "কোন বাটন ফর্ম সাবমিট করে?" },
                options: ["button", "submit", "reset"], correct: 1
            }
        ],

        assignment: [
            { en: "Create a contact form with name, email, message and submit button", bn: "নাম, ইমেইল, মেসেজ ও সাবমিট বাটনসহ একটি যোগাযোগ ফর্ম তৈরি করুন" },
            { en: "Use proper input types (email, tel) and add labels", bn: "সঠিক input type ব্যবহার করুন (email, tel) এবং label যোগ করুন" },
            { en: "Add basic client-side validation using HTML attributes", bn: "HTML অ্যাট্রিবিউট ব্যবহার করে বেসিক ক্লায়েন্ট-সাইড ভ্যালিডেশন যোগ করুন" },
            { en: "Style the form with simple CSS or Tailwind classes", bn: "টেইলউইন্ড বা সিম্পল CSS দিয়ে ফর্ম স্টাইল করুন" }
        ]
    },
    {
        id: 5,
        title: "Lesson 5",
        titleBn: "পাঠ ৫",
        path: "/tutorial/lesson5",
        prev: { id: 4, path: "/tutorial/lesson4", title: "Lesson 4", titleBn: "পাঠ ৪" },
        next: { id: 6, path: "/tutorial/lesson6", title: "Lesson 6", titleBn: "পাঠ ৬" },

        quiz: [
            {
                id: 1,
                question: {
                    bn: "HTML টেবিল তৈরি করার জন্য কোন ট্যাগ ব্যবহার করা হয়?",
                    en: "Which tag is used to create a table in HTML?",
                },
                options: ["<table>", "<tr>", "<td>"],
                correct: 0,
            },
            {
                id: 2,
                question: {
                    bn: "টেবিলের সারি তৈরি করার ট্যাগ কোনটি?",
                    en: "Which tag defines a row in a table?"
                },
                options: ["<th>", "<tr>", "<td>"],
                correct: 1,
            },
            {
                id: 3,
                question:
                {
                    bn: "টেবিলের হেডার সেল কোন ট্যাগ ব্যবহার করে তৈরি করা হয়?",
                    en: "Which tag is used for table header cells?"
                },
                options: ["<td>", "<tr>", "<th>"],
                correct: 2,
            },
            {
                id: 4,
                question: {
                    bn: "একটি টেবিলের সাধারণ সেল কোন ট্যাগ ব্যবহার করে তৈরি হয়?",
                    en: "Which tag is used for a normal table cell?"
                },
                options: ["<td>", "<th>", "<tr>"],
                correct: 0,
            },
        ],

        assignment: [
            {
                en: "Create a table with 3 rows and 3 columns",
                bn: "৩ সারি এবং ৩ কলামসহ একটি টেবিল তৈরি করুন",
            },
            {
                en: "Add header cells for each column",
                bn: "প্রতিটি কলামের জন্য হেডার সেল যোগ করুন",
            },
            {
                en: "Fill the table with sample data",
                bn: "টেবিলটি নমুনা ডেটা দিয়ে পূরণ করুন",
            },
            {
                en: "Style the table with borders and padding",
                bn: "টেবিলের জন্য বর্ডার এবং প্যাডিং স্টাইল করুন",
            },
        ],
    },
    {
        id: 6,
        title: "Lesson6",
        titleBn: "পাঠ ৬",
        path: "/tutorial/lesson6",
        prev: { id: 5, path: "/tutorial/lesson5", title: "Lesson5", titleBn: "পাঠ ৫" },
        next: { id: 7, path: "/tutorial/lesson7", title: "Lesson7", titleBn: "পাঠ ৭" },
        quiz: [
            {
                id: 1,
                question: {
                    bn: "কোন ট্যাগ পেজের প্রধান কনটেন্ট নির্দেশ করে?",
                    en: "Which tag represents the primary content of the page?"
                },
                options: ["<section>", "<main>", "<article>"],
                correct: 1,
            },
            {
                id: 2,
                question: {
                    bn: "নেভিগেশন লিঙ্কগুলোর জন্য কোন ট্যাগ ব্যবহার করা উচিত?",
                    en: "Which tag is best for navigation links?"
                },
                options: ["<nav>", "<div>", "<aside>"],
                correct: 0,
            },
            {
                id: 3,
                question: {
                    bn: "স্বতন্ত্র পোস্ট বা সংবাদ আইটেমের জন্য কোন ট্যাগ ব্যবহার করা হয়?",
                    en: "Which semantic tag is suitable for a standalone post/article?"
                },
                options: ["<article>", "<section>", "<header>"],
                correct: 0,
            },
            {
                id: 4,
                question: {
                    bn: "কমপ্লিমেন্টারি কনটেন্ট/সাইডবারের জন্য কোন ট্যাগ?",
                    en: "Which element is appropriate for complementary content like a sidebar?"
                },
                options: ["<aside>", "<footer>", "<nav>"],
                correct: 0,
            },
        ],
        assignment: [
            {
                en: "Create a page layout using header, nav, main, aside and footer",
                bn: "header, nav, main, aside এবং footer ব্যবহার করে একটি পেজ লেআউট তৈরি করুন",
            },
            {
                en: "Wrap blog posts in <article> and group related parts with <section>",
                bn: "<article> দিয়ে ব্লগ পোস্ট বেঁধে দিন এবং সম্পর্কিত অংশ <section> দিয়ে গ্রুপ করুন",
            },
            {
                en: "Use landmarks and headings in proper order for accessibility",
                bn: "অ্যাক্সেসিবিলিটির জন্য ল্যান্ডমার্ক ও হেডিংগুলো সঠিক ক্রমে ব্যবহার করুন",
            },
            {
                en: "Explain (short) why semantic HTML helps SEO and screen readers",
                bn: "সংক্ষেপে লিখুন কেন সেম্যান্টিক HTML SEO এবং স্ক্রিন-রিডারের জন্য সহায়ক",
            },
        ],
    },

    /* ====== Lesson 7 (Responsive / CSS-oriented) you provided ====== */
    {
        id: 7,
        title: "Lesson7",
        titleBn: "পাঠ ৭",
        path: "/tutorial/lesson7",
        prev: { id: 6, path: "/tutorial/lesson6", title: "Lesson6", titleBn: "পাঠ ৬" },
        next: { id: 8, path: "/tutorial/lesson8", title: "Lesson8", titleBn: "পাঠ ৮" },

        quiz: [
            {
                id: 1,
                question: {
                    bn: "div কি ধরনের এলিমেন্ট?",
                    en: "What type of element is <div>?"
                },
                options: ["Inline", "Block", "Flex"],
                correct: 1,
            },
            {
                id: 2,
                question: {
                    bn: "span কোন ধরনের এলিমেন্ট?",
                    en: "What type of element is <span>?"
                },
                options: ["Block", "Inline", "List"],
                correct: 1,
            },
            {
                id: 3,
                question: {
                    bn: "Box Model এর কোন অংশ margin এর ভেতরে থাকে?",
                    en: "Which part lies inside the margin in the box model?"
                },
                options: ["Padding", "Border", "Content"],
                correct: 2,
            },
            {
                id: 4,
                question: {
                    bn: "Block element কী বৈশিষ্ট্য রাখে?",
                    en: "What is a characteristic of block elements?",
                },
                options: [
                    "Takes only required width",
                    "Always starts on a new line",
                    "Cannot contain child elements",
                ],
                correct: 1,
            },
        ],

        assignment: [
            {
                en: "Create a layout with header, content area, and footer using <div>",
                bn: "<div> ব্যবহার করে header, content এবং footer তৈরি করুন",
            },
            {
                en: "Use <span> to highlight inline words",
                bn: "<span> ব্যবহার করে inline শব্দ highlight করুন",
            },
            {
                en: "Build a card layout using box model (margin, padding, border)",
                bn: "margin, padding, border ব্যবহার করে একটি card layout তৈরি করুন",
            },
        ],
    },
    // Lesson 8 — Images & Asset Handling
    {
        id: 8,
        title: "Lesson8",
        titleBn: "পাঠ ৮",
        path: "/tutorial/lesson8",
        prev: { id: 7, path: "/tutorial/lesson7", title: "Lesson7", titleBn: "পাঠ ৭" },
        next: { id: 9, path: "/tutorial/lesson9", title: "Lesson9", titleBn: "পাঠ ৯" },

        quiz: [
            {
                id: 1,
                question: { bn: "Relative URL কি?", en: "What is a relative URL?" },
                options: ["URL with full path", "URL relative to current file", "URL of another site"],
                correct: 1,
            },
            {
                id: 2,
                question: { bn: "Absolute URL উদাহরণ কোনটি?", en: "Which is an example of absolute URL?" },
                options: ["/images/photo.png", "images/photo.png", "https://example.com/images/photo.png"],
                correct: 2,
            },
            {
                id: 3,
                question: { bn: "HTML এ ইমেজ যোগ করার জন্য কোন ট্যাগ ব্যবহার হয়?", en: "Which tag is used to add an image in HTML?" },
                options: ["<img>", "<image>", "<picture>"],
                correct: 0,
            },
        ],

        assignment: [
            { en: "Add an image using relative and absolute paths", bn: "Relative ও Absolute path ব্যবহার করে একটি ইমেজ যোগ করুন" },
            { en: "Use folder structure for assets", bn: "Assets এর জন্য folder structure ব্যবহার করুন" },
            { en: "Display multiple images in a gallery layout", bn: "একটি gallery layout এ multiple images দেখান" },
        ],
    },

    // Lesson 9 — HTML Attributes
    {
        id: 9,
        title: "Lesson9",
        titleBn: "পাঠ ৯",
        path: "/tutorial/lesson9",
        prev: { id: 8, path: "/tutorial/lesson8", title: "Lesson8", titleBn: "পাঠ ৮" },
        next: { id: 10, path: "/tutorial/lesson10", title: "Lesson10", titleBn: "পাঠ ১০" },

        quiz: [
            {
                id: 1,
                question: { bn: "id অ্যাট্রিবিউট কি করে?", en: "What does the id attribute do?" },
                options: ["Defines a unique element", "Groups elements", "Adds style only"],
                correct: 0,
            },
            {
                id: 2,
                question: { bn: "src অ্যাট্রিবিউট কোন ট্যাগে ব্যবহার হয়?", en: "Which tag uses the src attribute?" },
                options: ["<a>", "<img>", "<p>"],
                correct: 1,
            },
            {
                id: 3,
                question: { bn: "Global attributes উদাহরণ কোনটি?", en: "Which is a global attribute?" },
                options: ["id", "hidden", "Both"],
                correct: 2,
            },
        ],

        assignment: [
            { en: "Add id and class attributes to elements", bn: "Elements এ id ও class attribute যোগ করুন" },
            { en: "Use src, href, and target attributes correctly", bn: "src, href ও target attributes সঠিকভাবে ব্যবহার করুন" },
            { en: "Add global attributes like title and hidden", bn: "title এবং hidden এর মতো global attributes যোগ করুন" },
        ],
    },

    // Lesson 10 — Meta Tags & Head Content
    {
        id: 10,
        title: "Lesson10",
        titleBn: "পাঠ ১০",
        path: "/tutorial/lesson10",
        prev: { id: 9, path: "/tutorial/lesson9", title: "Lesson9", titleBn: "পাঠ ৯" },
        next: { id: 11, path: "/tutorial/lesson11", title: "Lesson11", titleBn: "পাঠ ১১" },

        quiz: [
            {
                id: 1,
                question: { bn: "ভিউপোর্ট meta tag এর উদ্দেশ্য কি?", en: "What is the purpose of viewport meta tag?" },
                options: ["Control page scaling on mobile", "SEO optimization", "Load CSS faster"],
                correct: 0,
            },
            {
                id: 2,
                question: { bn: "title tag কোন অংশে থাকে?", en: "Where does the title tag go?" },
                options: ["body", "head", "footer"],
                correct: 1,
            },
            {
                id: 3,
                question: { bn: "Open Graph ট্যাগের ব্যবহার কি?", en: "What is the purpose of Open Graph tags?" },
                options: ["SEO", "Social preview", "Form validation"],
                correct: 1,
            },
        ],

        assignment: [
            { en: "Add title, meta description, and charset in head", bn: "Head এ title, meta description ও charset যোগ করুন" },
            { en: "Use viewport meta for responsive design", bn: "Responsive design এর জন্য viewport meta ব্যবহার করুন" },
            { en: "Add Open Graph tags for social preview", bn: "Social preview এর জন্য Open Graph tags যোগ করুন" },
        ],
    },

    // Lesson 11 — Forms (Part 2)
    {
        id: 11,
        title: "Lesson11",
        titleBn: "পাঠ ১১",
        path: "/tutorial/lesson11",
        prev: { id: 10, path: "/tutorial/lesson10", title: "Lesson10", titleBn: "পাঠ ১০" },
        next: { id: 12, path: "/tutorial/lesson12", title: "Lesson12", titleBn: "পাঠ ১২" },

        quiz: [
            {
                id: 1,
                question: { bn: "select tag কি ব্যবহার হয়?", en: "Which tag is used for dropdown select?" },
                options: ["<select>", "<input>", "<textarea>"],
                correct: 0,
            },
            {
                id: 2,
                question: { bn: "textarea কি জন্য ব্যবহার হয়?", en: "What is textarea used for?" },
                options: ["Single-line input", "Multi-line input", "Checkboxes"],
                correct: 1,
            },
            {
                id: 3,
                question: { bn: "datalist কি করে?", en: "What does datalist do?" },
                options: ["Predefined options for input", "Style the form", "Validate email"],
                correct: 0,
            },
        ],

        assignment: [
            { en: "Create a form with select, textarea, and datalist", bn: "Form এ select, textarea ও datalist ব্যবহার করুন" },
            { en: "Add input validation (pattern, min, max, required)", bn: "Input validation যোগ করুন (pattern, min, max, required)" },
            { en: "Style the form using basic CSS or Tailwind", bn: "Form styling CSS বা Tailwind ব্যবহার করুন" },
        ],
    },

    // Lesson 12 — Best Practices & Final Project
    {
        id: 12,
        title: "Lesson12",
        titleBn: "পাঠ ১২",
        path: "/tutorial/lesson12",
        prev: { id: 11, path: "/tutorial/lesson11", title: "Lesson11", titleBn: "পাঠ ১১" },
        next: { id: 13, path: "/tutorial/lesson13", title: "Lesson13", titleBn: "পাঠ ১৩" },

        quiz: [
            {
                id: 1,
                question: { bn: "Accessibility এর জন্য কোন ট্যাগ গুরুত্বপূর্ণ?", en: "Which tag is important for accessibility?" },
                options: ["alt", "title", "aria-label"],
                correct: 2,
            },
            {
                id: 2,
                question: { bn: "Clean HTML structure কেন গুরুত্বপূর্ণ?", en: "Why is clean HTML structure important?" },
                options: ["SEO", "Readability", "Both"],
                correct: 2,
            },
            {
                id: 3,
                question: { bn: "Final project এ কি তৈরি করতে হবে?", en: "What should you build in the final project?" },
                options: ["Single page", "Full webpage", "Only form"],
                correct: 1,
            },
        ],

        assignment: [
            { en: "Ensure all images have alt text", bn: "সব ইমেজে alt text যোগ করুন" },
            { en: "Maintain clean HTML structure and indentation", bn: "Clean HTML structure ও indentation বজায় রাখুন" },
            { en: "Build a full webpage using everything learned", bn: "সব শেখা ব্যবহার করে একটি full webpage তৈরি করুন" },
        ],
    },

    // ===== Bonus Lessons 13-15 =====
    {
        id: 13,
        title: "Lesson13",
        titleBn: "পাঠ ১৩",
        path: "/tutorial/lesson13",
        prev: { id: 12, path: "/tutorial/lesson12", title: "Lesson12", titleBn: "পাঠ ১২" },
        next: { id: 14, path: "/tutorial/lesson14", title: "Lesson14", titleBn: "পাঠ ১৪" },

        // short quiz (bilingual)
        quiz: [
            {
                id: 1,
                question: {
                    en: "Which API stores small amounts of data in the browser?",
                    bn: "কোন API ব্রাউজারে ছোট পরিমাণ ডেটা সংরক্ষণ করে?"
                },
                options: ["localStorage", "sessionStyle", "cookieAPI"],
                correct: 0
            },
            {
                id: 2,
                question: {
                    en: "Which element is used to embed audio?",
                    bn: "কোন ট্যাগটি অডিও এমবেড করতে ব্যবহার হয়?"
                },
                options: ["<audio>", "<sound>", "<media>"],
                correct: 0
            },
            {
                id: 3,
                question: {
                    en: "Which element provides a drawing surface in HTML5?",
                    bn: "HTML5-এ কোন ট্যাগটি ড্রয়িং সারফেস দেয়?"
                },
                options: ["<canvas>", "<svg>", "<draw>"],
                correct: 0
            }
        ],

        assignment: [
            { en: "Embed an audio file with controls on a page", bn: "একটি পেজে controls সহ অডিও এমবেড করুন" },
            { en: "Create a small canvas drawing (lines or shapes)", bn: "canvas ব্যবহার করে একটি ছোট ড্রয়িং তৈরি করুন" },
            { en: "Save a user setting to localStorage and read it on load", bn: "localStorage-এ একটি ইউজার সেটিং সংরক্ষণ করুন এবং লোডে পড়ুন" }
        ],
    },

    {
        id: 14,
        title: "Lesson14",
        titleBn: "পাঠ ১৪",
        path: "/tutorial/lesson14",
        prev: { id: 13, path: "/tutorial/lesson13", title: "Lesson13", titleBn: "পাঠ ১৩" },
        next: { id: 15, path: "/tutorial/lesson15", title: "Lesson15", titleBn: "পাঠ ১৫" },

        quiz: [
            {
                id: 1,
                question: {
                    en: "What pages typically appear in a developer portfolio?",
                    bn: "একটি developer portfolio-তে সাধারণত কোন পেজগুলো থাকে?"
                },
                options: ["Homepage, Projects, About, Contact", "Only Contact", "Only Blog"],
                correct: 0
            },
            {
                id: 2,
                question: {
                    en: "Which content is important for project showcase?",
                    bn: "প্রজেক্ট প্রদর্শনের জন্য কোন বিষয়গুলো গুরুত্বপূর্ণ?"
                },
                options: ["Screenshots, short description, links", "Only code", "Only images"],
                correct: 0
            },
        ],

        assignment: [
            { en: "Create a small portfolio with Home, Projects and Contact", bn: "Home, Projects ও Contactসহ একটি পোর্টফোলিও তৈরি করুন" },
            { en: "Add 2 project cards with links and short descriptions", bn: "২টি প্রজেক্ট কার্ড যোগ করুন — লিংক ও সংক্ষিপ্ত বর্ণনা সহ" },
            { en: "Make the portfolio mobile-friendly", bn: "পোর্টফোলিওকে মোবাইল-ফ্রেন্ডলি করুন" }
        ],
    },

    {
        id: 15,
        title: "Lesson15",
        titleBn: "পাঠ ১৫",
        path: "/tutorial/lesson15",
        prev: { id: 14, path: "/tutorial/lesson14", title: "Lesson14", titleBn: "পাঠ ১৪" },
        next: null,

        quiz: [
            {
                id: 1,
                question: {
                    en: "Which mini-project is good for practicing forms and layout?",
                    bn: "Forms ও layout অনুশীলনের জন্য কোন মিনি-প্রজেক্ট ভালো?"
                },
                options: ["Login page", "Only blog", "Only gallery"],
                correct: 0
            },
            {
                id: 2,
                question: {
                    en: "What does a product card usually include?",
                    bn: "একটি product card সাধারণত কী থাকে?"
                },
                options: ["Image, title, price, CTA", "Only text", "Only image"],
                correct: 0
            }
        ],

        assignment: [
            { en: "Build one mini-project: choose from Login, Resume, Product card, Landing page", bn: "একটি মিনি-প্রজেক্ট তৈরি করুন — Login, Resume, Product card বা Landing page থেকে বেছে নিন" },
            { en: "Make it responsive and use semantic HTML", bn: "রেস্পনসিভ করুন এবং সেম্যান্টিক HTML ব্যবহার করুন" },
            { en: "Deploy the mini-project (GitHub Pages or similar) and share a link", bn: "প্রজেক্টটি ডেপ্লয় করুন (GitHub Pages ইত্যাদি) এবং লিংক শেয়ার করুন" }
        ],
    },




];
