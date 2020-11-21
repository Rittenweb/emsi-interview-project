import React from 'react';

export default function YLabelUnit({ height, gutter, unit, width }) {
  return (
    <text
      x={gutter / 4}
      y={height / 2 + gutter}
      textAnchor='middle'
      transform={`rotate(-90, ${gutter / 4},${height / 2 + gutter})`}
      style={{ fontSize: `calc(20px - 1vw + ${width / 150}px)`, fontWeight: 'bold' }}>
      {unit}
    </text>
  );
}
