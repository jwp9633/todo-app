import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: inline;
`;

const Todo = ({ todo, getTodos }) => {
  const [isChecked, setIsChecked] = useState(todo.isChecked);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const handleInputChecked = (e) => {
    setIsChecked(e.target.checked);

    const body = { isChecked: e.target.checked };
    fetch(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(getTodos);
  };

  const handleInputDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    const body = { description };
    fetch(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(() => {
      getTodos();
      setIsEditing(false);
    });
  };

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(getTodos);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          handleInputChecked(e);
        }}
      />
      {isEditing ? (
        <Form onSubmit={handleFinish}>
          <input
            type="text"
            value={description}
            onChange={handleInputDescription}
          />
          <button type="submit">완료</button>
        </Form>
      ) : (
        <>
          <span>{description}</span>
          <button onClick={handleEdit}>수정</button>
        </>
      )}
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default Todo;
