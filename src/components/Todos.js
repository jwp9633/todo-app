import { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
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
        data.forEach((todo) => (todo.isEditing = false));
        setTodos(data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleInputDescription = (e, id) => {
    const todosCopy = _.cloneDeep(todos);
    const todo = todosCopy.filter((todo) => todo.id === id)[0];
    const idx = todosCopy.indexOf(todo);

    todo.description = e.target.value;

    todosCopy[idx] = todo;

    setTodos(todosCopy);
  };

  const handleEdit = (id) => {
    const todosCopy = _.cloneDeep(todos);
    const todo = todosCopy.filter((todo) => todo.id === id)[0];
    const idx = todosCopy.indexOf(todo);

    todo.isEditing = true;

    todosCopy[idx] = todo;

    setTodos(todosCopy);
  };

  const handleFinish = (e, id) => {
    e.preventDefault();
    const body = {
      description: todos.filter((todo) => todo.id === id)[0].description,
    };
    fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(getTodos);
  };

  return (
    <Wrapper>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          getTodos={getTodos}
          handleInputDescription={handleInputDescription}
          handleFinish={handleFinish}
          handleEdit={handleEdit}
        />
      ))}
      <NewTodo getTodos={getTodos} />
    </Wrapper>
  );
};

export default Todos;
