import React from 'react';
import { useAtom } from 'jotai';
import { todosAtom, Todo } from '../../atoms/atoms';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const [todos, setTodos] = useAtom(todosAtom);

  const toggleTodo = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <li className="flex items-center p-3 border-b border-gray-200">
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          className="w-4 h-4 mr-2 rounded text-blue-600 focus:ring-blue-500 hover:cursor-pointer"
        />
        <span
          className={`text-gray-900 ${
            todo.completed ? 'line-through text-gray-100' : ''
          }`}
        >
          {todo.text}
        </span>
        <span
          onClick={deleteTodo}
          className="ml-auto text-red-500 hover:text-red-700 focus:outline-none hover:cursor-pointer hover:bg-gray-200 p-2 bg-red-200 rounded-full"
        >
          ⛔
        </span>
      </div>
    </li>
  );
};
