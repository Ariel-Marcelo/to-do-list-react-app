import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../Modal/ModalContents/TodoForm";
import { TodoView } from "../Modal/ModalContents/TodoView";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { CompleteIcon } from "../Icons/CompleteIcon";
import { WarningIcon } from "../Icons/WarningIcon";
import { TodoConfirmation } from "../Modal/ModalContents/TodoConfirmation";
import { DeleteTodoButton} from "../DeleteTodoButton";
// Desescructuramos las nuesvas props
function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/* // Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <TodosError error={error} />}
        {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
        {loading &&
          new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}>
            <CompleteIcon onComplete={() => completeTodo(todo.text)} />
            <DeleteIcon />
          </TodoItem>
        ))}
      </TodoList>
      {openModal === "Create" && (
        <Modal>
          <TodoForm>
            <WarningIcon />
          </TodoForm>
        </Modal>
      )}
      {openModal === "View" && (
        <Modal>
          <TodoView />
        </Modal>
      )}

      {openModal === "Confirmation" && (
        <Modal>
          <TodoConfirmation />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <DeleteTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
