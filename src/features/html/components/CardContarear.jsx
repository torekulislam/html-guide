import React from "react";
import Card from "./Card";

function CardContainer({ children }) {
  return (
    <Card className="bg-white/50 rounded-3xl p-4 sm:p-8 shadow-lg border border-white/30">
      {children}
    </Card>
  );
}

export default CardContainer;
