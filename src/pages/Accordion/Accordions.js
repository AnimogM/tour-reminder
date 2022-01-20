import React from 'react';

import Accordion from '../../components/Accordion';
import questions from './question';
import './accordion.css'

const Accordions = () => {

  return (
      <>
        <h1 className="head">Accordion</h1>
        <div className='a-container'>
            <h2>Questions And Answers About Login</h2>
            <div className="a-content">
              {questions.map(que => {
                return <Accordion key={que.id} {...que}/>
              })}
            </div>
        </div>
      </>
  );
};

export default Accordions;
