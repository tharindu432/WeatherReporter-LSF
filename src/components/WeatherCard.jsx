import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCard({ weather }) {
  const {
    location,
    current: { temp_c, humidity, wind_kph, uv, condition,feelslike_c, wind_dir,cloud },
  } = weather;

  return (
    <div className="bg-white/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-4 animate-fadeIn fade-in">
      <div className="flex flex-col items-center gap-2">
        <WeatherIcon code={condition.code} isDay={weather.current.is_day} />
        <h2 className="text-2xl font-semibold text-gray-800">{location.name}, {location.country}</h2>
        <p className="text-lg text-gray-500">{condition.text}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-4 w-full">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-blue-600">{temp_c}°C</span>
          <span className="text-sm text-gray-500">Temperature</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-teal-500">{humidity}%</span>
          <span className="text-sm text-gray-500">Humidity</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-indigo-500">{wind_kph} km/h</span>
          <span className="text-sm text-gray-500">Wind Speed</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-yellow-500">{uv}</span>
          <span className="text-sm text-gray-500">UV Index</span>
        </div>
        <div>
          <span className="text-3xl font-semibold text-teal-600">
            {feelslike_c}°C
          </span>
          <p className="text-sm text-gray-500">Feels Like</p>
        </div>
         {/* <div>
          <span className="text-3xl font-semibold text-indigo-400">{wind_dir}</span>
          <p className="text-sm text-gray-500">Wind Direction</p>
        </div> */}
        <div>
          <span className="text-3xl font-semibold text-gray-600">{cloud}%</span>
          <p className="text-sm text-gray-500">Cloud Cover</p>
        </div>
        
      </div>
    </div>
  );
}
