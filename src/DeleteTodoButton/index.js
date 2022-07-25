import React from 'react';
import './DeleteTodoButton.css';

function DeleteTodoButton({ openModal, setOpenModal }) {

  const delte = () => {
    console.log('delete');
  }
  
  return (
    <button
      className="DeleteTodoButton"
      onClick={delte}
    >
      X
    </button>
  );
}

export { DeleteTodoButton };