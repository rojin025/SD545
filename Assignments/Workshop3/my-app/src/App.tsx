import { ChangeEvent, useState, useEffect } from "react";
import Header from "./components/Header";
import Item from "./components/Item";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

import { Todo } from "./types";

const initailData = {
  todos: [
    {
      id: 1,
      name: "eat",
      done: true,
    },
    {
      id: 2,
      name: "shopping",
      done: false,
    },
    {
      id: 3,
      name: "sleep",
      done: false,
    },
  ],
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getList() {
      const res = await fetch("http://localhost:3004/todos");
      const data = await res.json();
      setTodos(data);
      console.log(data);
    }
    getList();
  }, []);

  function handleAddTodo(newTodo: Todo) {
    console.log("Added Todo List");
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <h2>ToDo List</h2>
        <Header onAdd={handleAddTodo} todos={todos} />
        <List todos={todos} />
        <Footer todos={todos} />
      </div>
    </div>
  );
}

export default App;
