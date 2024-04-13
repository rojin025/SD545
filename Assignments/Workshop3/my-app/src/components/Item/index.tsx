import "./index.css";

import { Todo } from "../../types";
import { ChangeEvent, useState } from "react";

interface ItemProps {
  todo: Todo;
  onComplete: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
}

export default function Item({ todo, onComplete, onDelete }: ItemProps) {
  const [todoC, setTodoC] = useState<Todo>(todo);
  const [isHover, setIsHover] = useState(false);

  function handleTask() {
    setTodoC({ ...todoC, done: !todoC.done });
  }

  function handleConfirm() {
    const confirmDelete = window.confirm(`Delete '${todo.name}' Todo?`);
    if (confirmDelete) onDelete(todo.id);
  }

  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <label>
        <input type="checkbox" checked={todoC.done} onChange={handleTask} />
        <span>{todoC.name}</span>
      </label>
      {isHover && (
        <button
          className="btn btn-danger"
          onClick={handleConfirm}
          style={{ display: "inline" }}
        >
          Delete
        </button>
      )}
    </li>
  );
}
