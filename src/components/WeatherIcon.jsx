import React from "react";

const iconMap = {
  1000: { day: "☀️", night: "🌙" }, // Clear
  1003: { day: "🌤️", night: "☁️" }, // Partly cloudy
  1006: { day: "☁️", night: "☁️" }, // Cloudy
  1009: { day: "☁️", night: "☁️" }, // Overcast
  1030: { day: "🌫️", night: "🌫️" }, // Mist
  1063: { day: "🌦️", night: "🌧️" }, // Patchy rain
  1066: { day: "🌨️", night: "🌨️" }, // Patchy snow
  1087: { day: "⛈️", night: "⛈️" }, // Thundery
 
};

export default function WeatherIcon({ code, isDay }) {
  const icon = iconMap[code]
    ? iconMap[code][isDay ? "day" : "night"]
    : "🌈";
  return (
    <span
      className="text-7xl md:text-8xl drop-shadow-lg animate-bounce"
      aria-label="Weather icon"
    >
      {icon}
    </span>
  );
}