import { useEffect, useState } from 'react';
import './App.css';

import Summary from './Summary';
import Trends from './Trends';
import Industries from './Industries';

const fetchedOccupations = {};

function App() {
  const [data, setData] = useState({});

  function fetchData(url, occupation) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        fetchedOccupations[occupation] = data;
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleChange(e) {
    const occupation = e.target.value;
    if (fetchedOccupations[occupation]) {
      setData(fetchedOccupations[occupation]);
    } else if (occupation === 'Computer Programmers') {
      fetchData('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32', occupation);
    } else if (occupation === 'Magicians') {
      fetchData('https://run.mocky.io/v3/de8028b1-0a35-45e7-8157-7cf56ef10ab0', occupation);
    }
  }

  useEffect(() => {
    fetchData('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32', 'Computer Programmers');
  }, []);

  return (
    <div className='App'>
      <header></header>
      <select name='occupations' onChange={handleChange}>
        <option value='Computer Programmers'>Computer Programmers</option>
        <option value='Magicians'>Magicians</option>
      </select>
      {data.summary && <Summary data={data.summary} />}
      {data.trend_comparison && <Trends data={data.trend_comparison} />}
      {data.employing_industries && <Industries data={data.employing_industries} />}
    </div>
  );
}

export default App;
