import React from "react";
import "./TodoForm.css";

function TodoForm({children, addTodo, setOpenModal}) {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [newDescriptionValue, setNewDescriptionValue] = React.useState('');
  
  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChangeTitle = (event) => {
    hideWarning();
    setNewTodoValue(event.target.value);
  };

  const onChangeDescription = (event) => {
    setNewDescriptionValue(event.target.value);
  };

  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };

  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // comprobamos si se ha escrito algo en el jtextArea
    if (newTodoValue !== "") {
      // Utilizamos nuestra función para añadir nuestro TODO
      addTodo(newTodoValue, newDescriptionValue);
      // Cerramos nustro modal
      setOpenModal(false);
      // También estaría bien resetear nuestro formulario
      setNewTodoValue("");
    } else {
      showWarning();
    }
  };

  const hideWarning = () => {
    let element = document.getElementsByClassName("warning");
    element[0].classList.replace("show", "hide");
  };

  const showWarning = () => {
    let element = document.getElementsByClassName("warning");
    element[0].classList.replace("hide", "show");
  };

  return (
    <form onSubmit={onSubmit} key="form">
      <div className="warning hide" key="warning">
        { children }  Añade un Título a tu To Do
      </div>
      
      <label> ¿ Que vamos a hacer hoy ? </label>
      <textarea
        value={newTodoValue}
        onChange={onChangeTitle}
        placeholder="Escribe el título de tu tarea"
        className="textarea-title"
      />
      <textarea
        value={newDescriptionValue}
        onChange = {onChangeDescription}
        placeholder="Añade un Descripción (Opcional)"
        className="textarea-description"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
