import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

export const Header = () => {
  const { setTodos, id, setId } = useContext(AppContext);
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    if (!todo) {
      return;
    }
    setId((id) => (id += 1));
    setTodos((todos) => [...todos, { id, text: todo }]);
    setTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          value={todo}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={() => {
            addTodo();
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};
