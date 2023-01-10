import React, { useRef } from "react";
import { SquareType } from "../../App";

import styled from "./index.module.scss";

interface IProps {
  row: number;
  col: number;
  setSquares: Function;
}

const Cell: React.FC<IProps> = ({ row, col, setSquares }) => {
  const refCell = useRef<HTMLTableCellElement>(null);

  const addSquare = (row: number, col: number) => {
    setSquares((prev: SquareType[]) => [...prev, { row, col }]);
  };
  const removeSquare = (row: number, col: number) => {
    setSquares((prev: SquareType[]) =>
      prev.filter((square) => JSON.stringify(square) !== JSON.stringify({ row, col }))
    );
  };

  const handleBoxToggle = () => {
    const cell = refCell.current!;
    const color = cell.style.backgroundColor;
    if (color === "white") {
      cell.style.backgroundColor = "lightBlue";
      addSquare(row, col);
    } else {
      cell.style.backgroundColor = "white";
      removeSquare(row, col);
    }
  };

  return (
    <td
      ref={refCell}
      className={styled.col}
      style={{ backgroundColor: "white" }}
      onMouseEnter={handleBoxToggle}
    ></td>
  );
};

export default Cell;
