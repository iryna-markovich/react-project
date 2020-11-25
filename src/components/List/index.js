import { Button, Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import { Bar } from "../Bar";
import { Input } from "antd";
import "./index.less";

export const List = ({ data }) => {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);
  const [searchResults, setSearchResults] = useState(data);
  const [counter, setCounter] = useState([]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnCheck = (e, i) => {
    if (e.target.checked) {
      setCounter([...counter, i]);
    } else {
      setCounter(counter.filter((c) => c.id !== i.id));
    }
  };

  useEffect(() => {
    const results = data.filter((d) =>
      d.indexName.toLowerCase().includes(value)
    );
    setSearchResults(results);
  }, [value]);

  return (
    <div className="list-container">
      <div className="header">
        <Input
          value={value}
          placeholder="Search..."
          onChange={handleOnChange}
        />
      </div>
      <div className="list">
        {data.map((i) => {
          return (
            <div key={i.id} className="item">
              <div>{i.indexName}</div>
              <div>{i.indexSize}</div>
              <div>
                <Checkbox onChange={(e) => handleOnCheck(e, i)} />
              </div>
            </div>
          );
        })}
      </div>
      <Button type="primary">Restore</Button>
    </div>
  );
};
