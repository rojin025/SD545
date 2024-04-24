import React, { useCallback, useMemo, useState } from "react";

const expensiveFunction = (num: number) => {
  console.log("Exprensive Fucntion....");
  for (var i = 0; i < 100000; i++) {
    num += 1;
  }
  return num;
};

export default function MemoHooks() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(["Eat", "Sleep"]);

  const addTodos = () => {
    setTodo([...todo, "Code"]);
  };

  const increase = () => {
    setCount((c) => c + 1);
  };

  const cashedResult = useMemo(() => expensiveFunction(count), [count]);

  return (
    <div>
      <h1>Use Memo</h1>
      <h2>Todos</h2>
      <button onClick={addTodos}>Add to Do's</button>
      <ul>
        {todo.map((t, i) => (
          <ul key={i}>{t}</ul>
        ))}
      </ul>
      <h2>Count: {cashedResult}</h2>
      <button onClick={increase}>+1</button>
    </div>
  );
}
