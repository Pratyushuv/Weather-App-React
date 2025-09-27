import { useState } from "react";
import Input from "./Input";
import Weather from "./Weather";
import axios from "axios";

export default function Card() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});

  function handleInput(e) {
    setInput(e.target.value);
  }

  async function fetchWeatherData() {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?q=<${input}>&key=ddfe807022204694b3495913252709`
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
  }

  return (
    <div className=" h-full w-180 bg-zinc-100 mx-auto mt-13 border-8 rounded-4xl border-x-gray-700 ">
      <Input
        input={input}
        handleInput={handleInput}
        fetchWeatherData={fetchWeatherData}
      />
      {Object.keys(weather).length > 0 && <Weather weather={weather} />}
    </div>
  );
}
