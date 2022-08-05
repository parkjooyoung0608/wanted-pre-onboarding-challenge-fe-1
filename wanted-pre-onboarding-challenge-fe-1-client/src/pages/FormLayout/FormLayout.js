import React from "react";
import styled from "styled-components";

const FormLayout = (props) => {
  return (
    <PageLayout>
      <PageContainer>{props.children}</PageContainer>
    </PageLayout>
  );
};

export default FormLayout;

const PageLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

const PageContainer = styled.div`
  border: 1px solid lightgray;
  text-align: center;
  padding: 50px;
  background-color: white;
`;
