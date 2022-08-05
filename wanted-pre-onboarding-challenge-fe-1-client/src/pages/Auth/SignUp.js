import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormLayout from "../FormLayout/FormLayout";
import API from "../../config";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const inputConditionCheck =
    email.includes("@") && email.includes(".") && password.length > 7;

  const submitClickHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API.signUp}`, {
        email,
        password,
      });
      alert(res.data.message);
      navigate("/auth/login");
    } catch (error) {
      alert(error);
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
          <SignUpBtn
            disabled={!inputConditionCheck}
            onClick={submitClickHandler}
          >
            가입하기
          </SignUpBtn>
        </SignUpInputBox>
      </form>
    </FormLayout>
  );
};

export default SignUp;

const SignUpTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
`;

const SignUpInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  text-align: left;
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
    background-color: #b2dffc;
    cursor: default;
  }
`;
