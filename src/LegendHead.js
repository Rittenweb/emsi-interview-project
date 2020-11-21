import React from 'react';

export default function LegendHead({ start, end }) {
  return (
    <div className='legend__region legend__region--head'>
      <div className='legend__flexcontainer'>
        <div className='legend__symbol' style={{ backgroundColor: '#FFFFFF' }}></div>
        <div>Region</div>
      </div>
      <div className='legend__datacontainer legend__flexcontainer'>
        <div className='legend__data'>{start} Jobs</div>
        <div className='legend__data'>{end} Jobs</div>
        <div className='legend__data'>Change</div>
        <div className='legend__data'>%Change</div>
      </div>
    </div>
  );
}
