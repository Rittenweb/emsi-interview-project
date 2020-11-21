//Currently supports up to 5 colors ... could obviously add more
export default function mapRegionNamesToColors(regions) {
  let colorCache = {
    0: 'var(--navy)',
    1: 'var(--blue)',
    2: 'var(--lightblue)',
    3: 'var(--purple)',
    other: 'var(--pink)',
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