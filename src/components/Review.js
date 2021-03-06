import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Review = ({name, job, desc, img, handleRandom, handleNext, handlePrev}) => {

  const pointer = {
    cursor: 'pointer'
  }

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
                <BiChevronLeft size={30} onClick={handlePrev} style={pointer}/>
                <BiChevronRight size={30} onClick={handleNext} style={pointer}/>
            </div>
            <button className='r-btn' onClick={handleRandom}>Suprise Me</button>
        </article>
      </>
  )
};

export default Review;
