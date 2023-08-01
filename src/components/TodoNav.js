import React from "react";
import { useSelector } from "react-redux";

const TodoNav = () => {
    const {todos} = useSelector((state) => state.todo)
    console.log(todos);

  return (
    <nav>
      <p>Todo</p>
      <span className="todo-count">{todos?.length}</span>
    </nav>
  );
};

export default TodoNav;
