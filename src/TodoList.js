import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className='mt-4'>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='flex items-center mb-2 border-t-2 border-b-2 border-gray-200'>
            <span className='w-full'>{todo}</span>
            <button onClick={() => deleteTodo(index)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2'>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList

