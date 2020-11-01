import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.REACT_APP_API_KEY;
const CONFIG = "&units=metric";

export const fetchMainData = async city => {
  const query = `${URL}weather?q=${city}${CONFIG}&appid=${API_KEY}`;
  try {
    const { data } = await axios(query);
    return { data };
  } catch (err) {
    return { err };
  }
};

export const fetchWithLatLon = async (lat, lon) => {
  const query = `${URL}/onecall?lat=${lat}&lon=${lon}${CONFIG}&exclude=minutely&appid=${API_KEY}`;
  try {
    const { data } = await axios(query);
    return { data };
  } catch (err) {
    return { err };
  }
};
