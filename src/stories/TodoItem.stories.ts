import { TodoItem } from '../components/todos/TodoItem.tsx';
import { Meta, StoryObj } from '@storybook/react';
import { Todo } from '../atoms/atoms.ts';

const meta = {
  title: 'Components/TodoItem',
  component: TodoItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example todo items for our stories
const completedTodo: Todo = {
  id: 1,
  text: 'Learn React',
  completed: true,
};

const pendingTodo: Todo = {
  id: 2,
  text: 'Master Storybook',
  completed: false,
};

const longTextTodo: Todo = {
  id: 3,
  text: 'This is a very long todo item that should demonstrate how the component handles overflow and wrapping of longer text content in the UI',
  completed: false,
};

export const Completed: Story = {
  args: {
    todo: completedTodo,
  },
};

export const Pending: Story = {
  args: {
    todo: pendingTodo,
  },
};

export const LongText: Story = {
  args: {
    todo: longTextTodo,
  },
};
