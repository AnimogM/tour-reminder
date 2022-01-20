import React, { useState } from 'react';

const Tour = ({name, image, price, info, handleRemove}) => {

    const[show, setShow] = useState(false)

  return (
    <div key={name} className='t-container'>
        <img src={image} alt={name}/>
        <div className='t-box'>
            <div className='t-text'>
                <h2>{name}</h2>
                <h4>${price}</h4>
            </div>
            <p>{show? info: info.substring(0, 150)}</p>
            <button onClick={()=> setShow(!show)}>{show? 'show less':'show more'}</button>
            <div className='t-btn'>
                <button onClick={()=> handleRemove(name)}>Not Interested</button>
            </div>
        </div>
    </div>
  )
};

export default Tour;
