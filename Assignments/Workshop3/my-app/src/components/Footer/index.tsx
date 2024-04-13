import "./index.css";

import { Todo } from "../../types";
import { useState } from "react";

interface FooterProps {
  calculateTotal: () => number;
  calculateFinished: () => number;
  total: number;
  finished: number;
  todos: Todo[];
}

export default function Footer({
  calculateFinished,
  calculateTotal,
  finished,
  total,
  todos,
}: FooterProps) {
  const [todosF, setTodosF] = useState(todos);
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked={finished === total} />
      </label>
      <span>
        {" "}
        <span>Finished {todos.filter((todo) => todo.done).length}</span> /
        Total: {todos.length}
      </span>
      <button className="btn btn-danger">Delete Finished Tasks</button>
    </div>
  );
}
