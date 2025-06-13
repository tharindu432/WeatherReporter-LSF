import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";

const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;

const DEFAULT_CITY = "Colombo";

export default function App() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`
      );
      const data = await res.json();
      if (data.error) {
        setError(data.error.message || "City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
      setWeather(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-600 flex flex-col items-center justify-start py-8 px-2">
      <div className="w-full max-w-md">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6 drop-shadow-lg fade-in">
          Weather Reporter
        </h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && (
          <div className="bg-red-100 text-red-700 rounded-lg px-4 py-2 mt-4 text-center fade-in">
            {error}
          </div>
        )}
        {weather && !loading && (
          <WeatherCard weather={weather} className="fade-in" />
        )}
        <footer className="text-white mt-10 text-center opacity-80">
          Powered by <a href="https://www.weatherapi.com/" className="underline">WeatherAPI.com</a>
        </footer>
      </div>
    </div>
  );
}
