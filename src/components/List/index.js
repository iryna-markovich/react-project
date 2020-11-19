import { Button } from 'antd';
import React from 'react';
import './index.less';

export const List = () => {
  const list = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
  ];
  return (
    <div className="container">
      <div className="list-container">
        <div className="header">
          <h3>Index name</h3>
        </div>
        <div className="list">
          {list.map((i) => {
            return <div className="item">{i.name}</div>;
          })}
        </div>
      </div>
      <Button type="primary">Restore</Button>
    </div>
  );
};
