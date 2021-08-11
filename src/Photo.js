/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App'

let dataArr = [];
const test = []

export default function Photo(props) {

    if (!props.photo) return <h3>Loading...</h3>;
    console.log(props)
    if (dataArr[dataArr.length - 1] !== props) {
        dataArr = props
        test.push(dataArr)
    }

    console.log(test);
    return (
        <div>
        <img className='photo-of-the-day' src={props.photo} alt="NASA's daily upload!"></img>
        <p>{props.explanation}</p>
    </div>
    )
}