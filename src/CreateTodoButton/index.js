import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {

  const onClickButton = () => {
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal('Create');
    }
    
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };