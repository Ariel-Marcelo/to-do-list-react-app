import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {

  const { openModal, setOpenModal } = React.useContext(TodoContext);
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