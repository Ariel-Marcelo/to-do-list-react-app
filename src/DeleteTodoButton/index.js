import React from 'react';
import { TodoContext } from '../TodoContext';
import './DeleteTodoButton.css';

function DeleteTodoButton() {

  const { openModal, setOpenModal } = React.useContext(TodoContext);
  
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