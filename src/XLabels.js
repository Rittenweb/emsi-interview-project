import React from 'react';

export default function XLabels({ labels, fontSize }) {
  return (
    <>
      {labels.map((value, i) => {
        return (
          <text
            x={value.x}
            y={value.y}
            textAnchor='middle'
            className='labeltext'
            key={i}
            style={{ fontSize: fontSize + 'px' }}>
            {value.value}
          </text>
        );
      })}
    </>
  );
}
