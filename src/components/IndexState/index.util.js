import React from "react";
import { Checkbox, Tag, Button } from "antd";
import { colors } from "./index.const";

export function getColor(value) {
  return colors[value];
}

export function prepareData(data, handleOnCheck) {
  const preparedData = data.map((d, i) => {
    return {
      key: d.id,
      action: <Checkbox onChange={(e) => handleOnCheck(e, d.id, i)} />,
      name: d.name,
      type: <Tag color={"purple"}>{d.type}</Tag>,
      size: `${d.size} Mb`,
      state: <Tag color={getColor(d.state)}>{d.state}</Tag>,
      date: d.date,
    };
  });

  return preparedData;
}
