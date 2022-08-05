import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormLayout from "../FormLayout/FormLayout";

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = inputValue;

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const emailCondition = email.includes("@") && email.includes(".");
  const passwordCondition = password.length > 7;

  const submitClickHandler = (e) => {
    e.preventDefault();
    if (emailCondition && passwordCondition) {
      navigate("/");
      alert("가입 완료!");
    }
    if (!(email && password)) {
      alert("모든 값을 입력해주세요!");
    }
  };

  return (
    <FormLayout>
      <SignUpTitle>회원가입</SignUpTitle>
      <form>
        <SignUpInputBox>
          <InputLabel htmlFor="userId">id</InputLabel>
          <Input
            name="email"
            type="email"
            id="userId"
            placeholder="이메일을 입력해주세요"
            onChange={inputChangeHandler}
            value={email}
          />
          <InputLabel htmlFor="userPassword">비밀번호</InputLabel>
          <Input
            name="password"
            type="password"
            id="userPassword"
            placeholder="비밀번호를 입력해주세요"
            onChange={inputChangeHandler}
            value={password}
          />
          <SignUpBtn onClick={submitClickHandler}>가입하기</SignUpBtn>
        </SignUpInputBox>
      </form>
    </FormLayout>
  );
};

export default SignUp;

const SignUpTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  text-align: center;
`;

const SignUpInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  line-height: 40px;
  border: 1px solid lightgray;
  outline: none;
  border-radius: 3px;

  &:focus {
    border: 1px solid gray;
  }
`;

const SignUpBtn = styled.button`
  margin: 10px auto 0 auto;
  width: 80%;
  height: 40px;
  border: none;
  background-color: #1995f6;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    background-color: #b2dffc;
  }

  &:disabled {
    width: 80%;
    margin: auto;
    height: 40px;
    margin-bottom: 80px;
    margin-top: 10px;
    border: none;
    background-color: #b2dffc;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: default;
  }
`;
