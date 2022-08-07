import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../../TodoContext";

const TodoListBlock = () => {
  const todos = useTodoState();

  return (
    <TodoListBlockStyle>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlockStyle>
  );
};

export default TodoListBlock;

const TodoListBlockStyle = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
