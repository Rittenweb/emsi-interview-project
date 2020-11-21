import React from 'react';
import SummarySection from './SummarySection';
import Jobs from './Jobs';
import JobsGrowth from './JobsGrowth';
import Earnings from './Earnings';

export default function Summary({ data }) {
  // const [jobs, jobsGrowth, earnings] = [data.jobs, data.jobs_growth, data.earnings];

  return (
    <div className='summary'>
      <Jobs
        year={data.jobs.year}
        jobs={data.jobs.regional.toLocaleString()}
        percentOfNational={((data.jobs.regional / data.jobs.national_avg) * 100).toFixed(0)}
      />
      <JobsGrowth
        startYear={data.jobs_growth.start_year}
        endYear={data.jobs_growth.end_year}
        regionalAvg={data.jobs_growth.regional}
        nationalAvg={data.jobs_growth.national_avg}
      />
      <Earnings regional={data.earnings.regional.toFixed(2)} national={data.earnings.national_avg.toFixed(2)} />
    </div>
  );
}
