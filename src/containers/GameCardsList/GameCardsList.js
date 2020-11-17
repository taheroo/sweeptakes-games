import React from "react";

import GameCard from "../../components/GameCard/GameCard";

const GameCardsList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((game) => (
        <GameCard data={game}></GameCard>
      ))}
    </div>
  );
};

export default GameCardsList;
