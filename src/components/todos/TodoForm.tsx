import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { todosAtom } from '../../atoms/atoms';

export const TodoForm = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const [todos, setTodos] = useAtom(todosAtom);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: newTodoText.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add new todo..."
          className="flex-grow text-black p-2 border bg-gray-100 border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
    </form>
  );
};
