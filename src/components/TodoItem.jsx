import React from "react";

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    toggleTodo(id);
  };
  
  return (
      <div>
      <div className= "todo-row">{task} 
      <input type="checkbox" checked={completed} onChange={handleTodoClick} /></div>
      </div>
  );
}
