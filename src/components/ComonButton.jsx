import React from "react";
import { Globe, Code2, Info, Zap, Settings, icons } from "lucide-react";
function ComonButton({ bn, en, Icon, isBengali, activeTab, setActiveTab }) {
  const isActive = activeTab === en;
  console.log(en, bn, icons, activeTab);

  return (
    <button
      onClick={() => setActiveTab(en)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all backdrop-blur-md border whitespace-nowrap
        ${
          isActive
            ? "bg-[rgba(10,116,255,0.7)] text-white border-white/40 shadow-[0_4px_20px_rgba(10,116,255,0.3)]"
            : "bg-[rgba(255,255,255,0.25)] text-gray-700 border-white/20 hover:bg-[rgba(255,255,255,0.4)] hover:shadow-[0_4px_15px_rgba(10,116,255,0.15)]"
        }`}
    >
      {/* {Icon && (
        <Icon
          className={`w-4 h-4 ${isActive ? "text-white" : "text-[#0A74FF]"}`}
        />
      )} */}
      {isBengali ? bn : en}
    </button>
  );
}

export default ComonButton;
