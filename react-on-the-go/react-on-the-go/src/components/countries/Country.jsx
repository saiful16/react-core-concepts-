import React, { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountries}) => {
    // console.log(country)
    const [ visited, setVisited] = useState(false)
    const handleVisited = () =>{
        if(visited === true){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
        // setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <div>
            <h2>Name : {country.name.common}</h2>
            <p> <b>Official Name :</b> {country.name.official}</p>
            <p> <b>Capital : </b> {country.capital} </p>
            <p> <b>Independence Status : </b> {country.independent ? "Independent" : "Not Independent"} </p>
            <p> <b>Population : </b> {country.population} </p>
            <p> <b>Continent : </b> {country.continents} </p>
            <button onClick={handleVisited}>{visited? "Visited" : "Not Visited"}</button>
            </div>
            <div>
                <img src={country.flags.png} alt="" />
            </div>
            

        </div>
    );
};

export default Country;