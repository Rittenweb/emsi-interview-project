import React from 'react';
import Jobs from './Jobs';
import JobsGrowth from './JobsGrowth';
import Earnings from './Earnings';

export default function Summary({ data, occupation }) {
  const [jobs, jobsGrowth, earnings] = [data.jobs, data.jobs_growth, data.earnings];

  return (
    <>
      <h2 className='blocktitle'>Occupation Summary for {occupation}</h2>
      <div className='summary'>
        <Jobs
          year={jobs.year}
          jobs={jobs.regional.toLocaleString()}
          percentOfNational={((jobs.regional / jobs.national_avg) * 100).toFixed(0)}
        />
        <JobsGrowth
          startYear={jobsGrowth.start_year}
          endYear={jobsGrowth.end_year}
          regionalAvg={jobsGrowth.regional}
          nationalAvg={jobsGrowth.national_avg}
        />
        <Earnings regional={earnings.regional.toFixed(2)} national={earnings.national_avg.toFixed(2)} />
      </div>
    </>
  );
}
