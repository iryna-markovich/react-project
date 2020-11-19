import { Button } from 'antd';
import React from 'react';
import './index.less';

export const Bar = () => {
  return (
    <div className="bar-container">
      <h3>Free space is available</h3>
      <div class="bar">
        <div class="sector"></div>
      </div>
    </div>
  );
};
