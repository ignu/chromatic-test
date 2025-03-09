import { TodoForm } from '../components/todos/TodoForm';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/TodoForm',
  component: TodoForm,
} satisfies Meta<typeof TodoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
