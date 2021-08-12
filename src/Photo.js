/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Photo({ photoArr }) {
    
  if (!photoArr) return <h3>Loading...</h3>;

  const StyledImg = styled.div `
    display: flex;
  `
  //  const div = document.getElementsByClassName('sc-bdnxRM gbnBcL');

  const m8b = (picList) => {
    if (picList !== null && picList !== undefined) {
      const urlArr = [];
      urlArr.push(picList.map(item => [item.url]));
      
      
      return urlArr;
    }
 } 

 
  m8b(photoArr)
    return (
      // <StyledImg>
      //   {m8b(photoArr).textContent = null}
      // </StyledImg>
      <div>
        {m8b(photoArr).map((item, index) => {
          return <img className='photoOfTheDay' key={index} src={item[index]} alt='One of Nasas daily uploads'></img>
        })}
      </div>
    ) 
}