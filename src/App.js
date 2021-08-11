import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Header';

const BASE_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "JGCMBpISHclPx2br4ejYDPQ4daKQueWTxhbYqB71";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data);
      })
  }, []);
  console.log(data)
  return (
    <div className="App">
      <Header title={data.title} date={data.date} name={data.copyright} />
   
    </div>
  );
}

export default App;
