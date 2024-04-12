import "./index.css";

import { Todo } from "../../types";

interface FooterProps {
  todos: Todo[];
}

export default function Footer(props: FooterProps) {
  const { todos } = props;
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" />
      </label>
      <span>
        {" "}
        <span>Finished 0</span> / total: {todos.length}
      </span>
      <button className="btn btn-danger">Delete Finished Tasks</button>
    </div>
  );
}
