import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue, children, loading}) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch-container">
      {children}
      <input
        className="TodoSearch"
        placeholder={`Todo Title`}
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </div>
  );
}

export { TodoSearch };
