import { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country/Country';

function App() {
const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div className="App">
      <h1>Total Countries found: {countries.length} </h1>
      <h2>Total contries Selected: </h2>

      {
        countries.map( country => <Country country = {country}> </Country> )
      }
    </div>
  );
}

export default App;
