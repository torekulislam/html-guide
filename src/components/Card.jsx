import React from "react";

function Card({ item }) {
  return (
    // <div className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(10,116,255,0.15)] transition">
    //   <h3 className="text-xl font-semibold text-[#0A74FF] mb-3">
    //     {/* {item?.title} */}
    //     {"<H1/>"}
    //   </h3>
    //   <p className="text-[#475569]">
    //     {/* {item?.text} */}
    //     Hading tag
    //   </p>
    // </div>

    <div className="group w-full min-w-[250px] bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(10,116,255,0.15)] transition flex flex-col items-center justify-center text-center  hover:-translate-y-1 duration-300">
      <h4 className="text-2xl font-semibold text-[#0A74FF] mb-2">
        {`<${item?.name}/>`}
      </h4>
      <p className="text-[#475569] text-md">{item?.text}</p>
      <div className="mt-5 h-[3px] w-0 bg-linear-to-r from-[#0A74FF] to-[#38BDF8] rounded-full group-hover:w-24 transition-all duration-500"></div>
    </div>
  );
}

export default Card;
