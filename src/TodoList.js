import React from 'react';

const TodoList = ({ theme, todos, deleteTodo, toggleCompleted, clearCompleted }) => {
  return (
    <div className={`todo-list max-w-md mx-auto mt-4 rounded-md ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-gray-700'}`}>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={`flex items-center px-4 mb-2  border-b-2 border-gray-200 ${todo.completed ? 'text-gray-400 line-through' : ''}`}>
            <div className={`w-5 h-5 rounded-full flex justify-center items-center mr-3 hover:bg-blue-100 cursor-pointer ${ todo.completed ? 'bg-[#03A9F4]' : 'bg-gray-300'}`} onClick={() => toggleCompleted(index)}>
            {todo.completed && <img src='images/icon-check.svg' alt='check icon'/>}
            </div>
          <span className='todo-item w-full'>{todo.text}</span>
          <button className='button' onClick={() => deleteTodo(index)}>
            <img src='images/icon-cross.svg' alt='cross icon'/>
          </button>
            </li>
        ))}
      </ul>
      
      <div className='flex justify-between items-center p-4 md:flex-row flex-col'>
        <div className='flex justify-between gap-8'>
        <p className='mb-4 md:mb-0'>{todos.filter((todo) => !todo.completed).length} todo left</p>
        <button className='hover:text-blue-600' onClick={clearCompleted}>Clear Completed</button>
        </div>
         
         
          <div className='flex items-center md:mt-0 mt-4 gap-3'>
            <button className='md:ml-4 ml-0 md:mt-0 mt-4 hover:text-blue-600' onClick={() => console.log('All clicked')}>All</button>
            <button className='md:ml-4 ml-0 md:mt-0 mt-4 hover:text-blue-600' onClick={() => console.log('Active clicked')}>Active</button>
            <button className='md:ml-4 ml-0 md:mt-0 mt-4 hover:text-blue-600' onClick={() => console.log('Completed clicked')}>Completed</button>
          </div>
        </div>
    </div>
  );
};

export default TodoList

