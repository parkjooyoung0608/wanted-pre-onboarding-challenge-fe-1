import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../../TodoContext";

const TodoCreate = () => {
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    nextId.current += 1;
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={onSubmit}>
          <Input
            autoFocus
            placeholder="할 일을 입력 후, Enter 또는 추가버튼을 누르세요"
            onChange={onChange}
            value={value}
          />
          <InputButton>추가</InputButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);

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
