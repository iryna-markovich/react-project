import { Button } from "antd";
import React, { useState } from "react";
import "./index.less";

export const List = ({ data }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <input
          value={value}
          placeholder="search..."
          onChange={handleOnChange}
        />
      </div>
      <div className="list-container">
        <div className="list">
          {data.map((i) => {
            return (
              <div className="item">
                <div>{i.indexName}</div>
                <div>{i.indexSize}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Button type="primary">Restore</Button>
    </div>
  );
};
