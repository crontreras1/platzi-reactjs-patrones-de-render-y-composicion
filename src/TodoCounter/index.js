import React from 'react';
import './TodoCounter.css';

<<<<<<< HEAD
function TodoCounter({ totalTodos, completedTodos }) {  
=======
function TodoCounter({ totalTodos, completedTodos, loading }) {
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
  return (
    <h2
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter }; 
