import React, { useState } from 'react';
import { use } from 'react';
import Country from './Country';
import './Countries.css'


const Countries = ({ allCountries }) => {
    const countries = use(allCountries)
    // console.log(countries)
    const [visitedCountry, setVisitedCountry] = useState([])
    const handleVisitedCountries = (country) => {
        console.log(country)
        let totalVisitedCountries = [...visitedCountry, country]
        // totalVisitedCountries = totalVisitedCountries + visitedCountry
        setVisitedCountry(totalVisitedCountries)
    }
    return (
        <div className='countries'>
            <h2>Name, Capital, Independence Status, Population, Continent</h2>
            <h3>Already travelled so far : {visitedCountry.length} </h3>
            <ol>
                {
                    visitedCountry.map( visited => <li>{visited.name.common}</li> )
                }
            </ol>
            <h4>Total Countries : {countries.length}</h4>
            {
                countries.map(country =>
                    <Country
                        
                        handleVisitedCountries={handleVisitedCountries}
                        country={country}>
                    </Country>)
            }
        </div>
    );
};

export default Countries;