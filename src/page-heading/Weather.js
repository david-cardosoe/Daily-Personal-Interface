import React, { useEffect } from 'react';
import { useState } from 'react';
/*
const api = {
    key: "366daa4315568ac22e39da33f02a4e56",
    base: "https://api.openweathermap.org/data/2.5/"
}
*/

const Weather = ({ weather }) => {
    //const [weather, setWeather] = useState({});
    const [unitsDisplay, setUnitsDisplay] = useState(false);

    /*
    useEffect(() => {
        fetch(`${api.base}weather?q=encinitas&units=imperial&appid=${api.key}`)
            .then(response => response.json())
            .then(result => {
                setWeather(result);
                console.log(result);
                morningText(result.main.temp, result.main.temp_max, result.main.temp_min);
            })
    }, []);
    */

    const changeUnits = () => {
        setUnitsDisplay(!unitsDisplay);
    }


  return (
    <div className='container mt-3 weather'>
        <div className='row'>  
            <div className='col text-center'>
                <h1>Encinitas, CA</h1>
            </div>
        </div>
        {(typeof weather.main != 'undefined') ? (
        <div className='container weather-styling'>
            <div className='row'>  
                <div className='col text-center'>
                    <h2 className='tempDisplay text-center'>{unitsDisplay ? Math.round((5/9) * (weather.main.temp - 32)) : Math.round(weather.main.temp)}{unitsDisplay ? '°C' : '°F'}</h2>
                    <h3>{weather.weather[0].description}</h3>
                    <div className='row'>
                        <h4 className='col text-center'>H:{unitsDisplay ? Math.round((5/9) * (weather.main.temp_max - 32)) : Math.round(weather.main.temp_max)}</h4>
                        <h4 className='col text-center'>L:{unitsDisplay ? Math.round((5/9) * (weather.main.temp_min - 32)) : Math.round(weather.main.temp_min)}</h4>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col text-center'><button className='btn btn-warning' onClick={changeUnits}>{unitsDisplay ? "°F" : '°C' }</button></div>
            </div>
        </div>
        ) : ('')}
    </div>
  )
}

export default Weather