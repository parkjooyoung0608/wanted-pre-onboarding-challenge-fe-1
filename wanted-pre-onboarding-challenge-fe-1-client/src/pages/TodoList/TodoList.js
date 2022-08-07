import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoListBlock from "./TodoListBlock";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "../../TodoContext";

const TodoList = () => {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoListBlock />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
};

export default TodoList;
