export default function Weather({ weather }) {
  return (
    <div className=" h-90 w-170 m-auto rounded-3xl">
      <div className="main flex justify-around">
        <div className="sec1 flex-col mt-5 ">
          <h5 className="text-4xl font-bold ">{weather.city}</h5>
          <p className="text-sm font-bold mt-2">{weather.time}</p>
        </div>

        <div className="sec2 flex mt-5">
          <img src={weather.image} className="w-25 h-20" />
          <h5 className="text-xl font-bold ">{weather.condition}</h5>
        </div>
      </div>
      <ul className="Current flex flex-col items-center justify-center h-64 gap-5">
        <li className="text-3xl font-bold">{weather.temperature}°C</li>
        <li className="text-1xl font-bold ">Wind : {weather.wind} km/h</li>
        <li className="text-1xl font-bold ">
          Pressure : {weather.pressure} hPa
        </li>
        <li className="text-1xl font-bold">
          Precipitation: {weather.precipitation} mm
        </li>
        <li className="text-1xl font-bold ">Humidity : {weather.humidity}%</li>
      </ul>
    </div>
  );
}
