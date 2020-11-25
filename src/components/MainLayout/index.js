import React from "react";
import { Calendar } from "../Calendar";
import { Bar } from "../Bar";
import { IndexState } from "../IndexState";
import { mockData } from "../../mockData";

import "./index.less";

export const MainLayout = () => {
  return (
    <div className="layout">
      <Calendar data={mockData} />
      <div>
        <Bar />
        <IndexState />
      </div>
    </div>
  );
};
