import React from 'react';

export default function Select({ handleChange }) {
  return (
    <div>
      <label htmlFor='occupations' className='header__selectlabel'>
        Occupation
      </label>
      <select name='occupations' className='header__select' onChange={handleChange}>
        <option value='Computer Programmers'>Computer Programmers</option>
        <option value='Magicians'>Magicians</option>
      </select>
    </div>
  );
}
