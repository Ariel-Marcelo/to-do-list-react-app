import React from "react";
import './DeleteIcon.css'
import { BsFillTrashFill } from 'react-icons/bs';
import { IconContext } from "react-icons";

function DeleteIcon({ setTodoSearch, openModal, setOpenModal }) {

  const modalConfirmation = (event) => {
    if (openModal) {
      console.log('Esta abierto');
    } else {
      setOpenModal('Confirmation');
    }

    if (event.target.parentElement.tagName === 'svg') {
      setTodoSearch( event.target.parentElement.parentElement.querySelector('p').textContent);
    } else {
      setTodoSearch( event.target.parentElement.querySelector('p').textContent);
    }
  }
  return (
    <IconContext.Provider value={{color:"blue", className: "IconTrash global-class-name"}}>
      <BsFillTrashFill className="Icon Icon-delete"  onClick={modalConfirmation} />
    </IconContext.Provider>
  );
}

export { DeleteIcon };
