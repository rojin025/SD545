import "./index.css";
import Item from "../Item";

import { Todo } from "../../types";

interface ListProps {
  todos: Todo[];
}

export default function List(props: ListProps) {
  return (
    <ul className="todo-main">
      {props.todos?.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
