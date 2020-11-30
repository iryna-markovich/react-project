import React, { useState, useEffect } from "react";
import moment from "moment";
import { Table, Input, Button, DatePicker } from "antd";
import { prepareData } from "./index.util";
import { columns, f } from "./index.const";

const { RangePicker } = DatePicker;

import "./index.less";

export const List = ({ data }) => {
  const [value, setValue] = useState("");
  const [range, setRange] = useState([
    moment(new Date(), f),
    moment(new Date(), f),
  ]);
  const [searchResults, setSearchResults] = useState(data);
  const [check, setCheck] = useState(false);
  const [counter, setCounter] = useState([]);

  const handleOnSearch = (e) => {
    setValue(e.target.value);
  };

  const handleOnChangeRange = (range) => {
    setRange(range);
  };

  // const handleOnCheck = (e, i) => {
  //   if (e.target.checked) {
  //     setCounter([...counter, i]);
  //   } else {
  //     setCounter(counter.filter((c) => c.id !== i.id));
  //   }
  // };

  const handleOnFilter = () => {
    const results = data.filter((d) => {
      const date = moment(d.date, f).format();
      const startDate = moment(range[0], f).startOf("day").format();
      const endDate = moment(range[1], f).endOf("day").format();

      return (
        d.name.toLowerCase().includes(value) &&
        moment(date).isBetween(startDate, endDate, undefined, "[]")
      );
    });

    setSearchResults(results);
  };

  useEffect(() => {
    handleOnFilter();
  }, [value]);

  return (
    <div className="row">
      <div className="calendar-container">
        <div className="calendar">
          <RangePicker
            showToday
            onChange={handleOnChangeRange}
            defaultValue={range}
            open={true}
            allowClear={false}
          />
        </div>
        <Button type="primary" onClick={handleOnFilter}>
          Show indexes
        </Button>
      </div>

      <div className="list-container">
        <div className="header">
          <Input
            value={value}
            placeholder="Search index..."
            onChange={handleOnSearch}
          />
        </div>
        <div className="list">
          <Table
            bordered
            size="small"
            columns={columns}
            dataSource={prepareData(searchResults)}
          />
        </div>
        <Button type="primary">Restore</Button>
      </div>
    </div>
  );
};
