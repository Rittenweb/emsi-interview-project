import React from 'react';
import LegendRegion from './LegendRegion';
import LegendHead from './LegendHead';

/*
FORMAT OF DATA INPUT:
{
  start: xValue,
  end: xValue,
  regions:{
    regionName: {start: yValue, end: yValue}
    ...
  }
}
*/

export default function Legend({ nameColorMap, data }) {
  //Add change and change% to the data
  for (const region in data.regions) {
    const regionObject = data.regions[region];
    regionObject.change = regionObject.end - regionObject.start;
    regionObject.changePercent = regionObject.change / regionObject.start;
  }

  const regionsArray = Object.entries(data.regions);

  return (
    <div>
      <LegendHead start={data.start} end={data.end} />
      {regionsArray.map((region, i) => {
        return <LegendRegion name={region[0]} data={region[1]} color={nameColorMap[region[0]]} key={i} />;
      })}
    </div>
  );
}
