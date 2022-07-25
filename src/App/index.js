import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { useTodos } from "./useTodos";
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
import { DeleteTodoButton } from "../DeleteTodoButton";
import { SearchIcon } from "../Icons/SearchIcon";
// Desescructuramos las nuesvas props
function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setTodoSearch,
    todoSearched,
    deleteTodo,
    updateTodo,
    addTodo,
  } =  useTodos();

  return (
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}>
        <SearchIcon />
      </TodoSearch>

      <TodoList>
        {/* // Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <TodosError error={error} />}
        {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
        {loading &&
          new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {!loading && !searchedTodos.length && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setTodoSearch={setTodoSearch}
          >
            <CompleteIcon onComplete={() => completeTodo(todo.text)} />
            <DeleteIcon
              openModal={openModal}
              setOpenModal={setOpenModal}
              setTodoSearch={setTodoSearch}
            />
          </TodoItem>
        ))}
      </TodoList>

      {openModal === "Create" && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}>
            <WarningIcon />
          </TodoForm>
        </Modal>
      )}

      {openModal === "View" && (
        <Modal>
          <TodoView
            todoSearched={todoSearched}
            updateTodo={updateTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      {openModal === "Confirmation" && (
        <Modal>
          <TodoConfirmation
            todoSearched={todoSearched}
            deleteTodo={deleteTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <DeleteTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
