import React, { useContext } from 'react';
import { AppContext } from '../App';

const Todo = ({ id, text }) => {
  const { setTodos } = useContext(AppContext);
  return (
    <li className='todo' key={id}>
      <div className='text'>{text}</div>
      <div className='button-list'>
        <button
          onClick={() => {
            setTodos((todos) => todos.filter((todo) => todo.id !== id));
          }}
          className='remove'
        >
          remove
        </button>
      </div>
    </li>
  );
};

export default Todo;
