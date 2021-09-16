import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";
import "./App.css";

const KEY = "todoApp.todos";

export function App() {
  const todoTaskRef = useRef();
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false },
  ]);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (!task || /^\s*$/.test(task)) {
      return;
    }
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <div class="todo-app">
        <div class="todo-counter">
          <h1>What's the Plan for?</h1>
          You have {todos.filter((todo) => !todo.completed).length} tasks to
          finish
        </div>
        <div class="todo-form">
          <div>
            <input
              maxlength="47"
              class="todo-input"
              ref={todoTaskRef}
              type="text"
              placeholder="New task..."
            />
            <button class="todo-button-add" onClick={handleTodoAdd}>
              Add
            </button>
          </div>
          <div>
            <button class="todo-button-delete" onClick={handleClearAll}>
              Delete
            </button>
          </div>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </Fragment>
  );
}
