import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from './App';
import axios from 'axios';

export default function Header(props) {
    
    return (
        <div className={'header'}>
            <h1>{props.title}</h1>
            <h3>Photo take by: {props.name}</h3>
            <div><h3>{props.date}</h3></div>
        </div>
    )
    
}