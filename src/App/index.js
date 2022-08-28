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
import {TodoDeleteConfirmation} from "../Modal/ModalContents/TodoDelteConfirmation";
import { DeleteTodoButton } from "../DeleteTodoButton";
import { SearchIcon } from "../Icons/SearchIcon";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";
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
    sincronizeTodos,
    deleteAllTodo
  } = useTodos();

  return (
    <React.Fragment>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        loading={loading}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      >
        <SearchIcon />
      </TodoSearch>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => {
          return new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />);
        }}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultado para {searchText} </p>
        )}
        render={(todo) => (
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
        )}
      />

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

      {openModal === "DeleteAll" && (
        <Modal>
          <TodoDeleteConfirmation
            deleteAllTodo={deleteAllTodo}
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
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
