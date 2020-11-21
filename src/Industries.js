import React from 'react';
import IndustriesHead from './IndustriesHead';
import Industry from './Industry';

export default function Industries({ data }) {
  //The data.industries field is well-set for our purposes here and can
  //be pretty clearly and efficiently used without extra processing.
  //The one assumption is that the industries are already in descending
  //order by % of Occupation in Industry.
  return (
    <div>
      <IndustriesHead year={data.year} />
      {data &&
        data.industries.map((industry) => {
          return <Industry totalJobs={data.jobs} data={industry} />;
        })}
    </div>
  );
}
