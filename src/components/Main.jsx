import React from 'react';

const Main = ({data : { weather, main }}) => {
    const { temp, feels_like, temp_min, temp_max } = main;
    return (
        <>
        <div className="main">
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Loading icon..." />
            <h1 className="temp"> {temp.toFixed(0)}°C </h1>
        </div>
        <h3 style={{marginBottom:'55px'}}> {temp_min.toFixed(0)}°/{temp_max.toFixed(0)}° Odczuwalna {feels_like.toFixed(0)}°C </h3>
        </>
    )
}

export default Main;