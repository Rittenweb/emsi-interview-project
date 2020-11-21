export default function getAllValues(data) {
  const xValues = new Set();
  const yValues = new Set();

  data.forEach((region) => {
    region.points.forEach((point) => {
      xValues.add(point.x);
      yValues.add(point.y);
    });
  });

  return [
    [...xValues],
    [...yValues]
  ];
}