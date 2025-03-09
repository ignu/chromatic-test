import { useAtom } from 'jotai';
import { todosAtom } from '../../atoms/atoms';

export const TodoStats = () => {
  const [todos] = useAtom(todosAtom);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="mt-4 text-sm text-gray-600">
      <p className="text-center">
        {totalTodos} total • {activeTodos} active • {completedTodos} completed
      </p>
    </div>
  );
};

export default TodoStats;
