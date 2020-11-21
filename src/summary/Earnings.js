import React from 'react';

export default function Earnings({ regional, national }) {
  return (
    <div className='summary__section'>
      <div className='summary__figure'>${regional}/hr</div>
      <div className='summary__unit'>Median Hourly Earnings</div>
      <div className='summary__aside'>Nation: ${national}/hr</div>
    </div>
  );
}
