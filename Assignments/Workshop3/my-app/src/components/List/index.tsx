import "./index.css";
import Item from "../Item";

import { Todo } from "../../types";
import { ChangeEvent } from "react";

interface ListProps {
  todos: Todo[];
  onComplete: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
}

export default function List({ todos, onComplete, onDelete }: ListProps) {
  return (
    <ul className="todo-main">
      {todos?.map((todo) => (
        <Item
          key={todo.id}
          onComplete={onComplete}
          onDelete={onDelete}
          todo={todo}
        />
      ))}
    </ul>
  );
}
