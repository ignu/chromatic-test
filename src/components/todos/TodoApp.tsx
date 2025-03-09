import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';
import { TodoStats } from './TodoStats';

export const TodoApp = () => {
  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Todo List
      </h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
      <TodoStats />
    </div>
  );
};

export default TodoApp;
