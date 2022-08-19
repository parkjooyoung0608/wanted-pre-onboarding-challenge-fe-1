import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import API from "../../config";

type Props = {
  id: string;
  text: string;
  title: string;
  submitDeleteTodoItem: Function;
};

interface CheckCircleType {
  done: boolean;
}

type CheckCircleStyleType = Partial<CheckCircleType>;

const TodoItem = ({ id, text, title, submitDeleteTodoItem }: Props) => {
  const [edited, setEdited] = useState(false);
  const [done, setDone] = useState(false);
  const [newText, setNewText] = useState({
    newTitle: title,
    newContent: text,
  });

  useEffect(() => {
    setNewText({
      newTitle: title,
      newContent: text,
    });
  }, [title, text]);

  const { newTitle, newContent } = newText;

  const handleClickCheckCircleToggle = () => setDone(!done);

  const handleClickEditButton = () => setEdited(true);

  const handleChangeEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewText({
      ...newText,
      [name]: value,
    });
  };

  const submitAmendTodoValue = async (id: string) => {
    try {
      const res = await axios.put(
        `${API.todos}/${id}`,
        { title: newTitle, content: newContent },
        { headers: { Authorization: "token" } }
      );
      localStorage.getItem("token");
      console.log(res.data);
    } catch (error) {
      alert(error);
    }
    setEdited(false);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleClickCheckCircleToggle}>
        {done && `✔️`}
      </CheckCircle>

      {edited ? (
        <>
          <InputForm>
            <InputLabel htmlFor="title">제목 :</InputLabel>
            <InputText
              name="newTitle"
              type="text"
              id="title"
              onChange={handleChangeEditValue}
              value={newTitle}
            />
            <br />
            <InputLabel htmlFor="content">내용 :</InputLabel>
            <InputText
              name="newContent"
              type="text"
              id="content"
              onChange={handleChangeEditValue}
              value={newContent}
            />
          </InputForm>
          <AmendButton onClick={() => submitAmendTodoValue(id)}>
            수정하기
          </AmendButton>
        </>
      ) : (
        <>
          <Text done={done}>
            <Text>제목 : {newTitle}</Text>
            <Text>내용 : {newContent}</Text>
          </Text>
          <AmendButton onClick={handleClickEditButton}>수정</AmendButton>
        </>
      )}

      <RemoveButton onClick={() => submitDeleteTodoItem(id)}>🗑</RemoveButton>
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
  top: 150px;
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
  ${(props: CheckCircleStyleType) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  padding: 5px 0 6px 0;
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props: CheckCircleStyleType) =>
    props.done &&
    css`
      color: #ced4da;
    `}
  &:first-child {
    padding-bottom: 9px;
  }
`;

const InputForm = styled.form`
  flex: 1;
`;

const InputLabel = styled.label`
  margin-right: 5px;
  font-size: 21px;
  color: #495057;
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
