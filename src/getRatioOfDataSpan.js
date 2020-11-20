export default function getRatioOfDataSpan(min, max, value) {
  const totalDataSpan = max - min;
  const spanOfCurrentValue = value - min;
  return spanOfCurrentValue / totalDataSpan;
}