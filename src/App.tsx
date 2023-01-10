import { useState } from "react";

import "./App.css";
import HoverSquares from "./components/HoverSquares";

import styled from "./App.module.scss";
import TableWrap from "./components/TableWrap";
export interface DataItem {
  name: "Easy" | "Normal" | "Hard";
  field: number;
}

export interface SquareType {
  row: number;
  col: number;
}

function App() {
  const [squares, setSquares] = useState<SquareType[]>([]);

  return (
    <div className={styled.appContainer}>
      <TableWrap setSquares={setSquares} />
      {squares.length > 0 && <HoverSquares squares={squares} />}
    </div>
  );
}

export default App;
