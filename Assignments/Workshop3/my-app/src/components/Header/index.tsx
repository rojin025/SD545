import { FormEvent, useState, ChangeEvent } from "react";
import "./index.css";
import { Todo } from "../../types";

interface HeaderProps {
  onAdd: (newTodo: Todo) => void;
  todos: Todo[];
}

export default function Header(props: HeaderProps) {
  const { onAdd, todos } = props;
  const [newtodo, setNewTodo] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newtodo) {
      console.log("No input ", newtodo);
      return;
    }
    onAdd({
      id: todos.length + 1,
      name: newtodo,
      done: false,
    });
    setNewTodo("");
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  return (
    <div className="todo-header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newtodo}
          placeholder="Enter task name"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
