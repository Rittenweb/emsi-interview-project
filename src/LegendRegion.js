import React from 'react';

export default function LegendRegion({ name, data, color }) {
  return (
    <div className='table__row'>
      <div className='table__flexcontainer'>
        <div className='table__symbol table__symbol--circle' style={{ backgroundColor: color }}></div>
        <div>{name}</div>
      </div>
      <div className='table__datacontainer table__flexcontainer'>
        <div className='table__data'>{data.start.toLocaleString()}</div>
        <div className='table__data'>{data.end.toLocaleString()}</div>
        <div className='table__data'>{data.change.toLocaleString()}</div>
        <div className='table__data'>{(data.changePercent * 100).toFixed(1) + '%'}</div>
      </div>
    </div>
  );
}
