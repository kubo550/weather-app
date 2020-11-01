import React, { useEffect, useState } from 'react';
import Loading from 'react-loading-components';
import { Day } from './';
import { fetchWithLatLon } from '../api';

const DaysGrid = ({ coord : { lat, lon } }) => {
    const [dataHourly, setDataHourly] = useState([]);
    const [dataDays, setDataDays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApi = async (lat, lon) => {
            setLoading(true);
            setError(null);

            const { data, err } = await fetchWithLatLon(lat, lon);
            if (err) setError(err)

            const dataHourly = data.hourly.filter((_item, i) => i  % 3 === 1).splice(0,5);                
            const dataDays = data.daily.splice(0,5);
            
            setDataHourly(dataHourly);
            setDataDays(dataDays);
            setLoading(false)
        } 
        fetchApi(lat, lon);
    }, [lat, lon]);
    return (
        loading ? <Loading type='rings' width={70} height={70} /> : error ? "We are sorry, try again later" : (
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