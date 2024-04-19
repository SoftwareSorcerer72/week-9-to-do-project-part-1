import React, { useState } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import ToDoDisplay from './components/ToDoDisplay';
import { ToDo } from './types'; // Define your ToDo type in src/types.ts

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodo = (task: string) => {
    const newTodo = { id: Date.now(), task };
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
