import React, { useState, useEffect } from "react";
import { getData } from "../../api/getData";
import Table from "../Table";
import { createTable } from "../../utils/createTable";
import { DataItemType, SquareType } from "../../types/types";
import styled from "./index.module.scss";

interface IProps {
  setSquares: React.Dispatch<React.SetStateAction<SquareType[]>>;
}

const TableWrap: React.FC<IProps> = ({ setSquares }) => {
  const [data, setData] = useState<DataItemType[]>([]);
  const [selectedName, setSelectedName] = useState("Easy");
  const [table, setTable] = useState<boolean[][]>(createTable(5));

  const takeSettings = async () => {
    const data: DataItemType[] = await getData();
    setData(data);
    return data;
  };

  useEffect(() => {
    takeSettings();
  }, []);

  const handleChangeTable = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedName(e.target.value);
  };

  const handleClick = () => {
    const size = data.find((item) => item.name === selectedName)?.field || 5;
    setTable(createTable(size));
    setSquares([]);
  };

  const toggleSelection = (row: number, col: number) => {
    const newArr = [...table];
    newArr[row][col] = !newArr[row][col];
    if (newArr[row][col]) {
      setSquares((prev: SquareType[]) => [...prev, { row, col }]);
    } else {
      setSquares((prev: SquareType[]) =>
        prev.filter((item: SquareType) => !(item.row === row && item.col === col))
      );
    }
    setTable(newArr);
  };

  return (
    <div className={styled.tableContainer}>
      <div className={styled.selectContainer}>
        <select className={styled.select} value={selectedName} onChange={handleChangeTable}>
          <optgroup label='Pick mode'>
            {data?.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </optgroup>
        </select>
        <button className={styled.button} type='submit' onClick={handleClick}>
          Start
        </button>
      </div>
      <Table table={table} toggleSelection={toggleSelection} />
    </div>
  );
};

export default TableWrap;
