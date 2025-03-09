import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const todosAtom = atomWithStorage<Todo[]>('todos', [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Learn Tailwind CSS', completed: false },
  { id: 3, text: 'Learn Jotai', completed: false },
]);

export const filterAtom = atom('all');
