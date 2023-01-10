import React from "react";
import { SquareType } from "../../App";

import styled from "./index.module.scss";

interface IProps {
  squares: SquareType[];
}

const HoverSquares: React.FC<IProps> = ({ squares }) => {
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>Hover squares</h2>
      <ul className={styled.list}>
        {squares.map((square, idx) => (
          <li key={idx} className={styled.item}>
            <span>
              Row {square.row} Col {square.col}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HoverSquares;
