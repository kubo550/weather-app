import React, { useState } from "react";
import Loading from "react-loading-components";
import { Error, Header, Main, Search, Doc, DaysGrid } from "./components";
import { fetchMainData } from "./api";
import { useQuery } from 'react-query'

const App = () => {
  const [city, setCity] = useState("London");
  const {data, isLoading, error, isError} = useQuery(['mainQuery', city], fetchMainData)

  return (
    <div className='app'>
      <Doc />
      {isLoading ? (
        <Loading type='tail_spin' width={100} height={100} />
      ) : isError ? (
        <Error city={city} err={error} />
      ) : (
        <>
          <Header city={data.name} />
          <Main data={data} />
          <DaysGrid coord={data.coord} />
        </>
      )}
      <Search setCity={setCity} />
    </div>
  );
};

export default App;
