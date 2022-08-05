import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormLayout from "../FormLayout/FormLayout";

const Login = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <FormLayout>
      <LoginTitle>로그인</LoginTitle>
      <form>
        <LoginInputBox>
          <Input type="email" placeholder="이메일을 입력해주세요" />
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
          <LoginBtn>로그인</LoginBtn>
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
