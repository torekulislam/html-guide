export const htmlTagsData = [
    // 🧱 Basic Structure
    {
        titel: " Basic Structure",
        // links: "other",
        tags: [
            { id: 1, name: "html", text: "Root element of an HTML page", active: false, category: "Document" },
            { id: 2, name: "head", text: "Contains meta information, title, links, and scripts", active: false, category: "Document" },
            { id: 3, name: "title", text: "Defines the title shown in the browser tab", active: false, category: "Meta" },
            { id: 4, name: "body", text: "Contains all the visible content on the page", active: false, category: "Document" },
        ]
    },

    // 🏷️ Headings
    {
        titel: "Headings",
        tags: [

            { id: 5, name: "h1", text: "Main heading of the page", active: false, category: "Heading" },
            { id: 6, name: "h2", text: "Subheading under H1", active: false, category: "Heading" },
            { id: 7, name: "h3", text: "Smaller subheading", active: false, category: "Heading" },
            { id: 8, name: "h4", text: "Lower-level heading", active: false, category: "Heading" },
            { id: 9, name: "h5", text: "Smaller heading", active: false, category: "Heading" },
            { id: 10, name: "h6", text: "Smallest heading", active: false, category: "Heading" },
        ]
    },

    // ✍️ Text and Paragraphs
    {
        titel: "Text and Paragraphs",
        tags: [

            { id: 11, name: "p", text: "Defines a paragraph", active: false, category: "Text" },
            { id: 12, name: "br", text: "Line break", active: false, category: "Text" },
            { id: 13, name: "hr", text: "Horizontal line", active: false, category: "Text" },
            { id: 14, name: "strong", text: "Important text (bold)", active: false, category: "Text" },
            { id: 15, name: "em", text: "Emphasized text (italic)", active: false, category: "Text" },
            { id: 16, name: "b", text: "Bold text", active: false, category: "Text" },
            { id: 17, name: "i", text: "Italic text", active: false, category: "Text" },
            { id: 18, name: "u", text: "Underlined text", active: false, category: "Text" },
            { id: 19, name: "small", text: "Smaller text", active: false, category: "Text" },
            { id: 20, name: "mark", text: "Highlighted text", active: false, category: "Text" },
            { id: 21, name: "sub", text: "Subscript text", active: false, category: "Text" },
            { id: 22, name: "sup", text: "Superscript text", active: false, category: "Text" },
            { id: 23, name: "abbr", text: "Abbreviation or acronym", active: false, category: "Text" },
            { id: 24, name: "cite", text: "Citation or reference", active: false, category: "Text" },
            { id: 25, name: "code", text: "Displays inline code", active: false, category: "Text" },
            { id: 26, name: "pre", text: "Preformatted text block", active: false, category: "Text" },
            { id: 27, name: "q", text: "Short inline quotation", active: false, category: "Text" },
            { id: 28, name: "blockquote", text: "Long quotation block", active: false, category: "Text" },
            { id: 29, name: "time", text: "Represents a specific time or date", active: false, category: "Text" },
        ]
    },

    // 🔗 Links and Media
    {
        titel: "Links and Media",
        tags: [

            { id: 30, name: "a", text: "Defines a hyperlink", active: false, category: "Link" },
            { id: 31, name: "img", text: "Embeds an image", active: false, category: "Media" },
            { id: 32, name: "figure", text: "Groups media content", active: false, category: "Media" },
            { id: 33, name: "figcaption", text: "Caption for figure or image", active: false, category: "Media" },
            { id: 34, name: "audio", text: "Embeds audio", active: false, category: "Media" },
            { id: 35, name: "video", text: "Embeds video", active: false, category: "Media" },
            { id: 36, name: "source", text: "Specifies media source", active: false, category: "Media" },
            { id: 37, name: "track", text: "Text tracks for media", active: false, category: "Media" },
            { id: 38, name: "iframe", text: "Embeds another webpage", active: false, category: "Media" },
        ]
    },

    // 🧩 Layout & Structure
    {
        titel: "Layout & Structure",
        tags: [

            { id: 39, name: "div", text: "Generic block container", active: false, category: "Layout" },
            { id: 40, name: "span", text: "Generic inline container", active: false, category: "Inline" },
            { id: 41, name: "header", text: "Defines page or section header", active: false, category: "Layout" },
            { id: 42, name: "footer", text: "Defines page or section footer", active: false, category: "Layout" },
            { id: 43, name: "section", text: "Groups related content", active: false, category: "Layout" },
            { id: 44, name: "article", text: "Independent piece of content", active: false, category: "Layout" },
            { id: 45, name: "aside", text: "Sidebar or extra content", active: false, category: "Layout" },
            { id: 46, name: "main", text: "Main content area", active: false, category: "Layout" },
            { id: 47, name: "nav", text: "Navigation links", active: false, category: "Layout" },
        ]
    },

    // 📋 Lists
    {
        titel: "Lists",
        tags: [

            { id: 48, name: "ul", text: "Unordered list", active: false, category: "List" },
            { id: 49, name: "ol", text: "Ordered list", active: false, category: "List" },
            { id: 50, name: "li", text: "List item", active: false, category: "List" },
            { id: 51, name: "dl", text: "Description list", active: false, category: "List" },
            { id: 52, name: "dt", text: "Term in a description list", active: false, category: "List" },
            { id: 53, name: "dd", text: "Definition in a description list", active: false, category: "List" },
        ]
    },

    // 🧠 Forms & Inputs
    {
        titel: "Forms & Inputs",
        tags: [
            { id: 54, name: "form", text: "Form container", active: false, category: "Form" },
            { id: 55, name: "input", text: "Input field", active: false, category: "Form" },
            { id: 56, name: "textarea", text: "Multiline text input", active: false, category: "Form" },
            { id: 57, name: "button", text: "Clickable button", active: false, category: "Form" },
            { id: 58, name: "select", text: "Dropdown menu", active: false, category: "Form" },
            { id: 59, name: "option", text: "Option inside select", active: false, category: "Form" },
            { id: 60, name: "optgroup", text: "Group of options", active: false, category: "Form" },
            { id: 61, name: "label", text: "Label for a form input", active: false, category: "Form" },
            { id: 62, name: "fieldset", text: "Group of form fields", active: false, category: "Form" },
            { id: 63, name: "legend", text: "Caption for a fieldset", active: false, category: "Form" },
            { id: 64, name: "datalist", text: "Predefined input options", active: false, category: "Form" },
            { id: 65, name: "output", text: "Displays form results", active: false, category: "Form" },
            { id: 66, name: "progress", text: "Progress bar", active: false, category: "Form" },
            { id: 67, name: "meter", text: "Gauge measurement", active: false, category: "Form" },
        ]
    },


    // 📊 Tables
    {
        titel: "Tables",
        tags: [

            { id: 68, name: "table", text: "Table container", active: false, category: "Table" },
            { id: 69, name: "caption", text: "Table caption", active: false, category: "Table" },
            { id: 70, name: "thead", text: "Table header section", active: false, category: "Table" },
            { id: 71, name: "tbody", text: "Table body section", active: false, category: "Table" },
            { id: 72, name: "tfoot", text: "Table footer section", active: false, category: "Table" },
            { id: 73, name: "tr", text: "Table row", active: false, category: "Table" },
            { id: 74, name: "th", text: "Table header cell", active: false, category: "Table" },
            { id: 75, name: "td", text: "Table data cell", active: false, category: "Table" },
        ]
    },

    // 🧭 Meta & Script
    {
        titel: "Meta & Script",
        tags: [

            { id: 76, name: "meta", text: "Metadata for the page", active: false, category: "Meta" },
            { id: 77, name: "link", text: "Links external files like CSS", active: false, category: "Meta" },
            { id: 78, name: "style", text: "Internal CSS styles", active: false, category: "Meta" },
            { id: 79, name: "script", text: "JavaScript code", active: false, category: "Script" },
            { id: 80, name: "noscript", text: "Fallback when JS is disabled", active: false, category: "Script" },
            { id: 81, name: "template", text: "HTML template content", active: false, category: "Meta" },
        ]
    },

    // 🧩 Extra / Interactive
    {
        titel: "Extra / Interactive",
        tags: [

            { id: 82, name: "details", text: "Expandable details box", active: false, category: "Interactive" },
            { id: 83, name: "summary", text: "Title for details element", active: false, category: "Interactive" },
            { id: 84, name: "dialog", text: "Dialog or popup box", active: false, category: "Interactive" },
            { id: 85, name: "canvas", text: "Drawing area for graphics", active: false, category: "Graphics" },
            { id: 86, name: "svg", text: "Scalable vector graphics", active: false, category: "Graphics" },
            { id: 87, name: "map", text: "Image map for clickable areas", active: false, category: "Media" },
            { id: 88, name: "area", text: "Clickable area inside map", active: false, category: "Media" },
            { id: 89, name: "object", text: "Embeds external content", active: false, category: "Media" },
            { id: 90, name: "embed", text: "Embeds external resources", active: false, category: "Media" },
            { id: 91, name: "param", text: "Parameter for embed/object", active: false, category: "Media" },
            { id: 92, name: "picture", text: "Responsive image container", active: false, category: "Media" },
            { id: 93, name: "source", text: "Multiple media sources", active: false, category: "Media" },
            { id: 94, name: "track", text: "Captions for video/audio", active: false, category: "Media" },
        ]
    },

    // ⚙️ Others
    {
        titel: "Others",
        links: "other",
        tags: [

            { id: 95, name: "bdi", text: "Isolates text direction", active: false, category: "Text" },
            { id: 96, name: "bdo", text: "Overrides text direction", active: false, category: "Text" },
            { id: 97, name: "ruby", text: "Ruby annotation container", active: false, category: "Text" },
            { id: 98, name: "rt", text: "Ruby text explanation", active: false, category: "Text" },
            { id: 99, name: "rp", text: "Fallback for ruby", active: false, category: "Text" },
            { id: 100, name: "wbr", text: "Word break opportunity", active: false, category: "Text" },
        ]
    },
];


