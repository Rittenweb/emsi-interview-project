import React from 'react';

export default function XLabels({ labels, width }) {
  return (
    <>
      {labels.map((value, i) => {
        return (
          <text
            x={value.x}
            y={value.y}
            textAnchor='middle'
            style={{ fontSize: `calc(20px - 1vw + ${width / 150}px)` }}
            key={i}>
            {value.value}
          </text>
        );
      })}
    </>
  );
}
