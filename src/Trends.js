import React from 'react';
import Chart from './Chart';
import Legend from './Legend';

import mapRegionNamesToColors from './mapRegionNamesToColors';

export default function Trends({ data }) {
  function mapTrendDataToChartPoints(numJobs, i, trendData) {
    //[x, y] are respectively: [data year, % change in jobs since previous year]
    if (i === 0) {
      return { x: data.start_year, y: 0 };
    } else {
      let initialNumJobs = trendData[0];
      let percentChange = ((numJobs - initialNumJobs) / initialNumJobs) * 100;
      return { x: data.start_year + i, y: percentChange };
    }
  }

  //Process, narrow, and format data for chart component consumption
  const chartData = [];
  if (data) {
    //Map data to point format for each region
    chartData.push({ name: 'Region', points: data.regional.map(mapTrendDataToChartPoints) });
    chartData.push({ name: 'State', points: data.state.map(mapTrendDataToChartPoints) });
    chartData.push({ name: 'Nation', points: data.nation.map(mapTrendDataToChartPoints) });
  }

  //Narrow data for legend component consumption
  const legendData = {};
  if (data) {
    legendData.start = data.start_year;
    legendData.end = data.end_year;
    const regionalStartAndEnd = {};

    regionalStartAndEnd.Region = { start: data.regional[0], end: data.regional[data.regional.length - 1] };
    regionalStartAndEnd.State = { start: data.state[0], end: data.state[data.state.length - 1] };
    regionalStartAndEnd.Nation = { start: data.nation[0], end: data.nation[data.nation.length - 1] };

    legendData.regions = regionalStartAndEnd;
  }

  //Make sure colors are synced with proper region in both Chart and Legend components
  const nameColorMap = mapRegionNamesToColors(chartData);

  return (
    <div className='trends'>
      {!!chartData.length && (
        <Chart
          width={900}
          height={200}
          gutter={60}
          data={chartData}
          numYLabels={6}
          xLabelUnit={'Year'}
          yLabelUnit={'Percent Change'}
          nameColorMap={nameColorMap}
        />
      )}
      {!!Object.keys(legendData).length && <Legend nameColorMap={nameColorMap} data={legendData} />}
    </div>
  );
}
