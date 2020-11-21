import React from 'react';
import Select from './Select';

export default function Header({ handleChange, occupation, region }) {
  return (
    <header className='header'>
      <div className='header__banner'>
        <h1 className='header__pagetitle'>Occupation Overview</h1>
        <Select handleChange={handleChange} />
      </div>
      {occupation && region && (
        <h2 className='header__subtitle'>
          {occupation} in {region}
        </h2>
      )}
    </header>
  );
}
