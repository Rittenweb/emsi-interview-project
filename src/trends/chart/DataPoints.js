import React, { Fragment } from 'react';

//Width is used as a general magnitude measure of SVG pixel values
export default function DataPoints({ data, nameColorMap, width }) {
  return (
    <>
      {data.map((point, i) => {
        return (
          <Fragment key={i}>
            <circle
              fill='#FFFFFF'
              stroke='none'
              cx={point.x}
              cy={point.y}
              r={width / 200}
              key={i + 'big'}
              className='chart-line'
            />
            <circle
              fill={nameColorMap[point.name]}
              stroke='none'
              cx={point.x}
              cy={point.y}
              r={width / 300}
              key={i + 'small'}
              className='chart-line'
            />
          </Fragment>
        );
      })}
    </>
  );
}
