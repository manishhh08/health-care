import React from "react";

const SearchBar = () => {
  return (
    <div
      className="max-w-2xl mx-auto mb-8 animate-scale-in"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="d-flex justify-content-between items-center p-4 bg-gray-100 rounded-xl">
        <input
          className="form-control mr-3 flex-1 border-0 focus:ring-0"
          placeholder="Search..."
        />

        <button className="btn btn-primary px-4">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
