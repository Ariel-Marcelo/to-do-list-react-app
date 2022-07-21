import React from "react";
import './WarningIcon.css'
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { IconContext } from "react-icons";


function WarningIcon(props) {
  return (
    <IconContext.Provider value={{className: "IconWarning"}}>
      <BsFillExclamationTriangleFill/>
    </IconContext.Provider>
    
  );
}

export { WarningIcon };
