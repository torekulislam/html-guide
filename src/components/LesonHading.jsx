import React from "react";
import { Globe } from "lucide-react";
import Card from "./Card";
function LesonHading({ isBangla, Icon, banglaSub, engSub, titel }) {
  return (
    <Card className="bg-white border-b border-slate-200 max-w-5xl mx-auto rounded-xl shadow sm:py-5">
      <div className="max-w-5xl  mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-blue-600" />}

          <div>
            <span className=" text-md sm:text-xl font-semibold text-slate-800">
              {titel}
            </span>
            <div className="text-xs text-slate-600">
              {isBangla ? banglaSub : engSub}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LesonHading;
