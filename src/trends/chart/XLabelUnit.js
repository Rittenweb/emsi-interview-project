import React from 'react';

export default function XLabelUnit({ height, width, gutter, unit }) {
  return (
    <text
      x={width / 2 + gutter}
      y={height + gutter * 1.8}
      textAnchor='middle'
      style={{ fontSize: `calc(20px - 1vw + ${width / 150}px)`, fontWeight: 'bold' }}>
      {unit}
    </text>
  );
}
