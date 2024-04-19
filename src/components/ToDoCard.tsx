


import { ToDo } from './types'; 

type ToDoCardProps = {
  todo: ToDo;
  toggleCompletion: (id: number) => void;
};

const ToDoCard: React.FC<ToDoCardProps> = ({ todo, toggleCompletion }) => {
    return (
      <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px',backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3>{todo.title}</h3>
        <p>Description: {todo.description}</p>
        <p>Due Date: {todo.dueDate}</p>
        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        <button onClick={() => toggleCompletion(todo.id)}>
          {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
      </div>
    );
  };

export default ToDoCard;
