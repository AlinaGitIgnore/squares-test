import React from "react";
import { DataItem } from "../../App";
import Cell from "../Cell";
import styled from "./index.module.scss";

interface IProps {
  dataTable: DataItem;
  setSquares: Function;
}

const Table: React.FC<IProps> = ({ dataTable, setSquares }) => {
  const createCells = (row: number) => {
    let cells = [];
    for (let i = 1; i <= dataTable.field; i++) {
      cells.push(<Cell key={i} setSquares={setSquares} row={row} col={i} />);
    }
    return cells;
  };

  const getTable = () => {
    let content = [];
    for (let i = 1; i <= dataTable.field; i++) {
      content.push(
        <tr key={i} className={styled.row}>
          {createCells(i)}
        </tr>
      );
    }
    return content;
  };

  return (
    <table className={styled.table}>
      <tbody>{getTable()}</tbody>
    </table>
  );
};

export default Table;
