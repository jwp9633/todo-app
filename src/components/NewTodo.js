import { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
`;

const NewTodo = ({ getTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      description: newTodo,
      isChecked: false,
    };

    fetch(`${process.env.REACT_APP_API_URL}/todos/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(() => {
      getTodos();
      setNewTodo('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <input type="text" value={newTodo} onChange={handleNewTodo} />
        <button type="submit">추가</button>
      </Label>
    </form>
  );
};

export default NewTodo;
