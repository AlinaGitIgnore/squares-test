import React from "react";
import Cell from "../Cell";
import styled from "./index.module.scss";

interface IProps {
  table: boolean[][];
  toggleSelection: (row: number, col: number) => void;
}

const Table: React.FC<IProps> = ({ table, toggleSelection }) => {
  return (
    <table className={styled.table}>
      <tbody>
        {table.map((row, idx) => (
          <tr key={idx}>
            {row.map((cell, i) => (
              <Cell
                key={`${idx}/${i}`}
                row={idx}
                col={i}
                isActive={cell}
                toggleSelection={toggleSelection}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
