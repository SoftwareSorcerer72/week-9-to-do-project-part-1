

import React from 'react';
import { ToDo } from '../types';

type ToDoCardProps = {
  todo: ToDo;
};

const ToDoCard: React.FC<ToDoCardProps> = ({ todo }) => {
  return (
    <div>
      <h3>{todo.task}</h3>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ToDoCard;
