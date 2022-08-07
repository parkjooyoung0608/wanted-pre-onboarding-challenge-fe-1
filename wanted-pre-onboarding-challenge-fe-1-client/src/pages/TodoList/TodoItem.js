import React, { useState } from "react";
import styled, { css } from "styled-components";

const TodoItem = ({ id, text }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(text);
  const [done, setDone] = useState(false);

  const onToggle = () => setDone(!done);
  const onRemove = () => console.log("Remove");

  const onClickEditButton = () => setEdited(true);
  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };
  const onClickSubmitButton = (e) => {
    setEdited(false);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && `✔️`}
      </CheckCircle>

      {edited ? (
        <>
          <InputForm>
            <InputText onChange={onChangeEditInput} value={newText} />
          </InputForm>
          <AmendButton onClick={onClickSubmitButton}>수정하기</AmendButton>
        </>
      ) : (
        <>
          <Text done={done}>{text}</Text>
          <AmendButton onClick={onClickEditButton}>수정</AmendButton>
        </>
      )}

      <RemoveButton onClick={onRemove}>🗑</RemoveButton>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

const AmendButton = styled.div`
  margin-right: 10px;
  padding: 8px;
  line-height: 24px;
  background: #38d9a9;
  text-align: center;
  color: white;
  border-radius: 20px;

  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  cursor: pointer;
`;

const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const TodoItemBlock = styled.div`
  position: relative;
  top: 110px;
  left: 0;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const InputForm = styled.form`
  flex: 1;
`;

const InputText = styled.input`
  padding: 5px 0 6px 0;
  font-size: 21px;
  color: #495057;
  border: none;
  border-bottom: 1px solid #f1f3f5;
  &:focus {
    outline: none;
  }
`;
