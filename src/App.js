/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './Photo'

const BASE_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "JGCMBpISHclPx2br4ejYDPQ4daKQueWTxhbYqB71";

function App() {
  const [data, setData] = useState([]);
  const [imgAmount, setImgAmount] = useState(1);
  const dataArr = []
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&count=${imgAmount}`)
      .then(res => {
        setData(res.data);
      })

  }, [imgAmount]);

  const increment = () => {
    setImgAmount(imgAmount + 1);
  };
  const decrement = () => {
    if (imgAmount > 1) {
      setImgAmount(imgAmount - 1);
    }
  };
  
  let test = [];

  // for (let i = 0; i < )

  
    console.log(data[0])
 
  
  return (
    <div className="App">
      <h1>Number of Images: {imgAmount}</h1>
      <button id='increment' onClick={increment}>Increment</button>
      <button id='decrement' onClick={decrement}>Decrement</button>
      <Photo photo={data[0]} />
      
    </div>
  );
}

export default App;
