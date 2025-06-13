import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white/80 rounded-xl shadow-lg px-3 py-2 mb-6 gap-2"
    >
      <input
        type="text"
        placeholder="Search city (e.g., Colombo)"
        className="flex-1 bg-transparent outline-none text-lg px-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
        aria-label="Search"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-white" />
      </button>
    </form>
  );
}
