import React from 'react';
import { useAtom } from 'jotai';
import { todosAtom, filterAtom, Todo } from '../../atoms/atoms';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const [todos] = useAtom(todosAtom);
  const [filter] = useAtom(filterAtom);

  console.log(todos);
  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        {filter === 'all'
          ? 'No todos yet. Add one above!'
          : filter === 'active'
          ? 'No active todos!'
          : 'No completed todos!'}
      </div>
    );
  }

  // fullscreen
  return (
    <ul className="bg-white rounded-lg shadow divide-y divide-gray-200 w-full">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
