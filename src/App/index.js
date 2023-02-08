import React from 'react';
import { TodoProvider } from '../TodoContext';
// import { TodoCounter } from '../TodoCounter';
// import { TodoList } from '../TodoList';
// import { TodoSearch } from '../TodoSearch';
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
