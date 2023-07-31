import React from 'react';
import { useTodos } from './useTodos';
<<<<<<< HEAD
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
=======
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
<<<<<<< HEAD
import { Modal } from '../Modal'; 
=======
import { Modal } from '../Modal';
import { ChangeAlert } from '../ChangeAlert';
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
<<<<<<< HEAD
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos;

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={ totalTodos }
          completedTodos={ completedTodos }
        />

        <TodoSearch 
          searchValue={ searchValue }
          setSearchValue={ setSearchValue }
        />
      </TodoHeader>

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
        {searchedTodos.map(todo => (
=======
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
      >
        {todo => (
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
<<<<<<< HEAD
        ))}
=======
        )}
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
      </TodoList>

      {!!openModal && (
        <Modal>
<<<<<<< HEAD
          <TodoForm 
            addTodo={ addTodo }
            setOpenModal={ setOpenModal }
=======
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
<<<<<<< HEAD
=======

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
    </React.Fragment>
  );
}

export default App;
