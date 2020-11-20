import React from 'react';

export default function XLabelUnit({ height, width, gutter, fontSize, unit }) {
  return (
    <text
      x={width / 2 + gutter}
      y={height + gutter * 2 - fontSize}
      textAnchor='middle'
      style={{ fontSize: fontSize + 'px', fontWeight: 'bold' }}>
      {unit}
    </text>
  );
}
