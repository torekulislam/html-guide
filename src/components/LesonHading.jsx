import React from "react";
import { Globe } from "lucide-react";
import Card from "./Card";
function LesonHading({
  setIsBangla,
  isBangla,
  Icon,
  banglaSub,
  engSub,
  titel,
}) {
  return (
    <Card className="bg-white border-b border-slate-200 max-w-5xl mx-auto rounded-xl shadow">
      <div className="max-w-5xl  mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-blue-600" />}

          <div>
            <span className="text-xl font-semibold text-slate-800">
              {titel}
            </span>
            <div className="text-xs text-slate-600">
              {isBangla ? banglaSub : engSub}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsBangla(!isBangla)}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{isBangla ? "EN" : "বাং"}</span>
        </button>
      </div>
    </Card>
  );
}

export default LesonHading;
