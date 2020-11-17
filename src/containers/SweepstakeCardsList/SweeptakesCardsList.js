import React from "react";

import SweepstakeCard from "../../components/SweepstakeCard/SweepstakeCard";

const SweeptakesCardsList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((sweepstake) => (
        <SweepstakeCard data={sweepstake}></SweepstakeCard>
      ))}
    </div>
  );
};

export default SweeptakesCardsList;
