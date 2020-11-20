import React from 'react';

export default function YLabelUnit({ height, width, gutter, fontSize, unit }) {
  return (
    <text
      x={fontSize}
      y={height / 2 + gutter}
      textAnchor='middle'
      transform={`rotate(-90, ${fontSize},${height / 2 + gutter})`}
      style={{ fontSize: fontSize + 'px', fontWeight: 'bold' }}>
      {unit}
    </text>
  );
}
