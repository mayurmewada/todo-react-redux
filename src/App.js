import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import TodoNav from "./components/TodoNav";

function App() {
  return (
    <div className="app">
      <TodoNav />
      <TodoList />
      <CreateTodo />
    </div>
  );
}

export default App;
