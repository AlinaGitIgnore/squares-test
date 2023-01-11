import React from "react";
import styled from "./index.module.scss";

interface IProps {
  row: number;
  col: number;
  isActive: boolean;
  toggleSelection: (row: number, col: number) => void;
}

const Cell: React.FC<IProps> = ({ row, col, isActive, toggleSelection }) => {
  return (
    <td
      className={styled.col}
      style={!isActive ? { backgroundColor: "white" } : { backgroundColor: "lightBlue" }}
      onMouseEnter={() => toggleSelection(row, col)}
    ></td>
  );
};

export default Cell;
