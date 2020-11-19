import React from 'react';
import { Calendar } from '../Calendar';
import { List } from '../List';
import { Bar } from '../Bar';
import { IndexState } from '../IndexState';

import './index.less';

export const MainLayout = () => {
  return (
    <div className="layout">
      <div className="row">
        <Calendar />
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
