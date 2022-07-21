import React from "react";
import "./TodoConfirmation.css";
import { TodoContext } from "../../../TodoContext";

function TodoConfirmation() {
  const { todoSearched, deleteTodo, setOpenModal} = React.useContext(TodoContext);
  const todoTitle = todoSearched.text;

  const eliminar = (name) => {
    closeModal();
    deleteTodo(name);
  }
  const closeModal = () => {
    setOpenModal(false);
  }
  return (
    <div className="confirmation">
      <p> Esta seguro de eliminar el ToDo "{todoTitle}" </p>
      <button onClick={() => eliminar(todoTitle)}>
        Aceptar
      </button>
      <button onClick={closeModal}> 
        Cancelar
      </button>
    </div>
  );
}

export { TodoConfirmation };
