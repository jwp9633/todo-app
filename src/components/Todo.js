import styled from 'styled-components';

const Label = styled.label`
  display: block;
`;

const Todo = ({
  todo,
  getTodos,
  handleInputDescription,
  handleFinish,
  handleEdit,
}) => {
  const handleInputChecked = (e, id) => {
    const body = {
      isChecked: e.target.checked,
    };
    fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(getTodos);
  };

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(getTodos);
  };

  return (
    <Label>
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={(e) => handleInputChecked(e, todo.id)}
      />
      {todo.isEditing ? (
        <form
          onSubmit={(e) => {
            handleFinish(e, todo.id);
          }}
        >
          <input
            type="text"
            value={todo.description}
            onChange={(e) => handleInputDescription(e, todo.id)}
          />
          <button type="submit">완료</button>
        </form>
      ) : (
        <>
          <span>{todo.description}</span>
          <button
            onClick={() => {
              handleEdit(todo.id);
            }}
          >
            수정
          </button>
        </>
      )}
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </Label>
  );
};

export default Todo;
