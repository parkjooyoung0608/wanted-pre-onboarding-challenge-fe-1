import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import API from "../../config";
import axios, { AxiosRequestHeaders } from "axios";

type TodoGetDataType = {
  id: string;
  title: string;
  content: string;
};

const TodoListBlock = () => {
  const [todoData, setTodoData] = useState([]);

  const getTodoList = async () => {
    try {
      const res = await axios.get(`${API.todos}`, {
        headers: { Authorization: "token" },
      });
      localStorage.getItem("token");
      setTodoData(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const submitDeleteTodoItem = async (id: string) => {
    const headers: AxiosRequestHeaders | undefined = {
      Authorization: "token",
    };

    try {
      const res = await axios.delete(`${API.todos}/${id}`, {
        headers,
      });
      localStorage.getItem("token");
      if (res.status === 200) {
        alert("정말 삭제하시겠습니까?");
      }
    } catch (error) {
      alert(error);
    }
    getTodoList();
  };

  return (
    <TodoListBlockStyle>
      {todoData?.map((data: TodoGetDataType) => (
        <div key={data.id}>
          <TodoItem
            key={data.id}
            id={data.id}
            title={data.title}
            submitDeleteTodoItem={submitDeleteTodoItem}
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
