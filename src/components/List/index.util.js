import React from "react";
import { Checkbox, Tag } from "antd";
import { colors } from "./index.const";

export function getColor(value) {
  return colors[value];
}

export function prepareData(data) {
  const preparedData = data.map((d) => {
    return {
      key: d.id,
      action: <Checkbox onChange={(e) => handleOnCheck(e, i)} />,
      name: d.name,
      type: <Tag color={"purple"}>{d.type}</Tag>,
      size: `${d.size} Mb`,
      date: d.date,
    };
  });

  return preparedData;
}
