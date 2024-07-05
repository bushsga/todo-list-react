import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (newTodo !== '') {
        addTodo(newTodo);
        setNewTodo('');
      }
    };

    
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex items-center p-4'>
        <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Enter new todo item' className='w-full p-2 pl-10 text-sm text-gray-700'/>
          <button type='submit' className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm
