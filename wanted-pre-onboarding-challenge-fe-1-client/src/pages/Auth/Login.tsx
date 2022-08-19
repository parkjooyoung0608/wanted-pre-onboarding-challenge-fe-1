import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormLayout from "../FormLayout/FormLayout";
import API from "../../config";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleChangeUserEmailPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidationEmailPassword =
    email.includes("@") && email.includes(".") && password.length > 7;

  const submitUserEmailPassword = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API.login}`, {
        email,
        password,
      });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const goToSignUp = () => {
    navigate("/auth/signup");
  };

  return (
    <FormLayout>
      <LoginTitle>로그인</LoginTitle>
      <form>
        <LoginInputBox>
          <InputLabel htmlFor="userId">id</InputLabel>
          <Input
            name="email"
            type="email"
            id="userId"
            placeholder="이메일을 입력해주세요"
            onChange={handleChangeUserEmailPassword}
          />
          <InputLabel htmlFor="userPassword">비밀번호</InputLabel>
          <Input
            name="password"
            type="password"
            id="userPassword"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChangeUserEmailPassword}
          />
          <LoginBtn
            disabled={!isValidationEmailPassword}
            onClick={submitUserEmailPassword}
          >
            로그인
          </LoginBtn>
          <LoginBtn onClick={goToSignUp}>회원가입</LoginBtn>
        </LoginInputBox>
      </form>
    </FormLayout>
  );
};

export default Login;

const LoginTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
`;

const LoginInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  text-align: left;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 300px;
  margin-bottom: 20px;
  padding: 10px;
  line-height: 40px;
  border: 1px solid lightgray;
  outline: none;
  border-radius: 3px;

  &:focus {
    border: 1px solid gray;
  }
`;

const LoginBtn = styled.button`
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
