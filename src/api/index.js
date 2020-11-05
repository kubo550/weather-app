import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.REACT_APP_API_KEY;
const CONFIG = "&units=metric";

export const fetchMainData = async (_key, city) => {
  const query = `${URL}weather?q=${city}${CONFIG}&appid=${API_KEY}`;
  const { data } = await axios(query);
  return data;
};

export const fetchWithLatLon = async (_key, lat, lon) => {
  const query = `${URL}/onecall?lat=${lat}&lon=${lon}${CONFIG}&exclude=minutely&appid=${API_KEY}`;
  const { data } = await axios(query);
  return data
};
