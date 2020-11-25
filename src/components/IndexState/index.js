import { Button } from 'antd';
import React from 'react';
import './index.less';

export const IndexState = () => {
  const stateList = [
    { name: 'Active', date: '11.12.2020 09:10:10' },
    { name: 'Active', date: '11.12.2020 09:10:10' },
    { name: 'Active', date: '11.12.2020 09:10:10' },
    { name: 'Active', date: '11.12.2020 09:10:10' },
    { name: 'Active', date: '11.12.2020 09:10:10' },
    { name: 'Restored', date: '' },
    { name: 'Restored', date: '' },
  ];

  const getStatus = (name) => {
    if (name === 'Active') return <span className="active">{name}</span>;
    else return <span className="restored">{name}</span>;
  };

  const getAction = (date) => {
    if (!date)
      return (
        <Button type="primary" danger>
          Delete
        </Button>
      );
  };

  return (
    <div className="index-container">
      <h3>Index restore state</h3>
      <div className="table">
        {stateList.map((i) => {
          return (
            <div key={i.id} className="table-row">
              <div>{getStatus(i.name)}</div>
              <div>{i.date}</div>
              <div>{getAction(i.date)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
