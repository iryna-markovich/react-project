import { Button } from 'antd';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './index.less';

export const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log('Calendar closed');
  const handleCalendarOpen = () => console.log('Calendar opened');
  return (
    <div className="calendar-container">
      <div className="calendar">
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
        />
      </div>
      <Button type="primary">Show indexes</Button>
    </div>
  );
};
