import { Button } from "antd";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { DatePicker } from "antd";
import { List } from "../List";

import "./index.less";
const { RangePicker } = DatePicker;

export const Calendar = ({ data }) => {
  const [range, setRange] = useState([
    moment(new Date(), "DD-MM-YYYY"),
    moment(new Date(), "DD-MM-YYYY"),
  ]);
  const [indexes, setIndexes] = useState([]);

  // useEffect(() => {
  //   const results = data.filter((d) => {
  //     const date = moment(d.date, "DD-MM-YYYY").format();
  //     const startDate = moment(range[0], "DD-MM-YYYY").format();
  //     const endDate = moment(range[1], "DD-MM-YYYY").format();
  //     return moment(date).isBetween(startDate, endDate);
  //   });

  //   setIndexes(results);
  // }, [range]);

  const handleOnChange = (range) => {
    setRange(range);
  };

  const handleOnClick = () => {
    const results = data.filter((d) => {
      const date = moment(d.date, "DD-MM-YYYY").format();
      const startDate = moment(range[0], "DD-MM-YYYY").format();
      const endDate = moment(range[1], "DD-MM-YYYY").format();
      return moment(date).isBetween(startDate, endDate, undefined, "[]");
    });

    return setIndexes(results);
  };

  return (
    <div className="row">
      <div className="calendar-container">
        <div className="calendar">
          <RangePicker
            showToday
            onChange={handleOnChange}
            defaultValue={range}
            open={true}
          />
        </div>
        <Button type="primary" onClick={handleOnClick}>
          Show indexes
        </Button>
      </div>
      <List data={indexes} />
    </div>
  );
};
