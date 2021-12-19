import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country)
    const {name, region, flags, capital, population} = props.country;
    return (
        <div className='countryDiv'>
          <h2> Name:  {name.common}  </h2>
          <p><strong> Capital:   {capital} </strong></p>
          <p><strong>Region:  {region} </strong></p>
          <img src={flags.png} alt="" />
          <p><strong>Population:  {population} </strong></p>
          <button>Add Country</button>
        </div>
    );
};

export default Country;