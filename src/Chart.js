import React from 'react';

//Components
import VerticalDividers from './VerticalDividers';
import Labels from './Labels';
import XLabelUnit from './XLabelUnit';
import YLabelUnit from './YLabelUnit';
import YAxis from './YAxis';
import DataLines from './DataLines';
import DataPoints from './DataPoints';

//Helper functions
import getAllValues from './getAllValues';
import getDataExtremes from './getDataExtremes';
import getRatioOfDataSpan from './getRatioOfDataSpan';

/*
FORMAT OF DATA INPUT:
[
  {
    name: 'region name',
    points: [{x, y}, {x, y} ...]
  }
  ...
]
*/

//The gutter is tacked on independent of the graph's height/width, like box model margin, not padding
//This is so that it's easier to shape the height/width ratio of the actual graph and data
export default function Chart({
  width,
  height,
  gutter,
  data,
  xLabelUnit,
  yLabelUnit,
  numYLabels,
  yPrecision,
  nameColorMap,
}) {
  //Create some metadata which will make later math/methods shorter
  const [allXValues, allYValues] = getAllValues(data);
  const extremes = getDataExtremes(allXValues, allYValues);
  //5 is just a magic number ... currently fits about right
  const fontSize = gutter / 5;
  //The below is imprecise, but tries to overshoot. The alternative is using refs to access the
  //polyline element and call its getTotalLength() method, which is inherited from SVGGeometryElement
  const lineLength = Math.sqrt(height * height + width * width) * 4;

  //Small helper functions that use component function's scope
  function getYCoordFromRatio(ratio) {
    return height - ratio * height + gutter;
  }
  function getXCoordFromRatio(ratio) {
    return ratio * width + gutter;
  }

  //For each region of data (e.g. state, national) convert its array of data points to SVG-fitted coordinates
  const svgFittedData = data.map((region) => {
    const svgFittedPoints = region.points.map((point) => {
      const xRatio = getRatioOfDataSpan(extremes.minX, extremes.maxX, point.x);
      const x = getXCoordFromRatio(xRatio);
      const yRatio = getRatioOfDataSpan(extremes.minY, extremes.maxY, point.y);
      const y = getYCoordFromRatio(yRatio);
      return { x, y };
    });

    return { name: region.name, points: svgFittedPoints };
  });

  //Flatten regions into a single array of points, so it can be mapped in JSX later
  const circleFittedData = [];
  svgFittedData.forEach((region) => {
    region.points.forEach((point) => {
      circleFittedData.push({ name: region.name, x: point.x, y: point.y });
    });
  });

  //Polylines take a string containing all points, so join each array
  const polylineFittedData = svgFittedData.map((region) => {
    const polylineFittedPoints = region.points
      .map((point) => {
        return `${point.x},${point.y}`;
      })
      .join(' ');

    return { name: region.name, points: polylineFittedPoints };
  });

  //This component does not allow specification of x label step--
  //Instead it labels every x value, assuming they are uniformly spaced
  const xLabels = allXValues.map((value) => {
    const xRatio = getRatioOfDataSpan(extremes.minX, extremes.maxX, value);
    const x = getXCoordFromRatio(xRatio);
    const y = height + gutter + gutter / 3;
    return { value, x, y };
  });

  //Very similar to getting x label coords above
  const verticalDividerCoords = allXValues.map((value) => {
    const xRatio = getRatioOfDataSpan(extremes.minX, extremes.maxX, value);
    const x = getXCoordFromRatio(xRatio);
    return `${x},${gutter} ${x} ${height + gutter}`;
  });

  //Unlike X labels, Y labels take a specification for how many should be evenly spaced
  const yLabels = [];
  const step = (extremes.maxY - extremes.minY) / (numYLabels - 1);
  for (let i = 0; i < numYLabels; i++) {
    const value = (extremes.minY + step * i).toFixed(yPrecision || 1);
    const yRatio = getRatioOfDataSpan(extremes.minY, extremes.maxY, value);
    const y = getYCoordFromRatio(yRatio);
    const x = (gutter / 3) * 2;
    yLabels.push({ value, x, y });
  }

  return (
    <svg viewBox={`0 0 ${width + gutter * 2} ${height + gutter * 2}`} className='chart'>
      <VerticalDividers coordsArray={verticalDividerCoords} />
      <Labels labels={xLabels} fontSize={fontSize} />
      <XLabelUnit width={width} height={height} gutter={gutter} fontSize={fontSize} unit={xLabelUnit} />
      <Labels labels={yLabels} fontSize={fontSize}></Labels>
      <YLabelUnit width={width} height={height} gutter={gutter} fontSize={fontSize} unit={yLabelUnit} />
      <YAxis height={height} gutter={gutter} />
      <DataLines data={polylineFittedData} nameColorMap={nameColorMap} lineLength={lineLength} />
      <DataPoints data={circleFittedData} nameColorMap={nameColorMap} fontSize={fontSize} />
    </svg>
  );
}
