import React from "react";
import { DataItem } from "../App";

interface IProps {
  dataTable: DataItem;
}

const Table: React.FC<IProps> = ({ dataTable }) => {
  const createCells = () => {
    let cells = [];
    for (let i = 1; i <= dataTable.field; i++) {
      cells.push(
        <div
          className='col'
          style={{ width: "30px", height: "30px", border: "1px solid grey" }}
        ></div>
      );
    }
    return cells;
  };

  const getTable = () => {
    let content = [];
    for (let i = 1; i <= dataTable.field; i++) {
      content.push(
        <div className='row' style={{ display: "flex", flexDirection: "row" }}>
          {createCells()}
        </div>
      );
    }
    return content;
  };

  return (
    <div className='table' style={{ border: "1px solid grey", width: "max-content" }}>
      {getTable()}
    </div>
  );
};

export default Table;
