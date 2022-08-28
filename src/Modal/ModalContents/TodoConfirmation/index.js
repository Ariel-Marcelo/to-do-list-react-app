import React from "react";
import "./TodoConfirmation.css";

function TodoConfirmation({ todoSearched, deleteTodo, setOpenModal }) {
  const todoTitle = todoSearched.text;

  const eliminar = (name) => {
    closeModal();
    deleteTodo(name);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="TodoConfirmation">
      <p> ¿ Seguro que desea eliminar el ToDo <br/> "{todoTitle}" ? </p>
      <div className="TodoConfirmation__btn-container">
        <button className="TodoConfirmation__btn--denaied" onClick={closeModal}>
          Cancelar
        </button>
        <button
          className="TodoConfirmation__btn--accepted"
          onClick={() => eliminar(todoTitle)}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export { TodoConfirmation };
