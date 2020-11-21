import React from 'react';

export default function YAxis({ height, gutter }) {
  return (
    <polyline
      fill='none'
      stroke='#111111'
      strokeWidth='.5'
      points={`${gutter},${gutter} ${gutter},${height + gutter}`}
    />
  );
}
