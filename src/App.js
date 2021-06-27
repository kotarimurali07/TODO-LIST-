import "./styles.css";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    handleFilter();
  }, [todos, status]);
  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  const handleAddButton = (e) => {
    setTodos([
      ...todos,
      {
        message: input,
        completed: false,
        id: Math.random() * 10000
      }
    ]);
    setInput("");
    e.preventDefault();
  };

  return (
    <div className="App">
      <Form
        input={input}
        setInput={setInput}
        handleAddButton={handleAddButton}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
};

export default App;
