import { useEffect, useState } from "react";
import Input from "./Input";
import Weather from "./Weather";
import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export default function Card() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [coords, setCoords] = useState({});

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
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q= ${coords.lat}, ${coords.lng}`
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
      console.log(weather);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="bg-[url('/images/bg.png)] h-full w-250 bg-zinc-100 mx-auto mt-13 border-8 rounded-4xl border-x-gray-700 ">
      <Input
        input={input}
        handleInput={handleInput}
        fetchWeatherData={fetchWeatherData}
      />
      <Weather weather={weather} />
    </div>
  );
}
