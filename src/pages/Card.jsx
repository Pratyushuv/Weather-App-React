import { useEffect, useState } from "react";
import Input from "./Input";
import Weather from "./Weather";
import axios from "axios";
import Error from "./Error";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export default function Card() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [coords, setCoords] = useState({});
  const [hasError, setHasError] = useState(false);

  function handleInput(e) {
    setInput(e.target.value);
  }

  useEffect(
    function () {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });

      async function fetchInitialData() {
        try {
          const res = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q= ${coords.lat}, ${coords.lng}`
          );

          console.log(res.data);
          const data = res.data;

          const weatherDetails = {
            city: data.location.name,
            time: data.current.last_updated,
            image: data.current.condition.icon,
            condition: data.current.condition.text,
            temperature: data.current.temp_c,
            wind: data.current.wind_kph,
            pressure: data.current.pressure_mb,
            precipitation: data.current.precip_mm,
            humidity: data.current.humidity,
            feelike: data.current.feelslike_c,
          };

          setWeather(weatherDetails);
          setHasError(true);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      if (coords.lat && coords.lng) fetchInitialData();
    },
    [coords.lat, coords.lng]
  );

  async function fetchWeatherData() {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?q=<${input}>&key=${apiKey}`
      );

      console.log(res.data);
      const data = res.data;

      const weatherDetails = {
        city: data.location.name,
        time: data.current.last_updated,
        image: data.current.condition.icon,
        condition: data.current.condition.text,
        temperature: data.current.temp_c,
        wind: data.current.wind_kph,
        pressure: data.current.pressure_mb,
        precipitation: data.current.precip_mm,
        humidity: data.current.humidity,
        feelike: data.current.feelslike_c,
      };

      setWeather(weatherDetails);
      setHasError(true);
      console.log(weather);
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasError(false);
    }
  }

  return (
    <div className="wrapper  lg: h-full w-290  mx-auto mt-13 border-8 rounded-4xl border-x-gray-700 ">
      <Input
        input={input}
        handleInput={handleInput}
        fetchWeatherData={fetchWeatherData}
      />
      {hasError ? <Weather weather={weather} /> : <Error />}
    </div>
  );
}
