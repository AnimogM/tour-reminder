import React, { useState } from 'react';

import './review.css'
import { data } from './data'
import Person from './Person';

const Review = () => {

  const [num, setNum] = useState(0)

  const checkNum = (num) => {
    if(num > data.length - 1){
      return 0
    }
    if(num < 0){
      return data.length - 1
    }
    return num
  }
  
  const handleRandom = () => {
    let randomNum = Math.floor(Math.random() * data.length)
    setNum(checkNum(randomNum))
  }

  const handleNext = () => {
    setNum(prevNum => {
      const newNum = prevNum + 1
      return checkNum(newNum)
    })
  } 

  const handlePrev = () => {
    setNum(prevNum => {
      const newNum = prevNum - 1
      return checkNum(newNum)
    })
  } 

  return (
    <>
      <h1 className='head'>Reviews</h1>
      <Person {...data[num]} handleRandom={handleRandom} handleNext={handleNext} handlePrev={handlePrev}/>
    </>
  );
};

export default Review;
