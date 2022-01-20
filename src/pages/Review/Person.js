import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Person = ({name, job, desc, img, handleRandom, handleNext, handlePrev}) => {
  return (
      <>
        <article className='r-article'>
            <img src={img} alt={name} width='200px' height='200px'/>
            <div className="r-text">
                <h2>{name}</h2>
                <h3>{job}</h3>
                <p>{desc}</p>
            </div>
            <div className="r-icon">
                <BiChevronLeft size={30} onClick={handlePrev}/>
                <BiChevronRight size={30} onClick={handleNext}/>
            </div>
            <button className='r-btn' onClick={handleRandom}>Suprise Me</button>
        </article>
      </>
  )
};

export default Person;
