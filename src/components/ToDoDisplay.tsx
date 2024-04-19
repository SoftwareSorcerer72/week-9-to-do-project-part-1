

import { ToDo } from '../types';
import ToDoCard from './ToDoCard'; 

type ToDoDisplayProps = {
  todos: ToDo[];
};

const ToDoDisplay: React.FC<ToDoDisplayProps> = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <ToDoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ToDoDisplay;
