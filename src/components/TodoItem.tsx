import React from 'react';
import '../styles/TodoItem.css';

import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  const handleDoubleClick = () => {
    const newText = prompt('Edit the task:', todo.text);
    if (newText) editTodo(todo.id, newText);
  };

  return (
    <div className={`todo-item ${todo.isComplete ? 'complete' : ''}`}>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => toggleComplete(todo.id)}
      />
      <span onDoubleClick={handleDoubleClick}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
