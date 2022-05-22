import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodo] = useState([
    "aaaaaaa",
    "eeeeeeee"
  ]);
  const [CompleteTodos, setCompleteTodo] = useState(["uuuuuuuu", "oooooooooo"]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodo(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    //spliceは何番目の要素を何個削除すると引数に記入する
    newTodos.splice(index, 1);
    setInCompleteTodo(newTodos);
  };
  return (
    <>
      <div>
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>

        <p>完了のTODO</p>
        <ul>
          {CompleteTodos.map((todo) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
