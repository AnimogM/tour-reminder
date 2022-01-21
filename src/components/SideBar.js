import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'


const SideBar = () => {

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(preMenu => !preMenu)
  };

  return (
      <>
      <div className="header">
        <h1>React Projects</h1>
        <BiMenu size={40} onClick={handleMenu} style={{cursor: 'pointer'}}/>
      </div>
      <div className={`side-bar ${menu? 'open-bar': ''}`}>
        <div style={{textAlign: 'end', cursor: 'pointer'}}><GrClose size={25} onClick={handleMenu}/></div>
        <nav className='menu-items'>
          <Link to='/tours' className='nav-links' >Tours</Link>
          <Link to='/' className='nav-links'>Birthday Reminder</Link>
          <Link to='/review' className='nav-links'>Review</Link>
          <Link to='/food-menu' className='nav-links'>Food Menu</Link>
          <Link to='/accordion' className='nav-links'>Accordion</Link>
        </nav>
      </div>
      </>
  );
};

export default SideBar;
