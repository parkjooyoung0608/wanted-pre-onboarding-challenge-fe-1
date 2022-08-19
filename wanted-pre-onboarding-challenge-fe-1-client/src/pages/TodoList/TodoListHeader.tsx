import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoListHeader = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login");
    }
  }, [isLogin]);

  const signOut = () => {
    if (isLogin) {
      localStorage.removeItem("token");
      navigate("/auth/login");
    }
  };

  return (
    <Nav>
      <SignOutButton onClick={signOut}>로그아웃</SignOutButton>
    </Nav>
  );
};

export default TodoListHeader;

const Nav = styled.nav`
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
`;

const SignOutButton = styled.button`
  padding: 11.5px;
  font-size: 18px;
  background-color: #63e6be;
  border: 1px solid #dee2e6;
  cursor: pointer;

  &:hover {
    background-color: #dee2e6;
  }
`;
