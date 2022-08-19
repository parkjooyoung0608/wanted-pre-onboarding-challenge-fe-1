import React from "react";
import styled from "styled-components";

const TodoTemplate = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;

const TodoTemplateBlock = styled.div`
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;
