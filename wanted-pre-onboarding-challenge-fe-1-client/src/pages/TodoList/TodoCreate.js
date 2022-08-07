import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import API from "../../config";

const TodoCreate = () => {
  const [todoInput, setTodoInput] = useState("");

  const onChange = (e) => setTodoInput(e.target.value);

  const onSubmit = async (e) => {
    try {
      const res = await axios.post(
        `${API.todos}`,
        {
          title: "hi",
          content: todoInput,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log(res);
      alert("작성완료");
    } catch (error) {
      alert(error);
    }

    setTodoInput("");
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={onSubmit}>
          <Input
            autoFocus
            placeholder="할 일을 입력해주세요"
            onChange={onChange}
            value={todoInput}
          />
          <InputButton>추가</InputButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default TodoCreate;

const InsertFormPositioner = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom: 1px solid #e9ecef;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 12px;
  width: 80%;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
`;

const InputButton = styled.button`
  padding: 11.5px;
  width: calc(20% - 10px);
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #dee2e6;

  &:hover {
    background-color: #63e6be;
  }
`;
