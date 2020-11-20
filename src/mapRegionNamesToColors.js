//Currently supports up to 5 colors ... could obviously add more
export default function mapRegionNamesToColors(regions) {
  let colorCache = {
    0: '#142850',
    1: '#2790C9',
    2: '#ABDAFC',
    3: '#7B77F5',
    other: '#C1B5FF',
  };
  let map = {};
  regions.forEach((region, i) => {
    if (colorCache[i]) {
      map[region.name] = colorCache[i];
    } else {
      map[region.name] = colorCache.other;
    }
  });
  return map;
}