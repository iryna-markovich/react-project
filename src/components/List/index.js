import { Button } from "antd";
import React, { useState, useEffect } from "react";
import "./index.less";

export const List = ({ data }) => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const results = data.filter(d =>
      d.indexName.includes(value)
    );
    setSearchResults(results);
  }, [value]);

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
          {searchResults.map((i) => {
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
