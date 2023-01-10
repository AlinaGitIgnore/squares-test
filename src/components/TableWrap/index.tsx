import React, { useState, useEffect } from "react";
import { getData } from "../../api/getData";
import { DataItem } from "../../App";
import Table from "../Table";
import styled from "./index.module.scss";

interface IProps {
  setSquares: Function;
}

const TableWrap: React.FC<IProps> = ({ setSquares }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [selectedName, setSelectedName] = useState("Easy");
  const [dataTable, setDataTable] = useState<DataItem>({ name: "Easy", field: 5 });

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
    const table = data.find((item) => item.name === selectedName);
    setDataTable(table!);
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
      <Table dataTable={dataTable} setSquares={setSquares} />
    </div>
  );
};

export default TableWrap;
