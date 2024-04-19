

import { useState } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import ToDoDisplay from './components/ToDoDisplay';
import { ToDo } from './types'; 
function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = (title: string, description: string, dueDate: string) => {
    const newTodo: ToDo = {
      id: Date.now(),
      title,
      description,
      dueDate,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleCompletion = (id: number) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <Nav />
      <Form addTodo={addTodo} />
      <ToDoDisplay todos={todos} toggleCompletion={toggleCompletion} />
    </div>
  );
}

export default App;
