import { useEffect } from "react";
import { useState } from "react";
import EachCountry from "./EachCountry";
import './Countries.css';

const Country = () => {

const [countries,setCountries]=useState([])
const [visitedCountries,setVisited]=useState([])
const [displayFlag,setFlags]=useState([])
 
 useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
  // display visited country name
    const handleVisitedCountries= country=>{
      console.log('add this country to visited');
      const newVisitedCountries=[...visitedCountries,country]
      setVisited(newVisitedCountries);
    }

    const handleFlags= flag=>{
      const newDisplayFlag=[...displayFlag,flag];
      setFlags(newDisplayFlag);
    }

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div className="flag-container">
              {
                displayFlag.map((flag,idx)=> <img key={idx} src= {flag}></img>)
              }
              
            </div>
            <div>
              <h2>Visited Country:{visitedCountries.length}</h2>
              <ol>
                {
                  visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
              </ol>
              <hr />
            </div>
          <div className="countries">
          {
            countries.map(country => <EachCountry 
              handleVisitedCountries={handleVisitedCountries}
              handleFlags={handleFlags}
            key={country.cca3} 
            country={country} >
              
            </EachCountry> )
          }
          </div>
        </div>
    );
};

export default Country;