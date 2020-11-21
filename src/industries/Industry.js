import React from 'react';
import icon from '../assets/building-regular.svg';

export default function Industry({ totalJobs, data }) {
  const changePercent = ((data.in_occupation_jobs / totalJobs) * 100).toFixed(1) + '%';

  return (
    <div className='table__row table__row--blueborder'>
      <div
        className='table__rowclip'
        style={{ clipPath: `polygon(0 0, 0 100%, ${changePercent} 100%, ${changePercent} 0%)` }}></div>
      <div className='table__flexcontainer'>
        <img className='table__symbol' src={icon} alt='Building icon'></img>
        <div className='table__industrytitle'>{data.title}</div>
      </div>
      <div className='table__datacontainer table__flexcontainer'>
        <div className='table__data'>{data.in_occupation_jobs.toLocaleString()}</div>
        <div className='table__data'>{changePercent}</div>
        <div className='table__data'>{((data.in_occupation_jobs / data.jobs) * 100).toFixed(1) + '%'}</div>
      </div>
    </div>
  );
}
