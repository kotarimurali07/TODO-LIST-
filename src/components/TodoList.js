import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  const { todos, setTodos, filterTodos } = props;

  return (
    <div>
      <ul>
        {filterTodos.map((todo) => (
          <Todo
            completed={todo.completed}
            todo={todo}
            text={todo.message}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
