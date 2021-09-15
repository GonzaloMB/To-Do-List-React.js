import React from "react";

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    toggleTodo(id);
  };
  
  return (
      <div>
      <div className="todo-row">{task} 
      <label class="container"><input class="check-box" type="checkbox" checked={completed} onChange={handleTodoClick} />
      <span class="checkmark"></span>
      </label>
      </div>
      </div>
  );
}
