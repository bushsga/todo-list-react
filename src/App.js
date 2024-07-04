import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';



function App() {
  const [todos, setTodos] = useState([]);

const addTodo = (newTodo) => {
  setTodos([...todos, newTodo]);
};

const deleteTodo = (index) => {
  setTodos(todos.filter((todo, i) => i !== index));
}
  return (
    <div className='h-screen bg-gray-100'>
      <div className='max-w-md mx-auto p-4'>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} 
        deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;
