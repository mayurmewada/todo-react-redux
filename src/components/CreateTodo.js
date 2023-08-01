import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const onsubmit = () => {
    if (todo !== "") {
      dispatch(addTodo({ todo, isCompleted: false }));
    }
    setTodo("");
  };

  return (
    <div className="create-todo">
      <textarea
        type="text"
        rows='4'
        placeholder="Enter Todo here..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <div>
        <button onClick={onsubmit}>Add Task</button>
      </div>
    </div>
  );
};

export default CreateTodo;
