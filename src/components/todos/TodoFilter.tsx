import { useAtom } from 'jotai';
import { filterAtom } from '../../atoms/atoms';

export const TodoFilter = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={() => setFilter('all')}
        className={`px-3 py-1 rounded ${
          filter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`px-3 py-1 rounded ${
          filter === 'active'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-3 py-1 rounded ${
          filter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
