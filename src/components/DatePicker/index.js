import { Button } from "antd";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./index.less";
import 'react-calendar/dist/Calendar.css';

export const DatePicker = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-container">
      <div className="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      <Button type="primary">Show indexes</Button>
    </div>
  );
};
