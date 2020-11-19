import React from 'react';
import { DatePicker } from '../DatePicker';
import { List } from '../List';
import { Bar } from '../Bar';
import { IndexState } from '../IndexState';

import './index.less';

export const MainLayout = () => {
  return (
    <div className="layout">
      <div className="row">
        <DatePicker />
        <List />
      </div>
      <div>
        <Bar />
      </div>
      <div>
        <IndexState />
      </div>
    </div>
  );
};
