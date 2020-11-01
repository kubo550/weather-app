import React, { useEffect, useState } from "react";
import Loading from "react-loading-components";
import { Error, Header, Main, Search, Doc, DaysGrid } from "./components";
import { fetchMainData } from "./api";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    const fetchData = async city => {
      setLoading(true);
      setError(null);

      const { data, err } = await fetchMainData(city);
      err ? setError(err) : setData(data);

      setLoading(false);
    };
    fetchData(city);
  }, [city]);

  return (
    <div className='app'>
      <Doc />
      {loading ? (
        <Loading type='tail_spin' width={100} height={100} />
      ) : error ? (
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
