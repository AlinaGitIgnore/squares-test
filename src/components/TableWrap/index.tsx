import React, { useState, useEffect } from "react";
import { getData } from "../../api/getData";
import { DataItem, SquareType } from "../../App";
import Table from "../Table";
import styled from "./index.module.scss";

interface IProps {
  setSquares: Function;
}

const createTable = (size: number) => {
  const table = [];
  for (let i = 0; i < size; i++) {
    const part = [];
    for (let j = 0; j < size; j++) {
      part.push(false);
    }
    table.push(part);
  }
  return table;
};

const TableWrap: React.FC<IProps> = ({ setSquares }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [selectedName, setSelectedName] = useState("Easy");
  const [table, setTable] = useState<boolean[][]>(createTable(5));

  const takeSettings = async () => {
    const data: DataItem[] = await getData();
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
      setSquares((prev: any) => [...prev, { row, col }]);
    } else {
      setSquares((prev: any) =>
        prev.filter((item: any) => !(item.row === row && item.col === col))
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
