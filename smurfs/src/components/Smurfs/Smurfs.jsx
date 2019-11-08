import React from "react";
import SmurfCard from "../SmurfCard/SmurfCard";
import { useSelector } from "react-redux";
import "./Smurfs.css";

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
            smurfId={smurf.id}
          />
        );
      })}
    </div>
  );
};

export default Smurfs;
