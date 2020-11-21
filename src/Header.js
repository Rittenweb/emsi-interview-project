import React from 'react';

export default function Header({ handleChange, occupation, region }) {
  return (
    <header className='header'>
      <div>
        <div className='header__banner'>
          <h1 className='header__pagetitle'>Occupation Overview</h1>
          <div>
            <label htmlFor='occupations' className='header__selectlabel'>
              Occupation
            </label>
            <select name='occupations' className='header__select' onChange={handleChange}>
              <option value='Computer Programmers'>Computer Programmers</option>
              <option value='Magicians'>Magicians</option>
            </select>
          </div>
        </div>
        {occupation && region && (
          <h2 className='header__subtitle'>
            {occupation} in {region}
          </h2>
        )}
      </div>
    </header>
  );
}
