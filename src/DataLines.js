import React from 'react';

export default function DataLines({ data, nameColorMap, lineLength }) {
  return (
    <>
      {data.map((region, i) => {
        return (
          <polyline
            fill='none'
            stroke={nameColorMap[region.name]}
            strokeWidth='.8'
            points={region.points}
            key={i}
            style={{ strokeDasharray: lineLength, strokeDashoffset: lineLength }}
            className='chart-line'
          />
        );
      })}
    </>
  );
}
