import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center mt-8 fade-in">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <span className="mt-2 text-blue-600 font-semibold">Loading...</span>
    </div>
  );
}
