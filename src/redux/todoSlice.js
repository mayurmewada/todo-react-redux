import { createSlice } from "@reduxjs/toolkit";

export const todoSlide = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push({ ...payload, id: state.todos.length + 1 });
    },
    deleteTodo: (state, { payload }) => {
      // console.log("delete hit", payload, state.todos.slice(payload, 1));
      const newTodos = state.todos.filter((todo, index) => index !== payload);
      console.log(newTodos);
      state.todos = newTodos;
    },
    completeTodo: (state, { payload }) => {
      state.todos[payload].isCompleted = !state.todos[payload].isCompleted;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlide.actions;

export default todoSlide.reducer;
