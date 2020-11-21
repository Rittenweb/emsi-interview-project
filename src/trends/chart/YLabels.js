import React from 'react';

export default function YLabels({ labels, width }) {
  return (
    <>
      {labels.map((value, i) => {
        return (
          <text
            x={value.x}
            y={value.y}
            textAnchor='end'
            style={{ fontSize: `calc(20px - 1vw + ${width / 150}px)` }}
            key={i}>
            {value.value}
          </text>
        );
      })}
    </>
  );
}
