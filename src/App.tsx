import React, { useState } from 'react';
import { Todo } from './types/todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('All');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Pending') return !todo.isComplete;
    if (filter === 'Complete') return todo.isComplete;
    return true;
  });

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now().toString(), text, isComplete: false }]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <FilterButtons currentFilter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
