import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function CardSlider({ data }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Dynamic scroll distance based on screen size
      const screenWidth = window.innerWidth;
      let scrollAmount = 300;
      if (screenWidth < 640) scrollAmount = 200; // small screens
      else if (screenWidth < 1024) scrollAmount = 250; // medium screens

      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" w-full  px-4 md:px-10 text-[#1E293B] ">
      <div className={`mx-auto ${data?.links}`} id={data?.links}>
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0A74FF]">
            {data?.titel}
          </h3>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="bg-white p-2 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(10,116,255,0.15)] text-[#0A74FF] transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white p-2 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(10,116,255,0.15)] text-[#0A74FF] transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hidden py-4 px-3"
        >
          {data?.tags?.map((item, i) => (
            <Link
              key={i}
              to={`/${item?.name}`}
              className="flex gap-4 sm:gap-6 min-w-[250px] w-[75%] sm:w-[45%] md:w-[30%] lg:w-[22%]
             hover:scale-[1.03] transition-transform duration-200"
            >
              <Card item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
