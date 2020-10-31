import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "react-loading-components";
import { Error, Header, Main, Search, Doc, DaysGrid } from "./components";

const API_KEY = "8c9bd199bd76994ee86a9c6413fa453a";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    const fetchData = async city => {
      setLoading(true);
      setError(null);
      const query = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      try {
        const { data } = await axios.get(query);
        setData(data);
      } catch (err) {
        setError(err);
      }

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
