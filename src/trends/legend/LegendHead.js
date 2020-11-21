import React from 'react';

export default function LegendHead({ start, end }) {
  return (
    <div className='table__row table__row--head'>
      <div className='table__flexcontainer'>
        <div className='table__symbol'></div>
        <div>Region</div>
      </div>
      <div className='table__datacontainer table__flexcontainer'>
        <div className='table__data'>{start} Jobs</div>
        <div className='table__data'>{end} Jobs</div>
        <div className='table__data'>Change</div>
        <div className='table__data'>%Change</div>
      </div>
    </div>
  );
}
