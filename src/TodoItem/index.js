import React from "react";
import "./TodoItem.css";

function TodoItem({openModal, setOpenModal, setTodoSearch,  text, key, completed, children}) {

  const modal = (event) => {
    if (openModal) {
      console.log('Esta abierto');
    } else {
      setOpenModal('View');
    }
    setTodoSearch(event.target.textContent);
  }
  return (
    <li 
      className="TodoItem"
    >
      {children[0]}
      <p 
        value = {'tortillas'}
        className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
        onClick={modal}
      >
        {text}
      </p>
      {children[1]}
    </li>
  );
}

export { TodoItem };
