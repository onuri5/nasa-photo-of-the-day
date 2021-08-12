/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './Photo'

const BASE_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "JGCMBpISHclPx2br4ejYDPQ4daKQueWTxhbYqB71";

function App() {
  const [data, setData] = useState(null);
  const [imgAmount, setImgAmount] = useState(1);
 
  const button = document.querySelector('button');

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&count=${imgAmount}`)
      .then(res => {
        setData(res.data);
      })
      
  }, [imgAmount]);

  const increment = () => {
    if (imgAmount >= 1) {
      setData(null);
    }
    setImgAmount(imgAmount + 1);
  };
  const reset = () => {
   
    setData(data[0])
    setImgAmount(1)
  };

  
  
  return (
    <div className="App">
      <h1>Number of Images: {imgAmount}</h1>
      <button id='increment' onClick={increment}>Increment</button>
      <button id='decrement' onClick={reset}>Reset</button>
      <Photo photoArr={data} reset={reset} setData={setData} imgAmount={setImgAmount}/>
      
    </div>
  );
}

export default App;
