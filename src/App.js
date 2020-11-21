import { useState, useRef, useEffect } from 'react';
import './App.css';

import Header from './header/Header';
import Summary from './summary/Summary';
import Trends from './trends/Trends';
import Industries from './industries/Industries';

function App() {
  const [data, setData] = useState({});
  const fetchedOccupations = useRef({});

  function fetchData(url, occupation) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        fetchedOccupations.current[occupation] = data;
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  //Function to pass down to <select></select> element which contains fixed occupations
  function occupationChange(e) {
    const occupation = e.target.value;
    if (fetchedOccupations.current[occupation]) {
      setData(fetchedOccupations.current[occupation]);
    } else if (occupation === 'Computer Programmers') {
      fetchData('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32', occupation);
    } else if (occupation === 'Magicians') {
      fetchData('https://run.mocky.io/v3/de8028b1-0a35-45e7-8157-7cf56ef10ab0', occupation);
    }
  }

  //Start the app with default data. It would also be reasonable to start with no data, and prompt selection.
  useEffect(() => {
    fetchData('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32', 'Computer Programmers');
  }, []);

  //If data has not been fetched yet, prevent JS 'cannot read property of undefined' error
  const occupationTitle = data.occupation ? data.occupation.title : '';
  const regionTitle = data.region ? data.region.title : '';

  return (
    <div className='App'>
      <Header handleChange={occupationChange} occupation={occupationTitle} region={regionTitle} />
      {data.summary && <Summary data={data.summary} occupation={occupationTitle} />}
      {data.trend_comparison && <Trends data={data.trend_comparison} />}
      {data.employing_industries && <Industries data={data.employing_industries} occupation={occupationTitle} />}
    </div>
  );
}

export default App;
