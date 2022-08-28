import React from 'react';
import './DeleteTodoButton.css';

function DeleteTodoButton({ openModal, setOpenModal }) {

  const onClickButton = () => {
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal('DeleteAll');
    }
    
  };
  
  return (
    <button
      className="DeleteTodoButton"
      onClick={onClickButton}
    >
      X
    </button>
  );
}

export { DeleteTodoButton };