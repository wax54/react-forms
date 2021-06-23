import React from "react";
import TodoList from './TodoList';
import "./App.css";

/** Simple app that shows a Todo List which can CRUD Todos. */

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
