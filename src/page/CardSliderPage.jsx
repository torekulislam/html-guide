import React from "react";
import CardSlider from "../components/CardSlider";
import { htmlTagsData } from "../data/htmlTagsData";
import { Link } from "lucide-react";
function CardSliderPage() {
  const htmlData = htmlTagsData;
  return (
    <div>
      {" "}
      {htmlData?.map((item, index) => (
        <CardSlider key={index} data={item} />
      ))}
    </div>
  );
}

export default CardSliderPage;
