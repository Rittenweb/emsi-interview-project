import React from 'react';

export default function DataPoints({ data, nameColorMap, fontSize }) {
  return (
    <>
      {data.map((point, i) => {
        return (
          <>
            <circle
              fill='#FFFFFF'
              stroke='none'
              cx={point.x}
              cy={point.y}
              r={fontSize / 2}
              key={i + 'big'}
              className='chart-line'
            />
            <circle
              fill={nameColorMap[point.name]}
              stroke='none'
              cx={point.x}
              cy={point.y}
              r={fontSize / 3}
              key={i + 'small'}
              className='chart-line'
            />
          </>
        );
      })}
    </>
  );
}
