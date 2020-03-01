import React, { useContext } from 'react';
import Todo from './Todo';
import { AppContext } from '../App';

export const TodoList = () => {
  const { todos } = useContext(AppContext);
  return (
    <ul className='list'>
      {todos && todos.map((todo) => <Todo key={todo.id} id={todo.id} text={todo.text} />)}
    </ul>
  );
};
