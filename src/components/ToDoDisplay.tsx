
import { ToDo } from '../types'; // Assuming you define types in src/types.ts

type ToDoDisplayProps = {
  todos: ToDo[];
};

const ToDoDisplay: React.FC<ToDoDisplayProps> = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <p key={todo.id}>{todo.task}</p> // You might want to create a ToDoCard component for each ToDo
      ))}
    </div>
  );
};

export default ToDoDisplay;
