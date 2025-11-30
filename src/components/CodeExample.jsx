import React, { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";
export default function CodeExample({ code }) {
  const [copied, setCopied] = useState(false);

  // Escape HTML for display
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Highlight comments (green)
  let highlighted = escaped.replace(
    /(&lt;!--[\s\S]*?--&gt;)/g,
    `<span class="text-green-500">$1</span>`
  );

  // Highlight tags (tag names red, brackets gray, attributes light gray)
  highlighted = highlighted.replace(
    /(&lt;\/?)([a-zA-Z0-9-]+)(.*?)(\/?&gt;)/g,
    `<span class="text-gray-500">$1</span><span class="text-red-500">$2</span><span class="text-gray-200">$3</span><span class="text-gray-500">$4</span>`
  );

  // Add indentation for nested tags
  highlighted = highlighted.replace(/ {2}/g, "&nbsp;&nbsp;");

  // Copy function
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1E1E1E] text-gray-200 font-mono text-sm rounded-xl overflow-hidden max-h-[400px] mt-4">
      {/* FLEX TOP BAR — replaces relative/absolute */}
      <div className="flex justify-end items-center px-4 py-2 bg-[#262626] border-b border-[#333]">
        <button
          onClick={handleCopy}
          className="text-gray-300 text-[14px] px-3 py-1 rounded hover:text-gray-200 transition"
        >
          {copied ? (
            <div className="flex items-center gap-1">
              <CopyCheck className="h-4" /> Copied!
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Copy className="h-4" /> Copy Code
            </div>
          )}
        </button>
      </div>

      <pre
        className="whitespace-pre-wrap bg-[#1E1E1E] text-gray-200 font-mono text-sm rounded-xl overflow-x-auto overflow-y-auto max-h-[400px] p-4"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}

// This code have problem .>>>>>

// import React, { useState } from "react";
// import { Copy, CopyCheck } from "lucide-react";
// export default function CodeExample({ code }) {
//   const [copied, setCopied] = useState(false);

//   // Escape HTML for display
//   const escaped = code
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;");

//   // Highlight comments (green)
//   let highlighted = escaped.replace(
//     /(&lt;!--[\s\S]*?--&gt;)/g,
//     `<span class="text-green-500">$1</span>`
//   );

//   // Highlight tags (tag names red, brackets gray, attributes light gray)
//   highlighted = highlighted.replace(
//     /(&lt;\/?)([a-zA-Z0-9-]+)(.*?)(\/?&gt;)/g,
//     `<span class="text-gray-500">$1</span><span class="text-red-500">$2</span><span class="text-gray-200">$3</span><span class="text-gray-500">$4</span>`
//   );

//   // Add indentation for nested tags
//   highlighted = highlighted.replace(/ {2}/g, "&nbsp;&nbsp;");

//   // Copy function
//   const handleCopy = () => {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="relative bg-[#1E1E1E] text-gray-200 font-mono text-sm rounded-xl overflow-x-auto overflow-y-auto max-h-[400px] p-4 z-0">
//       {/* Copy button */}
//       <button
//         onClick={handleCopy}
//         className="absolute top-2 right-2  text-gray-600 text-[16px] px-3 py-1 rounded hover:text-gray-400 transition z-0"
//       >
//         {copied ? (
//           <div className="flex items-center">
//             <CopyCheck className="h-4" /> copied!
//           </div>
//         ) : (
//           <div className="flex items-center">
//             <Copy className="h-4" /> copy code
//           </div>
//         )}
//       </button>

//       <pre
//         className="whitespace-pre-wrap"
//         dangerouslySetInnerHTML={{ __html: highlighted }}
//       />
//     </div>
//   );
// }
