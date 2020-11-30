import { Button } from "antd";
import React from "react";
import "./index.less";

export const Bar = ({ space }) => {
  // const res = [];

  // space.map((s) => {
  //   res.push(s.indexSize);
  // });

  // const styleWidth = () => {
  //   let loadedSpace = res.reduce((a, b) => a + b, 0)
  //   if (loadedSpace > 500) {
  //     alert("No space available")
  //     return loadedSpace = 500;
  //   }
  //   else return loadedSpace;
  // };

  return (
    <div className="bar-container">
      <h3>Free space is available</h3>
      <div className="bar">
        <div className="sector1"></div>
      </div>
      <div className="bar">
        <div className="sector2"></div>
      </div>
    </div>
  );
};
