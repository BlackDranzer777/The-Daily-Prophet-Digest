import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/daily_prophet.png';
import HamburgerIcon from '../hamburger/HamburgerIcon';

const Navbar = ({category, setCategoryHandler, setQueryHandler, handleDateChange, date, sourcesHandler}) => {
  return (
    <div className='navbar'>
        <img src={Logo} className="logo" alt='logo'/>
        <div className="theme-button-container">
            <HamburgerIcon category={category}  date={date} handleDateChange={handleDateChange} setCategoryHandler={setCategoryHandler} sourcesHandler={sourcesHandler} />
        </div>
    </div>
  )
}

export default Navbar;
