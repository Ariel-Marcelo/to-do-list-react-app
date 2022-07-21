import React from "react";
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons";
import './SearchIcon.css'

function SearchIcon(props) {
  return (
    <IconContext.Provider value={{className: "SearchIcon"}}>
      <BsSearch/>
    </IconContext.Provider>
    
  );
}

export { SearchIcon };
