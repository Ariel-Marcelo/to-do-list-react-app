import React from "react";
import './DeleteIcon.css'
import { BsFillTrashFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
function DeleteIcon(props) {
  return (
    <IconContext.Provider value={{color:"blue", className: "IconTrash global-class-name"}}>
      <BsFillTrashFill className="Icon Icon-delete" onClick={props.onDelete} />
    </IconContext.Provider>
    
  );
}

export { DeleteIcon };
