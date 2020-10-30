import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Day from './Day';

const API_KEY = "8c9bd199bd76994ee86a9c6413fa453a";

const DaysGrid = ({ coord : { lat, lon } }) => {
    const [dataHourly, setDataHourly] = useState([]);
    const [dataDays, setDataDays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApi = async (lat, lon) => {
            setLoading(true);
            setError(null);

            const q = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY}`;
            
            try {
                const { data } = await axios.get(q);
                const dataHourly = data.hourly.filter((_item, i) => i  % 3 === 1).splice(0,5);                
                const dataDays = data.daily.splice(0,5);
                
                setDataHourly(dataHourly);
                setDataDays(dataDays);

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        } 
        fetchApi(lat, lon);
    }, [lat, lon]);
    return (
        loading ? "Loading" : error ? "kurwa blad" : (
            <> 
                <div className="days-grid">
                    {dataHourly.map(e => <Day key={e.dt} data={e} hourly={true} />)}
                </div> 
                <div className="days-grid"> 
                    {dataDays.map(e => <Day key={e.dt} data={e} />)}
                </div>
            </>
        )
    )
}

export default DaysGrid;