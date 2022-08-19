import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoListBlock from "./TodoListBlock";
import TodoCreate from "./TodoCreate";
import TodoListHeader from "./TodoListHeader";

const TodoList = () => {
  return (
    <TodoTemplate>
      <TodoListHeader />
      <TodoCreate />
      <TodoListBlock />
    </TodoTemplate>
  );
};

export default TodoList;
