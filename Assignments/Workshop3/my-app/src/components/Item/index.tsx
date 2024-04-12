import "./index.css";

import { Todo } from "../../types";

export default function Item(todo: Todo) {
  const { name, id, done } = todo;
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" style={{ display: "none" }}>
        Delete
      </button>
    </li>
  );
}
