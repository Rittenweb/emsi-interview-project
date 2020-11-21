import React from 'react';

export default function Jobs({ year, jobs, percentOfNational }) {
  return (
    <div className='summary__section'>
      <div className='summary__figure'>{jobs}</div>
      <div className='summary__unit'>Jobs ({year})</div>
      <div className='summary__aside'>
        <span className={percentOfNational >= 100 ? 'summary__text--green' : 'summary__text--red'}>
          {percentOfNational}%
        </span>{' '}
        of National average
      </div>
    </div>
  );
}
