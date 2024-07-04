import React from 'react'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <ul className='list-none m-0 p-0'>
        { todos.map((todo, index) => (  <li key={index} className='flex items-center justify-between p-4 border-b border-gray-200'>
             <span className='text-lg'>{todo}</span>
             <button onClick={() => deleteTodo(index)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
         </li>))}
       
      </ul>
    </div>
  )
}

export default TodoList
