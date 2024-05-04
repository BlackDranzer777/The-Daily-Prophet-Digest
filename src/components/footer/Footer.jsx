import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <hr className='footer-line-upper' />
        <span className="name">
            The Daily Prophet -{" "}
            <a href="https://www.divyansh-jain.xyz" target="__blank">
                Divyansh Jain
            </a>
        </span>
      <hr className='footer-line-bottom' />
    
    </div>
  )
}

export default Footer