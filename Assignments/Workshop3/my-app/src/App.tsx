import { ChangeEvent, useState, useEffect } from "react";

import Header from "./components/Header";
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
    setTodos([...todos, newTodo]);
  }
  function handleComplete(e: ChangeEvent<HTMLInputElement>) {
    console.log("Completed");
    console.dir(e.target);
  }

  function handleDelete(id: number) {
    console.log("App - Deleting: ", id);
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("Deleting confirmed");
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <h2>ToDo List</h2>
        <Header onAdd={handleAddTodo} todos={todos} />
        <List
          onComplete={handleComplete}
          onDelete={handleDelete}
          todos={todos}
        />
        <Footer todos={todos} />
      </div>
    </div>
  );
}

export default App;
