import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import NewTodo from './NewTodo';

const Wrapper = styled.main`
  grid-area: main;
  border: 1px solid gray;
  padding-left: 16px;
`;

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Wrapper>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} getTodos={getTodos} />
      ))}
      <NewTodo getTodos={getTodos} />
    </Wrapper>
  );
};

export default Todos;
