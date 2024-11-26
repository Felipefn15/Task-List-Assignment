import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
