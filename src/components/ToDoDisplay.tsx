


import ToDoCard from './ToDoCard';
import { ToDo } from '../types'; 

type ToDoDisplayProps = {
  todos: ToDo[];
  toggleCompletion: (id: number) => void;
};

const ToDoDisplay: React.FC<ToDoDisplayProps> = ({ todos, toggleCompletion }) => {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoCard 
          key={todo.id} 
          todo={todo} 
          toggleCompletion={toggleCompletion} 
        />
      ))}
    </div>
  );
};

export default ToDoDisplay;
