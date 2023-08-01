import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../redux/todoSlice";
import FeatherIcon from "feather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();
  console.log(todo);

  const onCheck = (e, index) => {
    let isChecked = e.target.checked;
    dispatch(completeTodo(index));
  };

  const onDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <li className="todo">
      <label className="checkbox">
        <input
          type="checkbox"
          onChange={(e) => onCheck(e, index)}
          name=""
          className="checkbox__input"
          checked={todo.isCompleted ? "checked" : ""}
        />
        <span class="checkbox__inner"></span>
      </label>
      <span>{todo.todo}</span>
      <FeatherIcon onClick={() => onDelete(index)} icon="trash" size="20" />
    </li>
  );
};

export default Todo;
