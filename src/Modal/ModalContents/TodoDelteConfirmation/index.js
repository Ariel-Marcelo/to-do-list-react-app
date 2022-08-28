import React from "react";
import "./TodoDeleteConfirmation.css";

function TodoDeleteConfirmation({ setOpenModal, deleteAllTodo }) {

  const eliminar = () => {
    closeModal();
    deleteAllTodo();
    console.log("Borre todo");
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="TodoDeleteConfirmation">
      <p> ¿ Seguro que desea eliminar todos los ToDos de su lista ? </p>
      <div className="TodoDeleteConfirmation__btn-container">
        <button className="TodoDeleteConfirmation__btn--denaied" onClick={closeModal}>
          Cancelar
        </button>
        <button
          className="TodoDeleteConfirmation__btn--accepted"
          onClick={() => eliminar()}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export { TodoDeleteConfirmation };
