import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './index.css';



function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [backgroundImage, setBackgroundImage] = useState(theme === 'dark' ? '/images/bg-desktop-dark.jpg' : 'images/bg-desktop-light.jpg');

const addTodo = (newTodo) => {
  setTodos([...todos, { text: newTodo, completed: false }]);
};

const deleteTodo = (index) => {
  setTodos(todos.filter((todo, i) => i !== index));
};

const toggleCompleted = (index) => {
  setTodos(
    todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
  );
};

const clearCompleted = () => {
  setTodos(todos.filter((todo) => !todo.completed));
};

const toggleTheme = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark');
  setBackgroundImage(theme === 'dark' ? '/images/bg-desktop-light.jpg' : '/images/bg-desktop-dark.jpg');
};

  return (
    <div  className=''>
    <div className={`h-screen font-josefin ${theme === 'dark' ? 'bg-slate-900'  : 'bg-[#f7f7f7]'}`}>
      <div className=' p-4'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}>
        <div className='flex justify-between items-center max-w-md mx-auto mb-4'>
            <h1 className='font-extrabold text-2xl text-white'>T O D O</h1>
            <button onClick={toggleTheme} className='theme-switcher'>{theme === 'dark' ? (
              <img src='images/icon-sun.svg' alt='Moon Icon'/>
            ) : (
              <img src='images/icon-moon.svg' alt='Sun Icon'/>
            )}</button>
            </div>
        <TodoForm theme={theme} addTodo={addTodo}/>
        
      </div>
        <TodoList theme={theme} todos={todos} 
        deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted}/>

    </div>
    </div>
  );
}

export default App;
