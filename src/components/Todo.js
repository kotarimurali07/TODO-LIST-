import React from "react";
import "../styles/Todo.css";
const Todo = (props) => {
  const { todo, text, id, todos, setTodos } = props;
  const handleTickButton = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    );
  };
  const handleWrongButton = () => {
    const modifiedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(modifiedTodos);
    console.log(modifiedTodos, "=========================");
  };

  return (
    <div>
      <div className="todo">
        <ul style={{ textDecoration: todo.completed ? "line-through" : null }}>
          {text}
        </ul>
        <button className="button_right" onClick={handleTickButton}>
          <span>✔️</span>
        </button>
        <button className="button_wrong" onClick={handleWrongButton}>
          <span>❌</span>
        </button>
      </div>
    </div>
  );
};
export default Todo;
