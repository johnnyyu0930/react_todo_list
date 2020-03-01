import React, { createContext, useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

const AppContext = createContext({
  todos: [],
  id: 0
});

export { AppContext };

function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  return (
    <AppContext.Provider
      value={{
        todos,
        setTodos,
        id,
        setId
      }}
    >
      <div className='App'>
        <Header />
        <TodoList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
