import React from 'react';

const toHour = dt => new Date(dt * 1000).toLocaleString().slice(11, -3).trim();
const toDay = dt => new Date(dt * 1000).toString().slice(0,3).trim();

const Day = ({ data : { dt, weather, humidity, temp }, hourly }) => {
    return (
        <div className="day">
            <p> { hourly ? toHour(dt) : toDay(dt)} </p>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon" width={50}/>
            <p> <i className="fas fa-cloud"></i>  {humidity}%</p>
            <p> {hourly ? temp.toFixed(1) : temp.day.toFixed(1)}° </p>
        </div>
    )
}

export default Day;
