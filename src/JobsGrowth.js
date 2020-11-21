import React from 'react';

export default function JobsGrowth({ startYear, endYear, regionalAvg, nationalAvg }) {
  const regionalChangePositive = regionalAvg > 0;
  const nationalChangePositive = nationalAvg > 0;

  return (
    <div className='summary__section'>
      <div className='summary__figure'>
        <span className={regionalChangePositive ? 'summary__text--green' : 'summary__text--red'}>
          {regionalChangePositive ? '+' : '-'}
          {regionalAvg}%
        </span>
      </div>
      <div className='summary__unit'>
        % Change ({startYear}-{endYear})
      </div>
      <div className='summary__aside'>
        Nation:{' '}
        <span className={nationalChangePositive ? 'summary__text--green' : 'summary__text--red'}>
          {nationalChangePositive ? '+' : '-'}
          {nationalAvg}%
        </span>
      </div>
    </div>
  );
}
