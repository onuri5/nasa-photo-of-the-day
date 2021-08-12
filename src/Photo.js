/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App'

export default function Photo({ photoArr, explanation, reset}) {
    
    if (!photoArr) return <h3>Loading...</h3>;

    // console.log(photoArr)
    // if (reset) {
    //     photoArr
    // }

 const m8b = (picList) => {
    if (picList !== null && picList !== undefined) {
      const urlArr = []
      urlArr.push(picList.map(item => item.url));
      
      urlArr.forEach((link, index) => {
        const img = document.createElement('img');
        img.className = 'photo-of-the-day';
        img.src = link[index];
        img.alt = "One of NASA's daily upload!";
        img.key = index;
        document.body.appendChild(img);
      })
     
      return urlArr
    }
 } 

    return (
        <div>
        <div>{m8b(photoArr)}</div>
        <p>{explanation}</p>
    </div>
    )
}