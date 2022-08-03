import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <SignUpPage>
      <SignUpContainer>
        <SignUpTitle>회원가입</SignUpTitle>
        <form>
          <SignUpInputBox>
            <InputLabel for="userId">id</InputLabel>
            <Input
              type="email"
              id="userId"
              placeholder="이메일을 입력해주세요"
            />
            <InputLabel for="userPassword">비밀번호</InputLabel>
            <Input
              type="password"
              id="userPassword"
              placeholder="비밀번호를 입력해주세요"
            />
            <InputLabel for="passwordReconfirm">비밀번호 재확인</InputLabel>
            <Input
              type="password"
              id="passwordReconfirm"
              placeholder="비밀번호를 다시 입력해주세요"
            />
            <InputLabel for="userName">이름</InputLabel>
            <Input type="text" id="userName" />
            <SignUpBtn>가입하기</SignUpBtn>
          </SignUpInputBox>
        </form>
      </SignUpContainer>
    </SignUpPage>
  );
};

export default SignUp;

const SignUpPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpContainer = styled.div`
  padding: 50px;
  border: 1px solid lightgray;
  background-color: rgba(0, 0, 0, 0.1);
`;

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
