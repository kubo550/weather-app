import React, { useEffect, useState } from 'react';
import Loading from 'react-loading-components';
import { Day } from './';
import { useQuery } from 'react-query'
import { fetchWithLatLon } from '../api';

const DaysGrid = ({ coord : { lat, lon } }) => {
    const {data, isLoading, isError} = useQuery(['detailsQuery', lat, lon], fetchWithLatLon, {cacheTime: 10000, staleTime:10000})

    return (
        isLoading ? <Loading type='rings' width={70} height={70} /> : isError ? "We are sorry, try again later" : (
            <> 
                <div className="days-grid">
                    {data.hourly.filter((_item, i) => i  % 3 === 1).splice(0,5).map(e => <Day key={e.dt} data={e} hourly={true} />)}
                </div> 
                <div className="days-grid">
                    {data.daily.map(e => <Day key={e.dt} data={e} />)}
                </div>
            </>
        )
    )
}

export default DaysGrid;