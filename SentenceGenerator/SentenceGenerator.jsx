import React, { useState } from "react";

import "./generator.css";
import data from './data';

const SentenceGenerator = () => {
  const [count, setCount] = useState(0);
  const [par, setPar] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    let num = parseInt(count)
    if(count < 1){
      num = 1
    }
    if (count > data.length){
      num = data.lenght
    }
    setPar(data.slice(0, num))
  };
  return (
    <>
      <h1 className='head'>TIRED OF BORING LOREM IPSUM?</h1>
      <form className="s-box" onSubmit={handleGenerate}>
        <label htmlFor='count'>Paragraphs: </label>
        <input
          type='number'
          name='count'
          id='count'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit'>Generate</button>
      </form>
      <div className='s-container'>
        {par.map((word, index) => {
          return <p key={index}>{word}</p>;
        })}
      </div>
    </>
  );
};

export default SentenceGenerator;
