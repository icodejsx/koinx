import Link from "next/link";
import React from "react";
import OverViewHead from "./OverViewHead";
import Peromance from "./Peromance";
import Sentments from "../Sentments/Sentments";

const OverView = () => {
  return (
    <div>
      <OverViewHead />
      <Peromance />
      <Sentments />
    </div>
  );
};

export default OverView;
