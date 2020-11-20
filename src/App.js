import { useEffect, useState } from 'react';
import './App.css';

import Chart from './Chart.js';

function App() {
  const [chartData, setChartData] = useState([]);

  function fetchData(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let trendComparison = data.trend_comparison;

        function mapTrendDataToChartPoints(numJobs, i, trendData) {
          //[x, y] are respectively: [data year, % change in jobs since previous year]
          if (i === 0) {
            return { x: trendComparison.start_year, y: 0 };
          } else {
            let initialNumJobs = trendData[0];
            let percentChange = ((numJobs - initialNumJobs) / initialNumJobs) * 100;
            return { x: trendComparison.start_year + i, y: percentChange };
          }
        }

        //Map data to point format for each region
        const newData = [];
        newData.push({ name: 'region', points: trendComparison.regional.map(mapTrendDataToChartPoints) });
        newData.push({ name: 'state', points: trendComparison.state.map(mapTrendDataToChartPoints) });
        newData.push({ name: 'nation', points: trendComparison.nation.map(mapTrendDataToChartPoints) });

        setChartData(newData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleChange(e) {
    if (e.target.value === 'Computer Programmers') {
      fetchData('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32');
    } else if (e.target.value === 'Magicians') {
      fetchData('https://run.mocky.io/v3/de8028b1-0a35-45e7-8157-7cf56ef10ab0');
    }
  }

  useEffect(() => {
    fetchData('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32');
  }, []);

  return (
    <div className='App'>
      <header></header>
      <select name='occupations' onChange={handleChange}>
        <option value='Computer Programmers'>Computer Programmers</option>
        <option value='Magicians'>Magicians</option>
      </select>
      {chartData.length && (
        <Chart
          width={900}
          height={300}
          gutter={60}
          data={chartData}
          numYLabels={6}
          xLabelUnit={'Year'}
          yLabelUnit={'Percent Change'}
        />
      )}
    </div>
  );
}

export default App;
