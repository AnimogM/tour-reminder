import React, { useState } from 'react';
import {BiPlus, BiMinus} from 'react-icons/bi'

const Accordion = ({id, title, info}) => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }
  return (
      <div className='a-card'>
        <div className="a-box">
            <h4>{title}</h4>
            <div>
                {show? <BiMinus size={20} className='a-icon' onClick={handleShow}/>: <BiPlus size={20} className='a-icon' onClick={handleShow}/>}
            </div>
        </div>
        {show && <p className='show'>{info}</p>}
      </div>
  );
};

export default Accordion;
