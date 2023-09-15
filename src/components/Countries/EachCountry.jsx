import { useState } from 'react';
import './country.css';

const EachCountry = ({country,handleVisitedCountries,handleFlags}) => 
{
   const {name,flags,population,area,cca3}=country;
   const [visited,setVisited]=useState(false)
   const handleVisited=()=>
   {
     setVisited(!visited);
   }
    return (
        <div className={`country ${visited &&'visited'}`}>
            <h3 >Name:<span style={{color:visited?'purple':'white'}}>{name?.common}</span></h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark visited</button>
            <button onClick={()=>handleFlags(country.flags.png)}>Add flag</button>
            <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
            {visited?'I have visited this country':'I want to visit'}
        </div>
    );
};

export default EachCountry;