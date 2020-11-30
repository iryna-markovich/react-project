import React, { useState, useEffect } from "react";

import { Table, Button, Radio } from "antd";
import { columns } from "./index.const";
import { prepareData } from "./index.util";

import "./index.less";

export const IndexState = ({ data }) => {
  const plainOptions = [
    { value: "all", label: "All statuses" },
    { value: "active", label: "Active" },
    { value: "available", label: "Available" },
    { value: "restoring", label: "Restoring" },
  ];

  const [searchResults, setSearchResults] = useState(data);
  const [value, setValue] = useState(plainOptions[0].value);
  const [disableDelete, setDisableDelete] = useState(false);
  const [disableRestore, setDisableRestore] = useState(false);

  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const results = data.filter((d) => {
      if (value === "all") return true;
      else return d.state.toLowerCase().includes(value);
    });

    setSearchResults(results);
  }, [value]);

  const checkDisableDelete = () => {
    const allActive = searchResults.filter((i) => i.state === "available");
    const allActiveChecked = allActive.filter((i) => !i.checked);
    const disable = allActiveChecked.length ? false : true;

    return disable;
  };

  const checkDisableRestore = () => {
    const allActive = searchResults.filter((i) => i.state === "active");
    const allActiveChecked = allActive.filter((i) => !i.checked);
    const disable = allActiveChecked.length ? false : true;

    return disable;
  };

  const handleOnCheck = (e, id, i) => {
    const index = searchResults.filter((item) => item.id === id);
    const updatedIndex = index[0];
    const item = { ...updatedIndex, checked: e.target.checked };
    searchResults.splice(i, 1, item);

    setDisableRestore(checkDisableRestore());
    setDisableDelete(checkDisableDelete());

    setSearchResults(searchResults);
  };

  return (
    <div className="index-container">
      <h3>Index restore state</h3>
      <div className="radio">
        <Radio.Group
          options={plainOptions}
          onChange={onChangeRadio}
          value={value}
        />
      </div>
      <Table
        bordered
        size="small"
        columns={columns}
        dataSource={prepareData(searchResults, handleOnCheck)}
      />
      <Button
        disabled={disableDelete}
        danger
        type="primary"
        onClick={() => {
          alert("Are you sure you want to delete indexes?");
        }}
      >
        Delete
      </Button>
      <Button
        disabled={disableRestore}
        onClick={() => {
          alert("Are you sure you want to restore indexes?");
        }}
      >
        Restore
      </Button>
    </div>
  );
};
