import React from 'react';

export default function IndustriesHead({ year }) {
  return (
    <div className='table__row table__row--head table__row--datapadded table__row--blueborder'>
      <div className='table__flexcontainer'>
        <div className='table__symbol' style={{ backgroundColor: '#FFFFFF' }}></div>
        <div>Industry</div>
      </div>
      <div className='table__datacontainer table__flexcontainer'>
        <div className='table__data'>Occupation Jobs in Industry ({year})</div>
        <div className='table__data'>% of Occupation in Industry ({year})</div>
        <div className='table__data'>% of Total Jobs in Industry ({year})</div>
      </div>
    </div>
  );
}
