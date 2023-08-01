import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);

  console.log(todos.filter((todo) => todo.isCompleted).length);

  return (
    <div className="todo-list">
      {/* <h5>
        Total Todos : {todos?.length} | Completed Todos :{" "}
        {todos?.filter((todo) => todo.isCompleted).length} | Remanining Todos : {todos?.filter((todo) => todo.isCompleted === false).length}
      </h5> */}
      <ul>
        {todos?.map((todo, i) => (
          <Todo todo={todo} index={i} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
