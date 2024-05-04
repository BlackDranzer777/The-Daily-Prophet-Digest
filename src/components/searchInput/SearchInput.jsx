import React, { useState } from 'react';
import './SearchInput.css';
import Box from '@mui/material/Box';


const SearchInput = ({ setCategoryHandler, handleDateChange, date ,sourcesHandler }) => {
  const [inputCategoryValue, setInputCategoryValue] = useState('');
  const [inputSourceValue, setInputSourceValue] = useState('');
  

  const onCategoryChangeHandler = (e) => {
    setInputCategoryValue(e.target.value);
  };

  const onSourceChangeHandler = (e) => {
    setInputSourceValue(e.target.value);
  };


  const handleCategorySubmit = (e) => {
    e.preventDefault();
    setCategoryHandler(inputCategoryValue);
  };

  const handleSourceSubmit = (e) => {
    e.preventDefault();
    setCategoryHandler(inputSourceValue);
  };

  return (
    <div className='search-input'>
      <div className='form-field'>
        <div className='input-container left-right-border-small'>
          <input
            className='search-input-text-field'
            type='text'
            value={inputCategoryValue}
            onChange={onCategoryChangeHandler}
            placeholder='Category'
          />
          <button className='search-input-submit-button' type='submit' onClick={handleCategorySubmit}>
            Submit
          </button>
        </div>
      </div>
      
      <div className='form-field'>
        <div className='input-container left-right-border-small'>
          <input
            className='search-input-text-field'
            type='text'
            value={inputSourceValue}
            onChange={onSourceChangeHandler}
            placeholder='Source'
          />
          <button className='search-input-submit-button' type='submit' onClick={handleSourceSubmit}>
            Submit
          </button>
        </div>
      </div>
 
        <div className="dates">
            <div>
                <label className='date-label' htmlFor='fromDate'>From:</label>
                <br/>
                <input
                className='date-picker left-right-border-small'
                type='date'
                id='fromDate'
                value={date.from}
                max={new Date().toISOString().split('T')[0]}
                onChange={(e) => handleDateChange('from', e.target.value)}
                />
            </div>
            <div>
                <label className='date-label' htmlFor='toDate'>To:</label>
                <br/>
                <input
                className='date-picker left-right-border-small'
                type='date'
                id='toDate'
                value={date.to}
                max={new Date().toISOString().split('T')[0]} // Restrict future dates
                onChange={(e) => handleDateChange('to', e.target.value)}
                />
            </div>
        </div>
      
    </div>
  );
};

export default SearchInput;
