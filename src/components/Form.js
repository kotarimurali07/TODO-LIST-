import React from "react";
import "../styles/Form.css";
const Container = (props) => {
  // console.log(props);
  const { input, setInput, handleAddButton, setStatus } = props;
  const handleStatusChange = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <>
      <form>
        <div className="todo_form">
          <div className="header">
            <header>
              <h1>Murali Todo List</h1>
            </header>
          </div>
          <div className="form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddButton} disabled={!input}>
              +
            </button>
            <select
              name="todos"
              className="todos_filter"
              onChange={handleStatusChange}
            >
              <option value="All">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">uncompleted</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default Container;
