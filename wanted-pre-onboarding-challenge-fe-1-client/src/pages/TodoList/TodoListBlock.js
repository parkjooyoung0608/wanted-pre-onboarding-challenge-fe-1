import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import API from "../../config";
import axios from "axios";

const TodoListBlock = () => {
  const [todoData, setTodoData] = useState({});
  const [contentData, setContentData] = useState("");

  const { data } = todoData;

  const handleTitle = async (id) => {
    const headers = {
      Authorization: localStorage.getItem("token"),
    };

    try {
      const res = await axios.delete(`${API.todos}/${id}`, {
        headers,
      });
      setContentData(res);
    } catch (error) {
      alert(error);
    }
  };

  const getTodoList = async () => {
    try {
      const res = await axios.get(`${API.todos}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setTodoData(res.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <TodoListBlockStyle>
      {data?.map((data) => (
        <div key={data.id} onClick={() => handleTitle(data.id)}>
          <TodoItem
            key={data.id}
            id={data.id}
            text={JSON.stringify(data.content).replace(/"/g, "")}
          />
        </div>
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
