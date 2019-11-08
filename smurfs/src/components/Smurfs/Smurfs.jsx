import React from "react";
import SmurfCard from "../SmurfCard/SmurfCard";

import { useSelector } from "react-redux";

const Smurfs = () => {
  const smurfs = useSelector(state => state.smurfs);
  return (
    <div className="smurfs">
      {smurfs.map(smurf => {
        return (
          <SmurfCard
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
          />
        );
      })}
    </div>
  );
};

export default Smurfs;
