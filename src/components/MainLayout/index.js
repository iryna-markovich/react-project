import React from "react";
import { List } from "../List";
import { IndexState } from "../IndexState";
import { mockData } from "../../mockData";

import "./index.less";

export const MainLayout = () => {
  return (
    <div className="layout">
        <List data={mockData}/>
      <div>
        <IndexState />
      </div>
    </div>
  );
};
