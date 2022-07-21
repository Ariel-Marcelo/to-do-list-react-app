import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
import { SearchIcon } from "../Icons/SearchIcon";
function TodoSearch() {
  //const [searchValue, setSearchValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch-container">
      <SearchIcon />
      <input
        className="TodoSearch"
        placeholder={`Todo Title`}
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
