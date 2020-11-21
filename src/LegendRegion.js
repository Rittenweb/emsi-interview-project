import React from 'react';

export default function LegendRegion({ name, data, color }) {
  return (
    <div className='legend__region'>
      <div className='legend__flexcontainer'>
        <div className='legend__symbol' style={{ backgroundColor: color }}></div>
        <div>{name}</div>
      </div>
      <div className='legend__datacontainer legend__flexcontainer'>
        <div className='legend__data'>{data.start.toLocaleString()}</div>
        <div className='legend__data'>{data.end.toLocaleString()}</div>
        <div className='legend__data'>{data.change.toLocaleString()}</div>
        <div className='legend__data'>{(data.changePercent * 100).toFixed(1) + '%'}</div>
      </div>
    </div>
  );
}
