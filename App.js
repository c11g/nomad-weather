import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Error from './Error';
import * as Location from 'expo-location';

const API_KEY = "448bdf1c3cba7471dc16ccdbfc0e520c";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const getLocation = async() => {
    const {status} = await Location.requestPermissionsAsync();
    if(status !== 'granted'){
      return setError(true);
    }
    try {
      const location = await Location.getCurrentPositionAsync({});
      const {latitude, longitude} = location.coords;
      getWeather(latitude, longitude);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }

  const getWeather = async(latitude,longitude) => {
    try {
      const url = `${API_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      const {data} = await axios.get(url);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getLocation();
  });

  return (
    isLoading ? <Loading /> : error ? <Error /> : null
  );
}

export default App;