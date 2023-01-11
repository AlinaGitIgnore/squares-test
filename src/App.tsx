import { useState } from "react";
import HoverSquares from "./components/HoverSquares";
import TableWrap from "./components/TableWrap";
import { SquareType } from "./types/types";
import styled from "./App.module.scss";

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
