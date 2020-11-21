import React from 'react';

/*
If you want your lines to animate when using this component, you
must set an animation in your linked css that looks like this:
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
*/

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
            style={{ strokeDasharray: lineLength, strokeDashoffset: lineLength, animation: 'dash 8s linear forwards' }}
          />
        );
      })}
    </>
  );
}
