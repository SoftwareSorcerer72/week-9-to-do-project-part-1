

import { useState } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import ToDoDisplay from './components/ToDoDisplay';
import { ToDo } from './types';

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: ToDo = {
      id: Date.now(),
      task,
      completed: false // Setting default completed status as false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Nav />
      <Form addTodo={addTodo} />
      <ToDoDisplay todos={todos} />
    </div>
  );
}

export default App;
