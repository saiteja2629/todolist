import React, { useState } from "react";
import "./index.css";
import { Todoitem } from "./Todoitem";
import { v4 as uuidv4 } from "uuid";

export const Mainone = () => {
  const [todo, setTodo] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  const [update, setUpdate] = useState([]);

  const todHandler = (e) => {
    setTodo(e.target.value);
  };
  const addtaskHandler = (e) => {
    e.preventDefault();
    if (todo !== "") {
      const newtodo = {
        id: uuidv4(),
        title: todo,
        status: false,
      };
      setTodo("");
      setTodoItem((prev) => [...prev, newtodo]);
    }
  };
  const deletetodoItem = (id) => {
    const updateTodo = todoItem.filter((each) => each.id !== id);
    setTodoItem(updateTodo);
  };

  const completetodoItem = (id) => {
    const statustodo = todoItem.map((each) => {
      if (each.id === id) {
        return { ...each, status: !each.status };
      }
      return each;
    });
    setTodoItem(statustodo);
  };
  const updatetaskHandler = (e) => {
    let item = {
      id: update.id,
      title: e.target.value,
      status: update.status ? true : false,
    };
    setUpdate(item);
  };
  const updateHandler = () => {
    let filterData = todoItem.filter((each) => each.id !== update.id);
    let filterRecords = [...filterData, update];
    setTodoItem(filterRecords);
    setUpdate("");
  };
  const cancelHandler = () => {
    setUpdate("");
  };
  return (
    <div className="main-container">
      <div className="body-container">
        <h1>ToDo List App</h1>
        <h3>List Your task Here</h3>

        {update && update.title ? (
          <form className="todo-form-container">
            <input
              className="todo-update-input"
              type="text"
              name="Todo"
              value={update && update.title}
              onChange={updatetaskHandler}
            />
            <button className="update-todo-btn" onClick={updateHandler}>
              Update
            </button>
            <button className="cancel-todo-btn" onClick={cancelHandler}>
              Cancel
            </button>
          </form>
        ) : (
          <form className="addtodo-form" onSubmit={addtaskHandler}>
            <input
              className="input-field"
              type="text"
              value={todo}
              onChange={todHandler}
              placeholder="Enter your task"
            ></input>

            <button className="input-btn" type="submit">
              Add task
            </button>
          </form>
        )}

        {todoItem.length > 0 ? (
          <Todoitem
            todoItem={todoItem}
            deletetodoItem={deletetodoItem}
            setUpdate={setUpdate}
            completetodoItem={completetodoItem}
          />
        ) : (
          "No items"
        )}
      </div>
    </div>
  );
};
