import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import API from "../../config";

const TodoCreate = () => {
  const [todoInput, setTodoInput] = useState({
    title: "",
    content: "",
  });

  const { title, content } = todoInput;

  const handleChangeContentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodoInput({ ...todoInput, [name]: value });
  };

  const submitTodoItemCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    try {
      const res = await axios.post(
        `${API.todos}`,
        {
          title,
          content,
        },
        {
          headers: { Authorization: "token" },
        }
      );
      localStorage.getItem("token");
      alert("작성완료");
    } catch (error) {
      alert(error);
    }

    // setTodoInput({
    //   title: "",
    //   content: "",
    // });
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={submitTodoItemCreate}>
          <Input
            name="title"
            autoFocus
            onChange={handleChangeContentValue}
            placeholder="제목을 입력해주세요"
            value={title}
          />
          <Input
            name="content"
            autoFocus
            placeholder="할 일을 입력해주세요"
            onChange={handleChangeContentValue}
            value={content}
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
