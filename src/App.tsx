import React, { useState, useEffect } from "react";
import { getData } from "./api/getData";
import "./App.css";
import Table from "./components/Table";
export interface DataItem {
  name: "Easy" | "Normal" | "Hard";
  field: number;
}

function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const [selectedName, setSelectedName] = useState("");
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
    const table = data.find((item) => item.name === e.target.value);
    setDataTable(table!);
  };

  return (
    <div className='App'>
      <div className='select-container'>
        <select value={selectedName} onChange={handleChangeTable}>
          {data?.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <Table dataTable={dataTable} />
    </div>
  );
}

export default App;
