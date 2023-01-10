import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState()
  const getData = async () => { await fetch("http://demo7919674.mockable.io/", { method: 'GET' }).then((response) => response.json()).catch(err => console.log(err)) }

  return (
    <div className="App">
   
    </div>
  );
}

export default App;
