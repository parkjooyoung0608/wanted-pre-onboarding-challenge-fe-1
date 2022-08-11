import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoListBlock from "./TodoListBlock";
import TodoCreate from "./TodoCreate";
import Header from "../../components/Header";

const TodoList = () => {
  return (
    <TodoTemplate>
      <Header />
      <TodoCreate />
      <TodoListBlock />
    </TodoTemplate>
  );
};

export default TodoList;
