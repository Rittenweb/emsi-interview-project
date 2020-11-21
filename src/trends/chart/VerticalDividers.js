import React from 'react';

export default function VerticalDividers({ coordsArray }) {
  return (
    <>
      {coordsArray.map((coords, i) => {
        return <polyline fill='none' stroke='#DDDDDD' strokeWidth='.5' points={coords} key={i} />;
      })}
    </>
  );
}
