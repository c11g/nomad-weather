import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import Weather from './components/Weather';
import * as Location from 'expo-location';

const API_KEY = "9e84af8f0c78d3f82698d7750262af94";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const WEATHER_UNIT = "metric";
const WEATHER_LANGUAGE = "en";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("Loading");
  const [tempObj, setTempObj] = useState({});
  
  const getLocation = async() => {
    const {status} = await Location.requestPermissionsAsync();
    if(status !== "granted"){
      setMessage("Permission to access location was denied");
    } else {
      try {
        const location = await Location.getCurrentPositionAsync({});
        const {latitude, longitude} = location.coords;
        getWeather(latitude, longitude);
      } catch(error) {
        setMessage(error.message);
      }
    }
  }

  const getWeather = async(latitude,longitude) => {
    try {
      const url = `${API_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${WEATHER_UNIT}&lang=${WEATHER_LANGUAGE}`;
      const {data: {main, name, weather: [weather]}} = await axios.get(url);
      setTempObj({
        main, name, weather
      });
      setIsLoading(false);
    } catch(error) {
      setMessage(error.message);
    }
  }

  useEffect(()=>{
    getLocation();
  }, []);

  return (
    isLoading ? <Loading message={message} /> : <Weather tempObj={tempObj} />
  );
}

export default App;