import React from 'react';
import './TodoList.css'

function TodoList({
  children,
  render,
  error,
  onError,
  loading,
  onLoading, 
  totalTodos,
  onEmptyTodos, 
  searchedTodos, 
  onEmptySearchResults, 
  searchText, 
}) {  
  const renderFunc = children || render; 

  return (
    <section className='TodoList-container'>
      {error && onError()}

      {loading && onLoading()}

      {(!loading && !totalTodos) && onEmptyTodos()}

      {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}
      
      {searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };
