import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoListBlock from "./TodoListBlock";
import TodoCreate from "./TodoCreate";

const TodoList = () => {
  return (
    <TodoTemplate>
      <TodoListBlock />
      <TodoCreate />
    </TodoTemplate>
  );
};

export default TodoList;
