import { useState } from 'react';

type FormProps = {
  addTodo: (task: string) => void;
};

const Form: React.FC<FormProps> = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Form;
