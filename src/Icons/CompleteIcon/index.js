import React from "react";
import "./CompleteIcon.css";
import { IconContext } from "react-icons";
import { AiFillCheckCircle } from "react-icons/ai";
function CompleteIcon(props) {
  return (
    <IconContext.Provider value={{color:"blue", className: "IconCheck global-class-name"}}>
      < AiFillCheckCircle onClick={props.onComplete}/>
    </IconContext.Provider>
  );
}

export { CompleteIcon };
