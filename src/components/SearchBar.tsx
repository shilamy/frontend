"use client";

import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search Questions...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-lg px-4 py-2 bg-white border rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue-500"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
      />
      <button
        type="submit"
        className="text-blue-500 hover:text-blue-600 focus:outline-none"
        aria-label="Search"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
