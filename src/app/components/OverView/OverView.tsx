import Link from "next/link";
import React from "react";
import OverViewHead from "./OverViewHead";
import Peromance from "./Peromance";
import Sentments from "../Sentments/Sentments";
import About from "../AboutBitcoin/About";

const OverView = () => {
  return (
    <div>
      <OverViewHead />
      <Peromance />
    </div>
  );
};

export default OverView;
