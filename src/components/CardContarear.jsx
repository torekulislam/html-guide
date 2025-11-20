import React from "react";
import Card from "./Card";

function CardContainer({ children }) {
  return (
    <Card className="bg-white/50 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/30">
      {children}
    </Card>
  );
}

export default CardContainer;
