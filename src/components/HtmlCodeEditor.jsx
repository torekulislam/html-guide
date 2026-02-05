import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Copy, Download, Sun, Moon, CopyCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

function HtmlCodeEditor() {
  const dispatch = useDispatch();

  const initialHtml = useSelector((state) => state.htmlStore.htmlCode);

  const [code, setCode] = useState(initialHtml);
  const [theme, setTheme] = useState("light");

  //BUTTON COUSTOM STYLE----
  const buttonStyle = ` text-[14px] px-3 py-2 rounded font-medium border border-sky-400 hover:bg-sky-50 hover:shadow transition text-gray-600`;

  const [copied, setCopied] = useState(false);
  // Copy function
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  /* Download HTML */
  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  /* Toggle theme */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "vs-dark" ? "light" : "vs-dark"));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "anticipate" }}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-baseline gap-3">
        <button
          onClick={handleDownload}
          className={`${buttonStyle} flex  items-center gap-1`}
        >
          <Download className="h-4.5 text-sky-400" />
          <span className=" hidden md:block">Download HTML</span>
        </button>

        <button
          onClick={toggleTheme}
          className={`${buttonStyle} flex  items-center gap-1`}
        >
          {theme === "vs-dark" ? (
            <>
              <motion.div
                key={"SUN"}
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "360deg" }}
                transition={{ duration: 1 }}
              >
                <Sun className="h-4.5 text-sky-400" />
              </motion.div>
              <span className=" hidden md:block">Light Mode</span>
            </>
          ) : (
            <>
              <motion.div
                key={"moon"}
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "-360deg" }}
                transition={{ duration: 1 }}
              >
                <Moon className="h-4.5 text-sky-400" />
              </motion.div>
              <span className=" hidden md:block">Dark Mode</span>
            </>
          )}
        </button>
        <button onClick={handleCopy} className={buttonStyle}>
          {copied ? (
            <div className="flex items-center gap-1">
              <CopyCheck className="h-4 text-sky-400" /> Copied!
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Copy className="h-4 text-sky-400" /> Copy Code
            </div>
          )}
        </button>
      </div>

      {/* Editor + Preview */}
      <div className=" overflow-hidden rounded-xl flex flex-wrap md:flex-nowrap max-h-[80vh] mt-5 gap-1">
        {/* Editor */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh]">
          <Editor
            height="100%"
            language="html"
            theme={theme}
            value={code}
            onChange={(value) => setCode(value ?? "")}
            options={{
              fontFamily: "Consolas, 'Courier New', monospace",
              fontSize: 14,
              wordWrap: "on",
              minimap: { enabled: false },
              automaticLayout: true,
              padding: {
                top: 16,
                bottom: 16,
              },
            }}
          />
        </div>

        {/* Preview */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh]">
          <iframe
            title="Preview"
            srcDoc={code}
            sandbox="allow-scripts"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              background: theme === "vs-dark" ? "#141416" : "#ffffff",
              color: "#fff",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HtmlCodeEditor;

// fontFamily: "Consolas, 'Courier New', monospace",