export const htmlTagsDataDitiles = [
    {
        id: 1,
        name: "html",
        definition: "Defines the root of an HTML document",
        definitionBn: "একটি HTML ডকুমেন্টের মূল উপাদান নির্ধারণ করে",
        syntax: "<html>...</html>",
        codeExample: `<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
        about: `The <html> tag is the root element of an HTML page. /n
The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. There can be only one <html> element in a document.

While HTML does not require authors to specify <html> element start and ending tags, it is important for authors to do so as it will allow them to specify the lang for the webpage. Providing a lang attribute with a valid BCP 47 language tag on the <html> element will help screen reading technology determine the proper language to announce. The identifying language tag should describe the language used by the majority of the content of the page. Without it, screen readers will typically default to the operating system's set language, which may cause mispronunciations.

Including a valid lang declaration on the <html> element also ensures that important metadata contained in the page's <head>, such as the page's <title>, are also announced properly.`,
        aboutBn: `<html> ট্যাগটি একটি HTML পৃষ্ঠার মূল উপাদান।
<html> HTML উপাদানটি একটি HTML ডকুমেন্টের মূল(শীর্ষ- স্তরের উপাদান) প্রতিনিধিত্ব করে, তাই এটিকে মূল উপাদানও বলা হয়। অন্যান্য সমস্ত উপাদান অবশ্যই এই উপাদানের বংশধর হতে হবে। একটি ডকুমেন্টে শুধুমাত্র একটি < html > উপাদান থাকতে পারে।

HTML-এ লেখকদের <html> এলিমেন্টের শুরু এবং শেষের ট্যাগ নির্দিষ্ট করার প্রয়োজন নেই, তবে লেখকদের জন্য এটি করা গুরুত্বপূর্ণ কারণ এটি তাদের ওয়েবপেজের জন্য lang নির্দিষ্ট করতে সাহায্য করবে। <html> এলিমেন্টে একটি বৈধ BCP 47 ল্যাঙ্গুয়েজ ট্যাগ সহ একটি lang অ্যাট্রিবিউট প্রদান করলে স্ক্রিন রিডিং প্রযুক্তিকে সঠিক ভাষা ঘোষণা করতে সাহায্য করবে। শনাক্তকারী ভাষা ট্যাগটি পৃষ্ঠার বেশিরভাগ কন্টেন্ট দ্বারা ব্যবহৃত ভাষা বর্ণনা করবে। এটি ছাড়া, স্ক্রিন রিডাররা সাধারণত অপারেটিং সিস্টেমের সেট ভাষা ব্যবহার করবে, যা ভুল উচ্চারণের কারণ হতে পারে।

<html> এলিমেন্টে একটি বৈধ lang ঘোষণা অন্তর্ভুক্ত করলে পৃষ্ঠার <head> এ থাকা গুরুত্বপূর্ণ মেটাডেটা, যেমন পৃষ্ঠার <title>, সঠিকভাবে ঘোষণা করা হবে।`,
        useCase: "Every HTML page must have a single <html> tag.",
        useCaseBn: "প্রত্যেকটি HTML পৃষ্ঠায় একটি <html> ট্যাগ থাকা আবশ্যক।",
        active: true,
        category: "Document",
        attributes: [
            {
                name: "lang",
                description: "Specifies the language of the document",
                descriptionBn: "ডকুমেন্টের ভাষা নির্ধারণ করে",
                example: `<html lang="en">...</html>`,
            },
        ],
    },
    {
        id: 2,
        name: "head",
        definition: "Contains metadata/information for the document",
        definitionBn: "ডকুমেন্টের জন্য মেটাডেটা/তথ্য ধারণ করে",
        syntax: "<head>...</head>",
        codeExample: `<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <link rel="stylesheet" href="style.css">
</head>`,
        about: `The <head> element contains metadata and links to scripts or stylesheets.

The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.

HTML metadata is data about the HTML document. Metadata is not displayed on the page.

Metadata typically define the document title, character set, styles, scripts, and other meta information.

The HTML <head> element is a container for the following elements: <title>, <style>, <meta>, <link>, <script>, and <base>.
        `,
        aboutBn: `<head> উপাদানটি মেটাডেটা এবং স্ক্রিপ্ট/স্টাইলশীটের লিঙ্ক ধারণ করে।

<head> উপাদানটি মেটাডেটা (ডেটা সম্পর্কে তথ্য) এর জন্য একটি ধারক এবং <html> ট্যাগ এবং <body> ট্যাগের মধ্যে স্থাপন করা হয়।

HTML মেটাডেটা হল HTML ডকুমেন্ট সম্পর্কে তথ্য। মেটাডেটা পৃষ্ঠায় প্রদর্শিত হয় না।

মেটাডেটা সাধারণত ডকুমেন্টের শিরোনাম, অক্ষর সেট, শৈলী, স্ক্রিপ্ট এবং অন্যান্য মেটা তথ্য সংজ্ঞায়িত করে।

HTML <head> এলিমেন্ট হল নিম্নলিখিত এলিমেন্টগুলির জন্য একটি কন্টেইনার: <title>, <style>, <meta>, <link>, <script>, এবং <base>।
        `,
        useCase: "Add title, meta tags, CSS links, or JS scripts here. The HTML <head> element is a container for the following elements: <title>, <style>, <meta>, <link>, <script>, and <base>.",
        useCaseBn: "টাইটেল, মেটা ট্যাগ, CSS লিঙ্ক বা JS স্ক্রিপ্ট এখানে যোগ করুন। HTML <head> এলিমেন্ট হল নিম্নলিখিত এলিমেন্টগুলির জন্য একটি কন্টেইনার: <title>, <style>, <meta>, <link>, <script>, এবং <base>",
        active: true,
        category: "Document",
        attributes: [
            {
                name: "charset",
                description: "Specifies the character encoding for the document",
                descriptionBn: "ডকুমেন্টের জন্য অক্ষর এনকোডিং নির্ধারণ করে",
                example: `<meta charset="UTF-8">`,
            },
        ],
    },
    {
        id: 3,
        name: "title",
        definition: "Sets the title of the document",
        definitionBn: "ডকুমেন্টের শিরোনাম নির্ধারণ করে",
        syntax: "<title>...</title>",
        codeExample: `<title>My Page</title>`,
        about: `The <title> element sets the name of the document displayed in the browser tab.

The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; HTML tags within the element, if any, are also treated as plain text.

The <title> element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The <title> element is required in HTML documents!

The content of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

The <title> element:

defines a title in the browser toolbar
provides a title for the page when it is added to favorites
displays a title for the page in search engine-results
        `,
        aboutBn: `<title> উপাদানটি ডকুমেন্টের নাম নির্ধারণ করে যা ব্রাউজারের ট্যাবে দেখানো হয়।

<title> HTML উপাদানটি ব্রাউজারের টাইটেল বারে অথবা পৃষ্ঠার ট্যাবে প্রদর্শিত ডকুমেন্টের শিরোনাম নির্ধারণ করে। এতে কেবল টেক্সট থাকে; যদি এলিমেন্টের মধ্যে HTML ট্যাগ থাকে, তবে তাও প্লেইন টেক্সট হিসেবে বিবেচিত হয়।

<title> উপাদানটি ডকুমেন্টের শিরোনাম নির্ধারণ করে। শিরোনামটি কেবল টেক্সট-এর জন্য হতে হবে এবং এটি ব্রাউজারের শিরোনাম বারে অথবা পৃষ্ঠার ট্যাবে প্রদর্শিত হবে।

<title> উপাদানটি HTML ডকুমেন্টে প্রয়োজন!

সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO) এর জন্য পৃষ্ঠার শিরোনামের বিষয়বস্তু খুবই গুরুত্বপূর্ণ! সার্চ ইঞ্জিন অ্যালগরিদমগুলি অনুসন্ধান ফলাফলে পৃষ্ঠাগুলি তালিকাভুক্ত করার সময় পৃষ্ঠার শিরোনামটি ক্রম নির্ধারণ করতে ব্যবহার করে।

<title> উপাদান:

ব্রাউজার টুলবারে একটি শিরোনাম সংজ্ঞায়িত করে
পৃষ্ঠাটি পছন্দসই তালিকায় যুক্ত করার সময় একটি শিরোনাম প্রদান করে
সার্চ ইঞ্জিন-ফলাফলগুলিতে পৃষ্ঠার জন্য একটি শিরোনাম প্রদর্শন করে
`,
        useCase: "Always include a descriptive title for SEO and usability.",
        useCaseBn: "SEO এবং ব্যবহারযোগ্যতার জন্য সর্বদা একটি বর্ণনামূলক শিরোনাম অন্তর্ভুক্ত করুন।",
        active: true,
        category: "Meta",
        attributes: [],
    },
    {
        id: 4,
        name: "body",
        definition: "Defines the document's body",
        definitionBn: "ডকুমেন্টের শরীর নির্ধারণ করে",
        syntax: "<body>...</body>",
        codeExample: `<body>
  <h1>Welcome</h1>
  <p>This is a paragraph.</p>
</body>`,
        about: "The <body> element contains everything that is visible to the user.",
        aboutBn: "<body> উপাদানটি ব্যবহারকারীর কাছে দৃশ্যমান সবকিছু ধারণ করে।",
        useCase: "Put all visible HTML elements inside <body>.",
        useCaseBn: "দৃশ্যমান সকল HTML উপাদান <body> এর ভিতরে রাখুন।",
        active: true,
        category: "Document",
        attributes: [],
    },
    {
        id: 5.1,
        name: "h1",
        definition: "Defines HTML headings",
        definitionBn: "HTML শিরোনাম নির্ধারণ করে",
        syntax: "<h1>...</h1>",
        codeExample: `<h1>Welcome to My Website</h1>`,
        about: "The <h1> tag defines the most important heading.",
        aboutBn: "<h1> ট্যাগটি সবচেয়ে গুরুত্বপূর্ণ শিরোনাম নির্ধারণ করে।",
        useCase: "Use only one <h1> per page for SEO best practices.",
        useCaseBn: "SEO এর জন্য প্রতি পৃষ্ঠায় কেবল একটি <h1> ব্যবহার করুন।",
        active: true,
        category: "Text",
        attributes: [
            {
                name: "class",
                description: "Specifies one or more class names for the element",
                descriptionBn: "উপাদানের জন্য এক বা একাধিক ক্লাস নাম নির্ধারণ করে",
                example: `<h1 class="main-title">Welcome</h1>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে",
                example: `<h1 id="header">Welcome</h1>`,
            },
        ],
    },

    {
        id: 5.2,
        name: "h2",
        definition: "Defines the second-level heading in HTML.",
        definitionBn: "HTML-এ দ্বিতীয় স্তরের শিরোনাম নির্ধারণ করে।",
        syntax: "<h2>...</h2>",
        codeExample: `<h2>Welcome to My Website</h2>`,
        about:
            "The <h2> tag defines a second-level heading. It is typically used to represent subheadings that follow an <h1> tag.",
        aboutBn:
            "<h2> ট্যাগটি দ্বিতীয় স্তরের শিরোনাম নির্ধারণ করে। এটি সাধারণত <h1> ট্যাগের পরবর্তী সাবহেডিং হিসেবে ব্যবহৃত হয়।",
        useCase:
            "Use the <h2> tag for subheadings to maintain a clear content hierarchy and improve SEO structure.",
        useCaseBn:
            "সুস্পষ্ট বিষয়বস্তুর কাঠামো বজায় রাখতে এবং SEO উন্নত করতে সাবহেডিংয়ের জন্য <h2> ট্যাগ ব্যবহার করুন।",
        active: true,
        category: "Text",
        attributes: [
            {
                name: "class",
                description: "Specifies one or more class names for the element.",
                descriptionBn: "উপাদানের জন্য এক বা একাধিক ক্লাস নাম নির্ধারণ করে।",
                example: `<h2 class="main-title">Welcome</h2>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element.",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে।",
                example: `<h2 id="header">Welcome</h2>`,
            },
            {
                name: "style",
                description: "Adds inline CSS styling to the element.",
                descriptionBn: "উপাদানে ইনলাইন CSS স্টাইল প্রয়োগ করে।",
                example: `<h2 style="color: blue;">Welcome</h2>`,
            },
            {
                name: "title",
                description:
                    "Adds extra information about the element (shown as a tooltip on hover).",
                descriptionBn:
                    "উপাদান সম্পর্কে অতিরিক্ত তথ্য যোগ করে (মাউস রাখলে টুলটিপ হিসাবে প্রদর্শিত হয়)।",
                example: `<h2 title="Main Heading">Welcome</h2>`,
            },
        ],
    }
    ,
    {
        id: 5.3,
        name: "h3",
        definition: "Defines a third-level heading in HTML.",
        definitionBn: "HTML-এ তৃতীয় স্তরের শিরোনাম নির্ধারণ করে।",
        syntax: "<h3>...</h3>",
        codeExample: `<h3>About Us</h3>`,
        about:
            "The <h3> tag represents a third-level heading in an HTML document. It is used to organize content under <h2> subheadings and helps create a clear content hierarchy.",
        aboutBn:
            "<h3> ট্যাগটি একটি HTML ডকুমেন্টে তৃতীয় স্তরের শিরোনাম নির্দেশ করে। এটি সাধারণত <h2> সাবহেডিং-এর অধীনে বিষয়বস্তু সংগঠিত করতে ব্যবহৃত হয় এবং স্পষ্ট কনটেন্ট কাঠামো তৈরি করতে সহায়তা করে।",
        useCase:
            "Use <h3> tags for sections under <h2> headings to maintain a logical structure and help search engines understand content relationships.",
        useCaseBn:
            "<h2> শিরোনামের অধীনে <h3> ট্যাগ ব্যবহার করুন যাতে যুক্তিসঙ্গত কাঠামো বজায় থাকে এবং সার্চ ইঞ্জিন কনটেন্টের সম্পর্ক বুঝতে পারে।",
        active: true,
        category: "Text",
        attributes: [
            {
                name: "class",
                description: "Specifies one or more class names for the element.",
                descriptionBn: "উপাদানের জন্য এক বা একাধিক ক্লাস নাম নির্ধারণ করে।",
                example: `<h3 class="sub-heading">About Us</h3>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element.",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে।",
                example: `<h3 id="about">About Us</h3>`,
            },
            {
                name: "style",
                description: "Adds inline CSS styling to the element.",
                descriptionBn: "উপাদানে ইনলাইন CSS স্টাইল প্রয়োগ করে।",
                example: `<h3 style="color: green;">About Us</h3>`,
            },
            {
                name: "title",
                description:
                    "Adds extra information about the element (shown as a tooltip on hover).",
                descriptionBn:
                    "উপাদান সম্পর্কে অতিরিক্ত তথ্য যোগ করে (মাউস রাখলে টুলটিপ হিসাবে প্রদর্শিত হয়)।",
                example: `<h3 title="Section Heading">About Us</h3>`,
            },
        ],
    },
    {
        id: 5.4,
        name: "h4",
        definition: "Defines a fourth-level heading in HTML.",
        definitionBn: "HTML-এ চতুর্থ স্তরের শিরোনাম নির্ধারণ করে।",
        syntax: "<h4>...</h4>",
        codeExample: `<h4>Frontend Technologies</h4>`,
        about:
            "The <h4> tag represents a fourth-level heading in an HTML document. It is used for subsections under <h3> headings, keeping the document structure organized and readable.",
        aboutBn:
            "<h4> ট্যাগটি একটি HTML ডকুমেন্টে চতুর্থ স্তরের শিরোনাম নির্দেশ করে। এটি সাধারণত <h3> শিরোনামের অধীনে উপ-বিভাগের জন্য ব্যবহৃত হয় যাতে ডকুমেন্টটি সংগঠিত থাকে।",
        useCase:
            "Use <h4> tags for smaller subsections under <h3> to maintain logical content hierarchy.",
        useCaseBn:
            "বিষয়বস্তুর কাঠামো যৌক্তিক রাখতে <h3> শিরোনামের অধীনে ছোট উপ-বিভাগের জন্য <h4> ট্যাগ ব্যবহার করুন।",
        active: true,
        category: "Text",
        attributes: [
            {
                name: "class",
                description: "Specifies one or more class names for the element.",
                descriptionBn: "উপাদানের জন্য এক বা একাধিক ক্লাস নাম নির্ধারণ করে।",
                example: `<h4 class="topic-title">Frontend Technologies</h4>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element.",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে।",
                example: `<h4 id="frontend">Frontend Technologies</h4>`,
            },
            {
                name: "style",
                description: "Adds inline CSS styling to the element.",
                descriptionBn: "উপাদানে ইনলাইন CSS স্টাইল প্রয়োগ করে।",
                example: `<h4 style="color: #0A74FF;">Frontend Technologies</h4>`,
            },
            {
                name: "title",
                description:
                    "Adds extra information about the element (shown as a tooltip on hover).",
                descriptionBn:
                    "উপাদান সম্পর্কে অতিরিক্ত তথ্য যোগ করে (মাউস রাখলে টুলটিপ হিসাবে প্রদর্শিত হয়)।",
                example: `<h4 title="Subsection Heading">Frontend Technologies</h4>`,
            },
        ],
    },
    {
        id: 5.5,
        name: "h5",
        definition: "Defines a fifth-level heading in HTML.",
        definitionBn: "HTML-এ পঞ্চম স্তরের শিরোনাম নির্ধারণ করে।",
        syntax: "<h5>...</h5>",
        codeExample: `<h5>JavaScript Frameworks</h5>`,
        about:
            "The <h5> tag represents a fifth-level heading in an HTML document. It is often used for even smaller sections under <h4> headings.",
        aboutBn:
            "<h5> ট্যাগটি একটি HTML ডকুমেন্টে পঞ্চম স্তরের শিরোনাম নির্দেশ করে। এটি সাধারণত <h4> শিরোনামের অধীনে আরও ছোট বিভাগগুলির জন্য ব্যবহৃত হয়।",
        useCase:
            "Use <h5> for minor subsections or side notes to maintain a proper document structure.",
        useCaseBn:
            "ডকুমেন্টের কাঠামো বজায় রাখতে ছোট উপ-বিভাগ বা সাইড নোটের জন্য <h5> ব্যবহার করুন।",
        active: true,
        category: "Text",
        attributes: [
            {
                name: "class",
                description: "Specifies one or more class names for the element.",
                descriptionBn: "উপাদানের জন্য এক বা একাধিক ক্লাস নাম নির্ধারণ করে।",
                example: `<h5 class="framework-heading">JavaScript Frameworks</h5>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element.",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে।",
                example: `<h5 id="js-frameworks">JavaScript Frameworks</h5>`,
            },
            {
                name: "style",
                description: "Adds inline CSS styling to the element.",
                descriptionBn: "উপাদানে ইনলাইন CSS স্টাইল প্রয়োগ করে।",
                example: `<h5 style="font-weight:600;">JavaScript Frameworks</h5>`,
            },
            {
                name: "title",
                description:
                    "Adds extra information about the element (shown as a tooltip on hover).",
                descriptionBn:
                    "উপাদান সম্পর্কে অতিরিক্ত তথ্য যোগ করে (মাউস রাখলে টুলটিপ হিসাবে প্রদর্শিত হয়)।",
                example: `<h5 title="Minor Heading">JavaScript Frameworks</h5>`,
            },
        ],
    }, {
        id: 5.6,
        name: "h6",
        definition: "Defines the smallest or least important heading in HTML.",
        definitionBn: "HTML-এ সবচেয়ে ছোট বা কম গুরুত্বপূর্ণ শিরোনাম নির্ধারণ করে।",
        syntax: "<h6>...</h6>",
        codeExample: `<h6>Last Updated: 2025</h6>`,
        about:
            "The <h6> tag defines the least important heading in an HTML document. It is used for minor subheadings or small details within a section.",
        aboutBn:
            "<h6> ট্যাগটি একটি HTML ডকুমেন্টে সবচেয়ে কম গুরুত্বপূর্ণ শিরোনাম নির্দেশ করে। এটি সাধারণত ছোট সাবহেডিং বা অতিরিক্ত তথ্য প্রদর্শনের জন্য ব্যবহৃত হয়।",
        useCase:
            "Use <h6> sparingly for small notes or extra details at the end of a section.",
        useCaseBn:
            "কোনো সেকশনের শেষে ছোট নোট বা অতিরিক্ত তথ্য প্রদর্শনের জন্য সীমিতভাবে <h6> ব্যবহার করুন।",
        active: true,
        category: "Text",
        attributes: [
            {
                name: "class",
                description: "Specifies one or more class names for the element.",
                descriptionBn: "উপাদানের জন্য এক বা একাধিক ক্লাস নাম নির্ধারণ করে।",
                example: `<h6 class="note-heading">Last Updated: 2025</h6>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element.",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে।",
                example: `<h6 id="last-update">Last Updated: 2025</h6>`,
            },
            {
                name: "style",
                description: "Adds inline CSS styling to the element.",
                descriptionBn: "উপাদানে ইনলাইন CSS স্টাইল প্রয়োগ করে।",
                example: `<h6 style="color: gray;">Last Updated: 2025</h6>`,
            },
            {
                name: "title",
                description:
                    "Adds extra information about the element (shown as a tooltip on hover).",
                descriptionBn:
                    "উপাদান সম্পর্কে অতিরিক্ত তথ্য যোগ করে (মাউস রাখলে টুলটিপ হিসাবে প্রদর্শিত হয়)।",
                example: `<h6 title="Footer Note">Last Updated: 2025</h6>`,
            },
        ],
    }
    ,

    {
        id: 6,
        name: "p",
        definition: "Defines a paragraph",
        definitionBn: "একটি অনুচ্ছেদ নির্ধারণ করে",
        syntax: "<p>...</p>",
        codeExample: `<p>This is a paragraph.</p>`,
        about: "The <p> tag is used to define paragraphs of text.",
        aboutBn: "<p> ট্যাগটি পাঠ্যের অনুচ্ছেদ নির্ধারণ করতে ব্যবহৃত হয়।",
        useCase: "Wrap text content in paragraphs for readability.",
        useCaseBn: "পাঠ্য কন্টেন্ট প্যারাগ্রাফে রাখুন পাঠযোগ্যতার জন্য।",
        active: true,
        category: "Text",
        attributes: [
            {
                name: "class",
                description: "Specifies one or more class names for the element",
                descriptionBn: "উপাদানের জন্য এক বা একাধিক ক্লাস নাম নির্ধারণ করে",
                example: `<p class="intro-text">This is a paragraph.</p>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে",
                example: `<p id="first-paragraph">This is a paragraph.</p>`,
            },
        ],
    },
    {
        id: 7,
        name: "a",
        definition: "Defines a hyperlink",
        definitionBn: "একটি হাইপারলিঙ্ক নির্ধারণ করে",
        syntax: "<a href='url'>...</a>",
        codeExample: `<a href="https://www.example.com">Visit Example</a>`,
        about: "The <a> tag defines a hyperlink, which is used to link from one page to another.",
        aboutBn: "<a> ট্যাগটি একটি হাইপারলিঙ্ক নির্ধারণ করে, যা একটি পৃষ্ঠা থেকে অন্য পৃষ্ঠায় সংযোগ করতে ব্যবহৃত হয়।",
        useCase: "Use <a> tags to create links to other pages or resources.",
        useCaseBn: "অন্যান্য পৃষ্ঠা বা রিসোর্সে লিঙ্ক তৈরি করতে <a> ট্যাগ ব্যবহার করুন।",
        active: true,
        category: "Link",
        attributes: [
            {
                name: "href",
                description: "Specifies the URL of the page the link goes to",
                descriptionBn: "যে পৃষ্ঠায় লিঙ্কটি যাবে তার URL নির্ধারণ করে",
                example: `<a href="https://www.example.com">Visit Example</a>`,
            },
            {
                name: "target",
                description: "Specifies where to open the linked document",
                descriptionBn: "লিঙ্ক করা ডকুমেন্টটি কোথায় খুলবে তা নির্ধারণ করে",
                example: `<a href="https://www.example.com" target="_blank">Visit Example</a>`,
            },
        ],
    },

    {
        id: 9,
        name: "img",
        definition: "Defines an image",
        definitionBn: "একটি চিত্র নির্ধারণ করে",
        syntax: "<img src='url' alt='description'>",
        codeExample: `<img src="image.jpg" alt="Description of image">`,
        about: "The <img> tag is used to embed images in documents.",
        aboutBn: "<img> ট্যাগটি ডকুমেন্টে চিত্র এম্বেড করতে ব্যবহৃত হয়।",
        useCase: "Use <img> tags to display images on your webpage.",
        useCaseBn: "আপনার ওয়েবপৃষ্ঠায় চিত্র প্রদর্শন করতে <img> ট্যাগ ব্যবহার করুন।",
        active: true,
        category: "Media",
        attributes: [
            {
                name: "src",
                description: "Specifies the path to the image",
                descriptionBn: "চিত্রের পথ নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image">`,
            },
            {
                name: "alt",
                description: "Specifies alternative text for the image",
                descriptionBn: "চিত্রের জন্য বিকল্প পাঠ্য নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image">`,
            },
            {
                name: "width",
                description: "Specifies the width of the image",
                descriptionBn: "চিত্রের প্রস্থ নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image" width="500">`,
            },
            {
                name: "height",
                description: "Specifies the height of the image",
                descriptionBn: "চিত্রের উচ্চতা নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image" height="300">`,
            },
            {
                name: "loading",
                description: "Specifies whether a browser should load an image immediately or defer loading until some conditions are met",
                descriptionBn: "একটি ব্রাউজার চিত্রটি অবিলম্বে লোড করবে কিনা বা কিছু শর্ত পূর্ণ না হওয়া পর্যন্ত লোডিং স্থগিত রাখবে তা নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image" loading="lazy">`,
            },
            {
                name: "srcset",
                description: "Specifies a list of image files to use in different situations",
                descriptionBn: "বিভিন্ন পরিস্থিতিতে ব্যবহারের জন্য চিত্র ফাইলের একটি তালিকা নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image" srcset="image-500.jpg 500w, image-1000.jpg 1000w">`,
            },
            {
                name: "sizes",
                description: "Specifies image sizes for different page layouts",
                descriptionBn: "বিভিন্ন পৃষ্ঠা বিন্যাসের জন্য চিত্র আকার নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image" sizes="(max-width: 600px) 100vw, 50vw">`,
            },
            {
                name: "usemap",
                description: "Specifies an image as a client-side image map",
                descriptionBn: "একটি চিত্র ক্লায়েন্ট-সাইড চিত্র মানচিত্র হিসাবে নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image" usemap="#map">`,
            },
            {
                name: "ismap",
                description: "Specifies an image as a server-side image map",
                descriptionBn: "একটি চিত্র সার্ভার-সাইড চিত্র মানচিত্র হিসাবে নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image" ismap>`,

            },
            {
                name: "referrerpolicy",
                description: "Specifies which referrer information to use when fetching the image",
                descriptionBn: "চিত্রটি আনতে সময় কোন রেফারার তথ্য ব্যবহার করতে হবে তা নির্ধারণ করে",
                example: `<img src="image.jpg" alt="Description of image" referrerpolicy="no-referrer">`,
            },
        ],
    },
    {
        id: 10,
        name: "form",
        definition: "Defines an HTML form for user input",
        definitionBn: "ব্যবহারকারীর ইনপুটের জন্য একটি HTML ফর্ম নির্ধারণ করে",
        syntax: "<form>...</form>",
        codeExample: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>`,
        about: "The <form> tag is used to collect user input.",
        aboutBn: "<form> ট্যাগটি ব্যবহারকারীর ইনপুট সংগ্রহ করতে ব্যবহৃত হয়।",
        useCase: "Use <form> tags to create forms for user data submission.",
        useCaseBn: "ব্যবহারকারীর ডেটা জমা দেওয়ার জন্য <form> ট্যাগ ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            {
                name: "action",
                description: "Specifies where to send the form data when the form is submitted",
                descriptionBn: "ফর্ম জমা দেওয়ার সময় ফর্ম ডেটা কোথায় পাঠাতে হবে তা নির্ধারণ করে",
                example: `<form action="/submit" method="POST">...</form>`,
            },
            {
                name: "method",
                description: "Specifies the HTTP method to use when sending form data",
                descriptionBn: "ফর্ম ডেটা পাঠানোর সময় HTTP পদ্ধতি নির্ধারণ করে",
                example: `<form action="/submit" method="POST">...</form>`,
            },
            {
                name: "enctype",
                description: "Specifies how the form data should be encoded when submitting it to the server",
                descriptionBn: "ফর্ম ডেটা সার্ভারে জমা দেওয়ার সময় কিভাবে এনকোড করা উচিত তা নির্ধারণ করে",
                example: `<form action="/submit" method="POST" enctype="multipart/form-data">...</form>`,
            },
            {
                name: "target",
                description: "Specifies where to display the response after submitting the form",
                descriptionBn: "ফর্ম জমা দেওয়ার পর প্রতিক্রিয়া কোথায় প্রদর্শন করতে হবে তা নির্ধারণ করে",
                example: `<form action="/submit" method="POST" target="_blank">...</form>`,
            },
        ],
    },
    {
        id: 11,
        name: "input",
        definition: "Defines an input control in a form",
        definitionBn: "একটি ফর্মে ইনপুট নিয়ন্ত্রণ নির্ধারণ করে",
        syntax: "<input>",
        codeExample: `<input type="text" id="name" name="name">`,
        about: "The <input> tag is used to create interactive controls in a form.",
        aboutBn: "<input> ট্যাগটি একটি ফর্মে ইন্টারেক্টিভ নিয়ন্ত্রণ তৈরি করতে ব্যবহৃত হয়।",
        useCase: "Use <input> tags to create various types of input fields.",
        useCaseBn: "বিভিন্ন ধরণের ইনপুট ক্ষেত্র তৈরি করতে <input> ট্যাগ ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            {
                name: "type",
                description: "Specifies the type of input element to display",
                descriptionBn: "প্রদর্শন করার জন্য ইনপুট উপাদানের ধরন নির্ধারণ করে",
                example: `<input type="text" id="name" name="name">`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the input element",
                descriptionBn: "ইনপুট উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে",
                example: `<input type="text" id="name" name="name">`,
            },
            {
                name: "name",
                description: "Specifies the name of the input element",
                descriptionBn: "ইনপুট উপাদানের নাম নির্ধারণ করে",
                example: `<input type="text" id="name" name="name">`,
            },
            {
                name: "value",
                description: "Specifies the value of the input element",
                descriptionBn: "ইনপুট উপাদানের মান নির্ধারণ করে",
                example: `<input type="text" id="name" name="name" value="John">`,
            },
            {
                name: "placeholder",
                description: "Specifies a short hint that describes the expected value of the input field",
                descriptionBn: "ইনপুট ক্ষেত্রের প্রত্যাশিত মান বর্ণনা করে এমন একটি সংক্ষিপ্ত ইঙ্গিত নির্ধারণ করে",
                example: `<input type="text" id="name" name="name" placeholder="Enter your name">`,
            },
            {
                name: "required",
                description: "Specifies that the input field must be filled out before submitting the form",
                descriptionBn: "ফর্ম জমা দেওয়ার আগে ইনপুট ক্ষেত্রটি পূর্ণ করতে হবে তা নির্ধারণ করে",
                example: `<input type="text" id="name" name="name" required>`,
            },
            {
                name: "disabled",
                description: "Specifies that the input field is disabled and cannot be interacted with",
                descriptionBn: "ইনপুট ক্ষেত্রটি অক্ষম এবং এর সাথে ইন্টারঅ্যাক্ট করা যাবে না তা নির্ধারণ করে",
                example: `<input type="text" id="name" name="name" disabled>`,
            },
        ],
    },

    {
        id: 12,
        name: "button",
        definition: "Defines a clickable button",
        definitionBn: "একটি ক্লিকযোগ্য বোতাম নির্ধারণ করে",
        syntax: "<button>Button Text</button>",
        codeExample: `<button type="submit">Submit</button>`,
        about: "The <button> element represents a clickable button, which can trigger actions.",
        aboutBn: "<button> উপাদানটি একটি ক্লিকযোগ্য বোতাম নির্দেশ করে, যা অ্যাকশন ট্রিগার করতে পারে।",
        useCase: "Use buttons for form submissions or interactive actions.",
        useCaseBn: "ফর্ম সাবমিশন বা ইন্টারেক্টিভ ক্রিয়ার জন্য বোতাম ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            {
                name: "type",
                description: "Specifies the type of button (button, submit, reset)",
                descriptionBn: "বোতামের ধরণ নির্ধারণ করে (button, submit, reset)",
                example: `<button type="submit">Submit</button>`,
            },
            {
                name: "disabled",
                description: "Disables the button so it cannot be clicked",
                descriptionBn: "বোতামটি অক্ষম করে যাতে এটি ক্লিক করা না যায়",
                example: `<button type="button" disabled>Click me</button>`,
            },
            {
                name: "name",
                description: "Specifies the name of the button",
                descriptionBn: "বোতামের নাম নির্ধারণ করে",
                example: `<button type="submit" name="saveBtn">Save</button>`,
            },
            {
                name: "value",
                description: "Specifies the initial value of the button",
                descriptionBn: "বোতামের প্রাথমিক মান নির্ধারণ করে",
                example: `<button type="submit" value="Save">Save</button>`,
            },
        ],
    },
    {
        id: 13,
        name: "select",
        definition: "Defines a drop-down list",
        definitionBn: "একটি ড্রপডাউন লিস্ট নির্ধারণ করে",
        syntax: "<select>...</select>",
        codeExample: `<select name="fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>`,
        about: "The <select> element is used to create a drop-down list of options.",
        aboutBn: "<select> উপাদানটি বিকল্পগুলির একটি ড্রপডাউন লিস্ট তৈরি করতে ব্যবহৃত হয়।",
        useCase: "Use <select> to allow users to choose one or more options.",
        useCaseBn: "ব্যবহারকারীদের একটি বা একাধিক বিকল্প নির্বাচন করতে <select> ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            {
                name: "name",
                description: "Specifies the name of the select element",
                descriptionBn: "select উপাদানের নাম নির্ধারণ করে",
                example: `<select name="fruits">...</select>`,
            },
            {
                name: "multiple",
                description: "Allows multiple selections",
                descriptionBn: "একাধিক নির্বাচন অনুমোদন করে",
                example: `<select name="fruits" multiple>...</select>`,
            },
            {
                name: "disabled",
                description: "Disables the select element",
                descriptionBn: "select উপাদানটি অক্ষম করে",
                example: `<select name="fruits" disabled>...</select>`,
            },
        ],
    },
    {
        id: 14,
        name: "option",
        definition: "Defines an option in a drop-down list",
        definitionBn: "ড্রপডাউন তালিকায় একটি বিকল্প নির্ধারণ করে",
        syntax: "<option value=''>Option Text</option>",
        codeExample: `<option value="apple">Apple</option>`,
        about: "The <option> element defines an option in a <select> drop-down list.",
        aboutBn: "<option> উপাদানটি <select> ড্রপডাউন তালিকায় একটি বিকল্প নির্ধারণ করে।",
        useCase: "Use <option> inside <select> to provide choices.",
        useCaseBn: "<select> এর ভিতরে <option> ব্যবহার করে বিকল্প প্রদান করুন।",
        active: true,
        category: "Form",
        attributes: [
            {
                name: "value",
                description: "Specifies the value to be sent to the server",
                descriptionBn: "সার্ভারে পাঠানোর জন্য মান নির্ধারণ করে",
                example: `<option value="apple">Apple</option>`,
            },
            {
                name: "selected",
                description: "Pre-selects the option",
                descriptionBn: "বিকল্পটি প্রি-সিলেক্ট করে",
                example: `<option value="banana" selected>Banana</option>`,
            },
            {
                name: "disabled",
                description: "Disables the option",
                descriptionBn: "বিকল্পটি অক্ষম করে",
                example: `<option value="orange" disabled>Orange</option>`,
            },
        ],
    },

    // Lists
    {
        id: 15,
        name: "ul",
        definition: "Defines an unordered list",
        definitionBn: "একটি অর্ডারবিহীন তালিকা নির্ধারণ করে",
        syntax: "<ul>...</ul>",
        codeExample: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`,
        about: "The <ul> element is used for lists where the order of items does not matter.",
        aboutBn: "<ul> উপাদানটি এমন তালিকার জন্য ব্যবহৃত হয় যেখানে আইটেমের ক্রম গুরুত্বপূর্ণ নয়।",
        useCase: "Use <ul> for navigation menus or bullet-point lists.",
        useCaseBn: "নেভিগেশন মেনু বা বুলেট-পয়েন্ট তালিকার জন্য <ul> ব্যবহার করুন।",
        active: true,
        category: "List",
        attributes: [
            {
                name: "type",
                description: "Specifies the bullet style (deprecated in HTML5)",
                descriptionBn: "বুলেটের স্টাইল নির্ধারণ করে (HTML5-এ ডিপ্রিকেটেড)",
                example: `<ul type="circle">...</ul>`,
            },
            {
                name: "class",
                description: "Specifies one or more CSS classes",
                descriptionBn: "এক বা একাধিক CSS ক্লাস নির্ধারণ করে",
                example: `<ul class="menu-list">...</ul>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে",
                example: `<ul id="main-list">...</ul>`,
            },
        ],
    },
    {
        id: 16,
        name: "ol",
        definition: "Defines an ordered list",
        definitionBn: "একটি অর্ডারযুক্ত তালিকা নির্ধারণ করে",
        syntax: "<ol>...</ol>",
        codeExample: `<ol>
  <li>First</li>
  <li>Second</li>
</ol>`,
        about: "The <ol> element is used for lists where the order of items matters.",
        aboutBn: "<ol> উপাদানটি এমন তালিকার জন্য ব্যবহৃত হয় যেখানে আইটেমের ক্রম গুরুত্বপূর্ণ।",
        useCase: "Use <ol> for steps, instructions, or rankings.",
        useCaseBn: "ধাপ, নির্দেশাবলী বা র‍্যাঙ্কিং-এর জন্য <ol> ব্যবহার করুন।",
        active: true,
        category: "List",
        attributes: [
            {
                name: "type",
                description: "Specifies the numbering style (1, A, a, I, i)",
                descriptionBn: "নম্বরিং স্টাইল নির্ধারণ করে (1, A, a, I, i)",
                example: `<ol type="A">...</ol>`,
            },
            {
                name: "start",
                description: "Specifies the start number of the list",
                descriptionBn: "তালিকার শুরু নম্বর নির্ধারণ করে",
                example: `<ol start="5">...</ol>`,
            },
            {
                name: "reversed",
                description: "Specifies that the list order should be descending",
                descriptionBn: "তালিকার ক্রম উল্টো করা উচিত তা নির্ধারণ করে",
                example: `<ol reversed>...</ol>`,
            },
        ],
    },
    {
        id: 17,
        name: "li",
        definition: "Defines a list item",
        definitionBn: "একটি তালিকা আইটেম নির্ধারণ করে",
        syntax: "<li>Item</li>",
        codeExample: `<li>Item 1</li>`,
        about: "The <li> element is used inside <ul> or <ol> to define individual items.",
        aboutBn: "<li> উপাদানটি <ul> বা <ol> এর ভিতরে পৃথক আইটেম নির্ধারণ করতে ব্যবহৃত হয়।",
        useCase: "Use <li> for each item in a list.",
        useCaseBn: "তালিকার প্রতিটি আইটেমের জন্য <li> ব্যবহার করুন।",
        active: true,
        category: "List",
        attributes: [
            {
                name: "value",
                description: "Specifies the value of the list item (only for ordered lists)",
                descriptionBn: "তালিকা আইটেমের মান নির্ধারণ করে (কেবল অর্ডারযুক্ত তালিকার জন্য)",
                example: `<li value="3">Third Item</li>`,
            },
            {
                name: "class",
                description: "Specifies one or more CSS classes",
                descriptionBn: "এক বা একাধিক CSS ক্লাস নির্ধারণ করে",
                example: `<li class="menu-item">Item</li>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে",
                example: `<li id="item1">Item</li>`,
            },
        ],
    },

    // Tables
    {
        id: 18,
        name: "table",
        definition: "Defines a table",
        definitionBn: "একটি টেবিল নির্ধারণ করে",
        syntax: "<table>...</table>",
        codeExample: `<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>`,
        about: "The <table> element defines a table with rows and columns.",
        aboutBn: "<table> উপাদানটি সারি এবং কলামযুক্ত একটি টেবিল নির্ধারণ করে।",
        useCase: "Use tables to display tabular data.",
        useCaseBn: "সারণী ডেটা প্রদর্শনের জন্য টেবিল ব্যবহার করুন।",
        active: true,
        category: "Table",
        attributes: [
            {
                name: "border",
                description: "Specifies the border width (deprecated in HTML5)",
                descriptionBn: "বর্ডারের প্রস্থ নির্ধারণ করে (HTML5-এ ডিপ্রিকেটেড)",
                example: `<table border="1">...</table>`,
            },
            {
                name: "cellpadding",
                description: "Specifies padding inside cells (deprecated in HTML5)",
                descriptionBn: "সেলগুলির ভিতরে প্যাডিং নির্ধারণ করে (HTML5-এ ডিপ্রিকেটেড)",
                example: `<table cellpadding="5">...</table>`,
            },
            {
                name: "cellspacing",
                description: "Specifies space between cells (deprecated in HTML5)",
                descriptionBn: "সেলগুলির মধ্যে স্থান নির্ধারণ করে (HTML5-এ ডিপ্রিকেটেড)",
                example: `<table cellspacing="5">...</table>`,
            },
            {
                name: "class",
                description: "Specifies one or more CSS classes",
                descriptionBn: "এক বা একাধিক CSS ক্লাস নির্ধারণ করে",
                example: `<table class="data-table">...</table>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the element",
                descriptionBn: "উপাদানের জন্য একটি অনন্য আইডি নির্ধারণ করে",
                example: `<table id="users-table">...</table>`,
            },
        ],
    },
    {
        id: 19,
        name: "tr",
        definition: "Defines a table row",
        definitionBn: "একটি টেবিল সারি নির্ধারণ করে",
        syntax: "<tr>...</tr>",
        codeExample: `<tr>
  <td>Data 1</td>
  <td>Data 2</td>
</tr>`,
        about: "The <tr> element defines a row in a table.",
        aboutBn: "<tr> উপাদানটি টেবিলের একটি সারি নির্ধারণ করে।",
        useCase: "Use <tr> to group table cells into a row.",
        useCaseBn: "টেবিলের সেলগুলিকে একটি সারিতে গ্রুপ করতে <tr> ব্যবহার করুন।",
        active: true,
        category: "Table",
        attributes: [
            {
                name: "class",
                description: "Specifies one or more CSS classes",
                descriptionBn: "এক বা একাধিক CSS ক্লাস নির্ধারণ করে",
                example: `<tr class="row-highlight">...</tr>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the row",
                descriptionBn: "সারির জন্য একটি অনন্য আইডি নির্ধারণ করে",
                example: `<tr id="row1">...</tr>`,
            },
        ],
    },
    {
        id: 20,
        name: "td",
        definition: "Defines a table cell",
        definitionBn: "একটি টেবিল সেল নির্ধারণ করে",
        syntax: "<td>Data</td>",
        codeExample: `<td>Data 1</td>`,
        about: "The <td> element defines a standard cell in a table row.",
        aboutBn: "<td> উপাদানটি টেবিল সারির একটি সাধারণ সেল নির্ধারণ করে।",
        useCase: "Use <td> inside <tr> to add data cells.",
        useCaseBn: "<tr> এর ভিতরে <td> ব্যবহার করে ডেটা সেল যোগ করুন।",
        active: true,
        category: "Table",
        attributes: [
            {
                name: "colspan",
                description: "Specifies the number of columns a cell should span",
                descriptionBn: "একটি সেল কতগুলো কলাম জুড়ে বিস্তৃত হবে তা নির্ধারণ করে",
                example: `<td colspan="2">Merged Cell</td>`,
            },
            {
                name: "rowspan",
                description: "Specifies the number of rows a cell should span",
                descriptionBn: "একটি সেল কতগুলো সারি জুড়ে বিস্তৃত হবে তা নির্ধারণ করে",
                example: `<td rowspan="2">Merged Cell</td>`,
            },
            {
                name: "class",
                description: "Specifies one or more CSS classes",
                descriptionBn: "এক বা একাধিক CSS ক্লাস নির্ধারণ করে",
                example: `<td class="data-cell">Data</td>`,
            },
            {
                name: "id",
                description: "Specifies a unique id for the cell",
                descriptionBn: "সেলের জন্য একটি অনন্য আইডি নির্ধারণ করে",
                example: `<td id="cell1">Data</td>`,
            },
        ],
    },

    // Semantic Tags
    {
        id: 21,
        name: "header",
        definition: "Defines a header for a document or section",
        definitionBn: "ডকুমেন্ট বা সেকশনের জন্য একটি হেডার নির্ধারণ করে",
        syntax: "<header>...</header>",
        codeExample: `<header>
  <h1>My Website</h1>
  <nav>Navigation Menu</nav>
</header>`,
        about: "The <header> element represents introductory content or navigational links.",
        aboutBn: "<header> উপাদানটি প্রারম্ভিক কনটেন্ট বা ন্যাভিগেশন লিঙ্ক নির্দেশ করে।",
        useCase: "Use <header> at the top of a page or section for titles and menus.",
        useCaseBn: "শিরোনাম এবং মেনুর জন্য পৃষ্ঠা বা সেকশনের শীর্ষে <header> ব্যবহার করুন।",
        active: true,
        category: "Semantic",
        attributes: [
            {
                name: "class",
                description: "Specifies CSS classes",
                descriptionBn: "CSS ক্লাস নির্ধারণ করে",
                example: `<header class="site-header">...</header>`,
            },
            {
                name: "id",
                description: "Specifies a unique ID",
                descriptionBn: "একটি অনন্য আইডি নির্ধারণ করে",
                example: `<header id="main-header">...</header>`,
            },
        ],
    },
    {
        id: 22,
        name: "footer",
        definition: "Defines a footer for a document or section",
        definitionBn: "ডকুমেন্ট বা সেকশনের জন্য একটি ফুটার নির্ধারণ করে",
        syntax: "<footer>...</footer>",
        codeExample: `<footer>
  <p>© 2025 My Website</p>
</footer>`,
        about: "The <footer> element represents footer content like copyright or contact info.",
        aboutBn: "<footer> উপাদানটি কপিরাইট বা যোগাযোগের তথ্যের মতো ফুটার কনটেন্ট নির্দেশ করে।",
        useCase: "Use <footer> at the bottom of a page or section.",
        useCaseBn: "পৃষ্ঠা বা সেকশনের নিচে <footer> ব্যবহার করুন।",
        active: true,
        category: "Semantic",
        attributes: [
            {
                name: "class",
                description: "Specifies CSS classes",
                descriptionBn: "CSS ক্লাস নির্ধারণ করে",
                example: `<footer class="site-footer">...</footer>`,
            },
            {
                name: "id",
                description: "Specifies a unique ID",
                descriptionBn: "একটি অনন্য আইডি নির্ধারণ করে",
                example: `<footer id="main-footer">...</footer>`,
            },
        ],
    },
    {
        id: 23,
        name: "section",
        definition: "Defines a section in a document",
        definitionBn: "ডকুমেন্টে একটি সেকশন নির্ধারণ করে",
        syntax: "<section>...</section>",
        codeExample: `<section>
  <h2>About Us</h2>
  <p>Information about our company.</p>
</section>`,
        about: "The <section> element represents a standalone section of content.",
        aboutBn: "<section> উপাদানটি স্বতন্ত্র কনটেন্টের একটি সেকশন নির্দেশ করে।",
        useCase: "Use <section> to group related content together.",
        useCaseBn: "সংক্রান্ত কনটেন্ট একত্রিত করতে <section> ব্যবহার করুন।",
        active: true,
        category: "Semantic",
        attributes: [
            {
                name: "class",
                description: "Specifies CSS classes",
                descriptionBn: "CSS ক্লাস নির্ধারণ করে",
                example: `<section class="about-section">...</section>`,
            },
            {
                name: "id",
                description: "Specifies a unique ID",
                descriptionBn: "একটি অনন্য আইডি নির্ধারণ করে",
                example: `<section id="about">...</section>`,
            },
        ],
    },
    {
        id: 24,
        name: "article",
        definition: "Defines an independent article",
        definitionBn: "একটি স্বাধীন আর্টিকেল নির্ধারণ করে",
        syntax: "<article>...</article>",
        codeExample: `<article>
  <h2>Blog Post</h2>
  <p>Content of the post.</p>
</article>`,
        about: "The <article> element represents self-contained content that can be distributed independently.",
        aboutBn: "<article> উপাদানটি স্বতন্ত্র কনটেন্ট নির্দেশ করে যা স্বাধীনভাবে বিতরণ করা যেতে পারে।",
        useCase: "Use <article> for blog posts, news stories, or forum posts.",
        useCaseBn: "ব্লগ পোস্ট, সংবাদ কাহিনী, বা ফোরাম পোস্টের জন্য <article> ব্যবহার করুন।",
        active: true,
        category: "Semantic",
        attributes: [
            {
                name: "class",
                description: "Specifies CSS classes",
                descriptionBn: "CSS ক্লাস নির্ধারণ করে",
                example: `<article class="blog-post">...</article>`,
            },
            {
                name: "id",
                description: "Specifies a unique ID",
                descriptionBn: "একটি অনন্য আইডি নির্ধারণ করে",
                example: `<article id="post1">...</article>`,
            },
        ],
    },

    // Media Tags
    {
        id: 25,
        name: "video",
        definition: "Embeds a video file",
        definitionBn: "একটি ভিডিও ফাইল এম্বেড করে",
        syntax: "<video>...</video>",
        codeExample: `<video controls width="500">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`,
        about: "The <video> element allows you to embed video content on a web page.",
        aboutBn: "<video> উপাদানটি একটি ওয়েবপৃষ্ঠায় ভিডিও কনটেন্ট এম্বেড করতে দেয়।",
        useCase: "Use <video> to show multimedia content like tutorials or advertisements.",
        useCaseBn: "টিউটোরিয়াল বা বিজ্ঞাপনের মতো মাল্টিমিডিয়া কনটেন্ট দেখানোর জন্য <video> ব্যবহার করুন।",
        active: true,
        category: "Media",
        attributes: [
            {
                name: "controls",
                description: "Adds playback controls",
                descriptionBn: "প্লেব্যাক কন্ট্রোল যোগ করে",
                example: `<video controls>...</video>`,
            },
            {
                name: "autoplay",
                description: "Specifies that the video will start playing automatically",
                descriptionBn: "ভিডিও স্বয়ংক্রিয়ভাবে প্লে শুরু করবে তা নির্ধারণ করে",
                example: `<video autoplay>...</video>`,
            },
            {
                name: "loop",
                description: "Specifies that the video will loop after finishing",
                descriptionBn: "ভিডিও শেষ হওয়ার পর পুনরায় শুরু হবে তা নির্ধারণ করে",
                example: `<video loop>...</video>`,
            },
            {
                name: "muted",
                description: "Specifies that the video should start muted",
                descriptionBn: "ভিডিওটি মিউট অবস্থায় শুরু হবে তা নির্ধারণ করে",
                example: `<video muted>...</video>`,
            },
            {
                name: "poster",
                description: "Specifies an image to show while the video is downloading or until the user hits play",
                descriptionBn: "ভিডিও ডাউনলোড হওয়া বা ইউজার প্লে না করার সময় একটি ছবি দেখায়",
                example: `<video poster="thumbnail.jpg">...</video>`,
            },
        ],
    },
    {
        id: 26,
        name: "audio",
        definition: "Embeds an audio file",
        definitionBn: "একটি অডিও ফাইল এম্বেড করে",
        syntax: "<audio>...</audio>",
        codeExample: `<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`,
        about: "The <audio> element allows you to embed audio content on a web page.",
        aboutBn: "<audio> উপাদানটি একটি ওয়েবপৃষ্ঠায় অডিও কনটেন্ট এম্বেড করতে দেয়।",
        useCase: "Use <audio> to play music, podcasts, or sound effects.",
        useCaseBn: "মিউজিক, পডকাস্ট বা সাউন্ড ইফেক্ট প্লে করতে <audio> ব্যবহার করুন।",
        active: true,
        category: "Media",
        attributes: [
            {
                name: "controls",
                description: "Adds playback controls",
                descriptionBn: "প্লেব্যাক কন্ট্রোল যোগ করে",
                example: `<audio controls>...</audio>`,
            },
            {
                name: "autoplay",
                description: "Specifies that the audio will start automatically",
                descriptionBn: "অডিও স্বয়ংক্রিয়ভাবে শুরু হবে তা নির্ধারণ করে",
                example: `<audio autoplay>...</audio>`,
            },
            {
                name: "loop",
                description: "Specifies that the audio will loop after finishing",
                descriptionBn: "অডিও শেষ হওয়ার পর পুনরায় শুরু হবে তা নির্ধারণ করে",
                example: `<audio loop>...</audio>`,
            },
            {
                name: "muted",
                description: "Specifies that the audio should start muted",
                descriptionBn: "অডিও মিউট অবস্থায় শুরু হবে তা নির্ধারণ করে",
                example: `<audio muted>...</audio>`,
            },
        ],
    },

    // Interactive Tags
    {
        id: 27,
        name: "details",
        definition: "Defines additional details that the user can view or hide",
        definitionBn: "অতিরিক্ত বিবরণ নির্ধারণ করে যা ব্যবহারকারী দেখতে বা লুকাতে পারে",
        syntax: "<details>...</details>",
        codeExample: `<details>
  <summary>More Info</summary>
  <p>Here are the additional details.</p>
</details>`,
        about: "The <details> element creates a disclosure widget for showing/hiding content.",
        aboutBn: "<details> উপাদানটি কনটেন্ট দেখানো/লুকানোর জন্য একটি ডিসক্লোজার উইজেট তৈরি করে।",
        useCase: "Use <details> to show optional or advanced content.",
        useCaseBn: "ঐচ্ছিক বা উন্নত কনটেন্ট দেখানোর জন্য <details> ব্যবহার করুন।",
        active: true,
        category: "Interactive",
        attributes: [
            {
                name: "open",
                description: "Specifies that the details should be open by default",
                descriptionBn: "বিবরণগুলি ডিফল্টভাবে খোলা থাকবে তা নির্ধারণ করে",
                example: `<details open>...</details>`,
            },
        ],
    },
    {
        id: 28,
        name: "summary",
        definition: "Defines a visible heading for a <details> element",
        definitionBn: "<details> উপাদানের জন্য দৃশ্যমান শিরোনাম নির্ধারণ করে",
        syntax: "<summary>Heading</summary>",
        codeExample: `<summary>More Info</summary>`,
        about: "The <summary> element provides a summary or caption for <details> content.",
        aboutBn: "<summary> উপাদানটি <details> কনটেন্টের জন্য একটি সারসংক্ষেপ বা ক্যাপশন প্রদান করে।",
        useCase: "Use <summary> inside <details> as the clickable heading.",
        useCaseBn: "<details> এর ভিতরে <summary> ব্যবহার করুন ক্লিকযোগ্য হেডিং হিসেবে।",
        active: true,
        category: "Interactive",
        attributes: [],
    },
    // Form Controls
    {
        id: 29,
        name: "textarea",
        definition: "Defines a multi-line text input field",
        definitionBn: "একটি বহু-লাইন টেক্সট ইনপুট ক্ষেত্র নির্ধারণ করে",
        syntax: "<textarea>...</textarea>",
        codeExample: `<textarea name="message" rows="4" cols="50">Your message here</textarea>`,
        about: "The <textarea> element allows users to input multiple lines of text.",
        aboutBn: "<textarea> উপাদানটি ব্যবহারকারীদের একাধিক লাইনের টেক্সট ইনপুট করতে দেয়।",
        useCase: "Use <textarea> for comments, messages, or long text input.",
        useCaseBn: "মন্তব্য, বার্তা বা দীর্ঘ টেক্সট ইনপুটের জন্য <textarea> ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            { name: "name", description: "Name of the textarea", descriptionBn: "Textarea এর নাম", example: `<textarea name="message"></textarea>` },
            { name: "rows", description: "Number of visible text lines", descriptionBn: "দৃশ্যমান টেক্সট লাইনের সংখ্যা", example: `<textarea rows="4"></textarea>` },
            { name: "cols", description: "Width of the textarea in characters", descriptionBn: "Characters অনুযায়ী textarea প্রস্থ", example: `<textarea cols="50"></textarea>` },
            { name: "placeholder", description: "Placeholder text", descriptionBn: "প্লেসহোল্ডার টেক্সট", example: `<textarea placeholder="Enter text"></textarea>` },
            { name: "disabled", description: "Disables the textarea", descriptionBn: "Textarea অক্ষম করে", example: `<textarea disabled></textarea>` },
            { name: "readonly", description: "Read-only textarea", descriptionBn: "Textarea শুধুমাত্র পড়ার জন্য", example: `<textarea readonly></textarea>` },
        ],
    },
    {
        id: 30,
        name: "fieldset",
        definition: "Groups related form elements",
        definitionBn: "সংক্রান্ত ফর্ম উপাদানগুলো গ্রুপ করে",
        syntax: "<fieldset>...</fieldset>",
        codeExample: `<fieldset>
  <legend>Personal Information</legend>
  <input type="text" name="name">
  <input type="email" name="email">
</fieldset>`,
        about: "The <fieldset> element groups related elements inside a form.",
        aboutBn: "<fieldset> উপাদানটি একটি ফর্মের ভিতরে সম্পর্কিত উপাদানগুলো গ্রুপ করে।",
        useCase: "Use <fieldset> to organize related form fields.",
        useCaseBn: "সংক্রান্ত ফর্ম ফিল্ডগুলোকে সংগঠিত করতে <fieldset> ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            { name: "disabled", description: "Disables all form elements in the group", descriptionBn: "গ্রুপের সব ফর্ম উপাদান অক্ষম করে", example: `<fieldset disabled>...</fieldset>` },
            { name: "class", description: "Specifies CSS classes", descriptionBn: "CSS ক্লাস নির্ধারণ করে", example: `<fieldset class="form-group">...</fieldset>` },
            { name: "id", description: "Specifies a unique ID", descriptionBn: "একটি অনন্য আইডি নির্ধারণ করে", example: `<fieldset id="personal-info">...</fieldset>` },
        ],
    },
    {
        id: 31,
        name: "legend",
        definition: "Defines a caption for a <fieldset>",
        definitionBn: "<fieldset> এর জন্য একটি ক্যাপশন নির্ধারণ করে",
        syntax: "<legend>Caption</legend>",
        codeExample: `<fieldset>
  <legend>Personal Information</legend>
</fieldset>`,
        about: "The <legend> element provides a caption for the <fieldset> element.",
        aboutBn: "<legend> উপাদানটি <fieldset> এর জন্য একটি ক্যাপশন প্রদান করে।",
        useCase: "Use <legend> to describe grouped form fields.",
        useCaseBn: "গ্রুপ করা ফর্ম ফিল্ডগুলোর বর্ণনা দিতে <legend> ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [],
    },
    {
        id: 32,
        name: "label",
        definition: "Defines a label for an <input> element",
        definitionBn: "<input> উপাদানের জন্য একটি লেবেল নির্ধারণ করে",
        syntax: "<label for='id'>Label Text</label>",
        codeExample: `<label for="name">Name:</label>
<input type="text" id="name" name="name">`,
        about: "The <label> element improves accessibility by associating text with a form control.",
        aboutBn: "<label> উপাদানটি একটি ফর্ম কন্ট্রোলের সাথে টেক্সট সংযুক্ত করে অ্যাক্সেসিবিলিটি উন্নত করে।",
        useCase: "Use <label> for all form controls to improve accessibility.",
        useCaseBn: "অ্যাক্সেসিবিলিটি উন্নত করতে সব ফর্ম কন্ট্রোলের জন্য <label> ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            { name: "for", description: "Associates the label with an input element's id", descriptionBn: "লেবেলকে ইনপুট উপাদানের id-এর সাথে সংযুক্ত করে", example: `<label for="email">Email</label>` },
        ],
    },

    // Iframe
    {
        id: 33,
        name: "iframe",
        definition: "Embeds another HTML page within the current page",
        definitionBn: "বর্তমান পৃষ্ঠার মধ্যে আরেকটি HTML পৃষ্ঠা এম্বেড করে",
        syntax: "<iframe src='url'></iframe>",
        codeExample: `<iframe src="https://example.com" width="600" height="400"></iframe>`,
        about: "The <iframe> element allows you to embed another web page inside your page.",
        aboutBn: "<iframe> উপাদানটি আপনার পৃষ্ঠার ভিতরে আরেকটি ওয়েবপৃষ্ঠা এম্বেড করতে দেয়।",
        useCase: "Use <iframe> to embed maps, videos, or external content.",
        useCaseBn: "ম্যাপ, ভিডিও বা বহিরাগত কনটেন্ট এম্বেড করতে <iframe> ব্যবহার করুন।",
        active: true,
        category: "Embed",
        attributes: [
            { name: "src", description: "Specifies the URL of the page to embed", descriptionBn: "এম্বেড করার পৃষ্ঠার URL নির্ধারণ করে", example: `<iframe src="page.html"></iframe>` },
            { name: "width", description: "Width of the iframe", descriptionBn: "Iframe এর প্রস্থ নির্ধারণ করে", example: `<iframe width="600"></iframe>` },
            { name: "height", description: "Height of the iframe", descriptionBn: "Iframe এর উচ্চতা নির্ধারণ করে", example: `<iframe height="400"></iframe>` },
            { name: "frameborder", description: "Specifies border (deprecated in HTML5)", descriptionBn: "বর্ডার নির্ধারণ করে (HTML5-এ deprecated)", example: `<iframe frameborder="0"></iframe>` },
            { name: "allowfullscreen", description: "Allows fullscreen mode", descriptionBn: "ফুলস্ক্রিন মোড অনুমোদন করে", example: `<iframe allowfullscreen></iframe>` },
        ],
    },

    // Navigation & Miscellaneous
    {
        id: 34,
        name: "nav",
        definition: "Defines navigation links",
        definitionBn: "নেভিগেশন লিঙ্ক নির্ধারণ করে",
        syntax: "<nav>...</nav>",
        codeExample: `<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
</nav>`,
        about: "The <nav> element groups primary navigation links.",
        aboutBn: "<nav> উপাদানটি প্রধান নেভিগেশন লিঙ্কগুলোকে গ্রুপ করে।",
        useCase: "Use <nav> for menus and site navigation.",
        useCaseBn: "মেনু এবং সাইট নেভিগেশনের জন্য <nav> ব্যবহার করুন।",
        active: true,
        category: "Semantic",
        attributes: [],
    },
    {
        id: 35,
        name: "main",
        definition: "Defines the main content of the document",
        definitionBn: "ডকুমেন্টের মূল কনটেন্ট নির্ধারণ করে",
        syntax: "<main>...</main>",
        codeExample: `<main>
  <h1>Main Content</h1>
  <p>Important information goes here.</p>
</main>`,
        about: "The <main> element highlights the central content of the page.",
        aboutBn: "<main> উপাদানটি পৃষ্ঠার কেন্দ্রীয় কনটেন্টকে হাইলাইট করে।",
        useCase: "Use <main> to wrap the main content of your page.",
        useCaseBn: "পৃষ্ঠার মূল কনটেন্টকে আবৃত করতে <main> ব্যবহার করুন।",
        active: true,
        category: "Semantic",
        attributes: [],
    },
    {
        id: 36,
        name: "aside",
        definition: "Defines content aside from the main content",
        definitionBn: "মূল কনটেন্ট থেকে পৃথক কনটেন্ট নির্ধারণ করে",
        syntax: "<aside>...</aside>",
        codeExample: `<aside>
  <h2>Related Links</h2>
  <p>Other articles you may like.</p>
</aside>`,
        about: "The <aside> element represents content related to the main content, like sidebars.",
        aboutBn: "<aside> উপাদানটি মূল কনটেন্ট সম্পর্কিত কনটেন্ট নির্দেশ করে, যেমন সাইডবার।",
        useCase: "Use <aside> for sidebars or supplementary information.",
        useCaseBn: "সাইডবার বা অতিরিক্ত তথ্যের জন্য <aside> ব্যবহার করুন।",
        active: true,
        category: "Semantic",
        attributes: [],
    },
    {
        id: 37,
        name: "mark",
        definition: "Defines highlighted text",
        definitionBn: "হাইলাইট করা টেক্সট নির্ধারণ করে",
        syntax: "<mark>Text</mark>",
        codeExample: `<p>This is <mark>important</mark> text.</p>`,
        about: "The <mark> element highlights text for reference or emphasis.",
        aboutBn: "<mark> উপাদানটি রেফারেন্স বা গুরুত্বের জন্য টেক্সট হাইলাইট করে।",
        useCase: "Use <mark> to emphasize important text.",
        useCaseBn: "গুরুত্বপূর্ণ টেক্সট হাইলাইট করতে <mark> ব্যবহার করুন।",
        active: true,
        category: "Text",
        attributes: [],
    },
    {
        id: 38,
        name: "time",
        definition: "Defines a date/time",
        definitionBn: "একটি তারিখ/সময় নির্ধারণ করে",
        syntax: "<time datetime='YYYY-MM-DD'>Date</time>",
        codeExample: `<time datetime="2025-10-26">October 26, 2025</time>`,
        about: "The <time> element represents a specific time or date.",
        aboutBn: "<time> উপাদানটি একটি নির্দিষ্ট সময় বা তারিখ নির্দেশ করে।",
        useCase: "Use <time> to mark dates or times in your content.",
        useCaseBn: "আপনার কনটেন্টে তারিখ বা সময় চিহ্নিত করতে <time> ব্যবহার করুন।",
        active: true,
        category: "Text",
        attributes: [
            { name: "datetime", description: "Specifies the machine-readable date/time", descriptionBn: "মেশিন-পাঠযোগ্য তারিখ/সময় নির্ধারণ করে", example: `<time datetime="2025-10-26">Oct 26</time>` },
        ],
    },
    {
        id: 39,
        name: "progress",
        definition: "Represents the completion progress of a task",
        definitionBn: "একটি কাজের সম্পন্নতার অগ্রগতি নির্দেশ করে",
        syntax: "<progress value='x' max='y'></progress>",
        codeExample: `<progress value="70" max="100"></progress>`,
        about: "The <progress> element shows how much of a task is completed.",
        aboutBn: "<progress> উপাদানটি একটি কাজ কতটুকু সম্পন্ন হয়েছে তা দেখায়।",
        useCase: "Use <progress> for progress bars or task completion indicators.",
        useCaseBn: "প্রগ্রেস বার বা কাজের সম্পন্নতার সূচক হিসেবে <progress> ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            { name: "value", description: "Current progress value", descriptionBn: "বর্তমান অগ্রগতির মান", example: `<progress value="70" max="100"></progress>` },
            { name: "max", description: "Maximum progress value", descriptionBn: "সর্বোচ্চ অগ্রগতির মান", example: `<progress max="100"></progress>` },
        ],
    },
    {
        id: 40,
        name: "meter",
        definition: "Represents a scalar measurement within a known range",
        definitionBn: "একটি পরিচিত পরিসরের মধ্যে একটি স্কেলার পরিমাপ নির্দেশ করে",
        syntax: "<meter value='x' min='0' max='y'></meter>",
        codeExample: `<meter value="0.6" min="0" max="1"></meter>`,
        about: "The <meter> element represents a measurement, like disk usage or strength.",
        aboutBn: "<meter> উপাদানটি একটি পরিমাপ নির্দেশ করে, যেমন ডিস্ক ব্যবহার বা শক্তি।",
        useCase: "Use <meter> to display measurements or performance metrics.",
        useCaseBn: "পরিমাপ বা পারফরম্যান্স মেট্রিক প্রদর্শনের জন্য <meter> ব্যবহার করুন।",
        active: true,
        category: "Form",
        attributes: [
            { name: "value", description: "Current measurement", descriptionBn: "বর্তমান পরিমাপ", example: `<meter value="0.6"></meter>` },
            { name: "min", description: "Minimum value", descriptionBn: "নূন্যতম মান", example: `<meter min="0"></meter>` },
            { name: "max", description: "Maximum value", descriptionBn: "সর্বোচ্চ মান", example: `<meter max="1"></meter>` },
        ],
    },
];













//all data ganarated by GPT and modyfi by me.